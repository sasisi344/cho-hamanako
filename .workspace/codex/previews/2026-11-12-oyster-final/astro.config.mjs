import base from "../../../../astro.config.mjs";
import { fileURLToPath } from "node:url";

export default {
  ...base,
  outDir: "./.workspace/codex/previews/2026-11-12-oyster-final/dist/",
  cacheDir: "./.workspace/codex/previews/2026-11-12-oyster-final/cache/",
  integrations: [
    ...base.integrations,
    {
      name: "oyster-final-local-preview",
      hooks: {
        "astro:config:setup": ({ injectRoute }) => {
          injectRoute({
            pattern: "/__oyster-final/",
            entrypoint: fileURLToPath(new URL("./preview.astro", import.meta.url)),
          });
        },
      },
    },
  ],
};
