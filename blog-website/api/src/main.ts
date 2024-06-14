import { app } from '@azure/functions';

import * as fallback from './functions/fallback/index.js';
import * as redirectReport from './functions/redirect-report/index.js';
import type { FunctionModule } from './functionModule.js';

function registerModules(...modules: FunctionModule[]) {
  for (const module of modules) {
    app.http(module.name, module.options);
  }
}

registerModules(
  fallback.GET,

  redirectReport.GET,
);
