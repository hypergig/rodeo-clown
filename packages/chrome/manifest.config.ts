import {defineManifest} from '@crxjs/vite-plugin'

export default defineManifest(async (env) => (
  {
    manifest_version: 3,
    name: "Rodeo Clown",
    version: "0.1.0",
    action: {default_popup: "index.html"},
    background: {service_worker: "src/background.ts"},
    content_scripts: [
      {
        js: ["src/dndb-content.tsx"],
        matches: [
          "https://*.dndbeyond.com/monsters*"
        ]
      },
    ],
    declarative_net_request: {
      rule_resources: [
        {
          id: "ruleset_1",
          enabled: true,
          path: "rules.json"
        }
      ]
    },
    permissions: [
      "declarativeNetRequest",
      "declarativeNetRequestWithHostAccess"
    ],
    host_permissions: [
      "https://*.dndbeyond.com/*",
      "https://*.owlbear.rodeo/*",
    ],
  }
))
