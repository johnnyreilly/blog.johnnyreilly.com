// @ts-check

const RENOVATE = 'renovate[bot]';

/**
 * @typedef {Object} PullRequestInfo
 * @prop {string} title
 * @prop {string} author - login of the PR author
 * @prop {string} actor - login of whoever triggered this run (e.g. pushed the latest commit)
 * @prop {string} branch
 * @prop {string} headRepo
 * @prop {string} baseRepo
 * @prop {string[]} labels - Renovate adds `update:<type>` and `dep:<type>` labels (see renovate.json)
 */

/**
 * @typedef {Object} Guard
 * @prop {string} name
 * @prop {(pr: PullRequestInfo) => boolean} passes
 */

/**
 * @typedef {Object} Rule
 * @prop {string} name
 * @prop {(pr: PullRequestInfo) => boolean} matches
 */

/**
 * Every PR must pass all guards before any rule is considered.
 * @type {Guard[]}
 */
const guards = [
  {
    name: 'not from a fork',
    passes: (pr) => pr.headRepo === pr.baseRepo,
  },
  {
    name: 'opened by Renovate',
    passes: (pr) => pr.author === RENOVATE,
  },
  {
    name: 'latest change made by Renovate',
    passes: (pr) => pr.actor === RENOVATE,
  },
  {
    name: 'on a renovate/ branch',
    passes: (pr) => pr.branch.startsWith('renovate/'),
  },
  {
    // Fails closed: a PR with no update:* label yet (Renovate may add labels just
    // after opening the PR) is not eligible until the label arrives
    name: 'not a major update',
    passes: (pr) => {
      const updateLabels = pr.labels.filter((label) =>
        label.startsWith('update:'),
      );
      return updateLabels.length > 0 && !updateLabels.includes('update:major');
    },
  },
];

/**
 * Add new auto-merge criteria here - a PR is eligible if it passes every guard
 * and matches at least one rule.
 * @type {Rule[]}
 */
const rules = [
  {
    name: 'chore(deps) update',
    matches: (pr) => /^chore\(deps\):/.test(pr.title),
  },
];

/**
 * Builds the PR details the guards and rules evaluate from the github-script `context`
 * of a `pull_request` event. If a new rule needs more data, add it here and to
 * PullRequestInfo.
 * @param {{ actor: string, repo: { owner: string, repo: string }, payload: { pull_request?: any } }} context
 * @returns {PullRequestInfo}
 */
function toPullRequestInfo(context) {
  const pr = context.payload.pull_request;
  return {
    title: pr.title,
    author: pr.user.login,
    actor: context.actor,
    branch: pr.head.ref,
    headRepo: pr.head.repo?.full_name ?? '',
    baseRepo: `${context.repo.owner}/${context.repo.repo}`,
    labels: pr.labels.map(
      (/** @type {{ name: string }} */ label) => label.name,
    ),
  };
}

/**
 * @param {PullRequestInfo} pr
 */
function evaluateAutomerge(pr) {
  // A Renovate PR the gate is responsible for - if it becomes ineligible (e.g. someone
  // else pushes to it) auto-merge should be disabled. PRs the gate doesn't manage are
  // left alone so manually enabled auto-merge isn't switched off.
  const managed =
    pr.headRepo === pr.baseRepo &&
    pr.author === RENOVATE &&
    pr.branch.startsWith('renovate/');

  const failedGuard = guards.find((guard) => !guard.passes(pr));
  if (failedGuard) {
    return {
      eligible: false,
      managed,
      reason: `Failed guard: ${failedGuard.name}`,
    };
  }

  const matchedRule = rules.find((rule) => rule.matches(pr));
  if (!matchedRule) {
    return {
      eligible: false,
      managed,
      reason: 'Passed all guards but matched no rule',
    };
  }

  return {
    eligible: true,
    managed,
    reason: `Matched rule: ${matchedRule.name}`,
  };
}

module.exports = { evaluateAutomerge, toPullRequestInfo, guards, rules };
