"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[48610],{99703:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(67294),l=a(95999),r=a(32244);function o(e){var t=e.metadata,a=t.previousPage,o=t.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,l.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(r.Z,{permalink:a,title:n.createElement(l.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),o&&n.createElement(r.Z,{permalink:o,title:n.createElement(l.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},79985:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(67294),l=a(9460),r=a(78047);function o(e){var t=e.items,a=e.component,o=void 0===a?r.Z:a;return n.createElement(n.Fragment,null,t.map((function(e){var t=e.content;return n.createElement(l.n,{key:t.metadata.permalink,content:t},n.createElement(o,null,n.createElement(t,null)))})))}},41714:function(e,t,a){a.r(t),a.d(t,{default:function(){return E}});var n=a(67294),l=a(86010),r=a(95999),o=a(88824),i=a(10833),s=a(35281),g=a(39960),c=a(39058),m=a(99703),u=a(90197),p=a(79985);function d(e){var t,a=(t=(0,o.c)().selectMessage,function(e){return t(e,(0,r.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))});return(0,r.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:a(e.count),tagName:e.label})}function h(e){var t=d(e.tag);return n.createElement(n.Fragment,null,n.createElement(i.d,{title:t}),n.createElement(u.Z,{tag:"blog_tags_posts"}))}function b(e){var t=e.tag,a=e.items,l=e.sidebar,o=e.listMetadata,i=d(t);return n.createElement(c.Z,{sidebar:l},n.createElement("header",{className:"margin-bottom--xl"},n.createElement("h1",null,i),n.createElement(g.Z,{href:t.allTagsPath},n.createElement(r.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),n.createElement(p.Z,{items:a}),n.createElement(m.Z,{metadata:o}))}function E(e){return n.createElement(i.FG,{className:(0,l.Z)(s.k.wrapper.blogPages,s.k.page.blogTagPostListPage)},n.createElement(h,e),n.createElement(b,e))}}}]);