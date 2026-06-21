import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import type { Linter } from "eslint";

const eslintConfig: Linter.Config[] = [
  ...nextCoreWebVitals,
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
