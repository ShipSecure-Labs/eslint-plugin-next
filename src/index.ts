import { readFileSync } from "fs";
import { rule as enforceHttps } from "./rules/enforce-https";
import { rule as noClientSideSecrets } from "./rules/no-client-side-secrets";
import { rule as noDangerouslySetInnerHtml } from "./rules/no-dangerously-set-inner-html";
import { rule as noEval } from "./rules/no-eval";
import { rule as noInlineStyles } from "./rules/no-inline-styles";
import { rule as noOpenRedirects } from "./rules/no-open-redirects";
import { rule as requireRelNoopenerNoreferrer } from "./rules/require-rel-noopener-noreferrer";
import { rule as requireScriptIntegrity } from "./rules/require-script-integrity";
import { resolve } from "path";

const packageJson = JSON.parse(readFileSync(resolve("./package.json"), "utf8"));

const config = {
  meta: {
    name: "shipsecure-next",
    version: packageJson.version,
  },
  rules: {
    "enforce-https": enforceHttps,
    "no-client-side-secrets": noClientSideSecrets,
    "no-dangerously-set-inner-html": noDangerouslySetInnerHtml,
    "no-eval": noEval,
    "no-inline-styles": noInlineStyles,
    "no-open-redirects": noOpenRedirects,
    "require-rel-noopener-noreferrer": requireRelNoopenerNoreferrer,
    "require-script-integrity": requireScriptIntegrity,
  },
};

export default config;
