import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next", "next/core-web-vitals", "next/typescript"),
    {
        rules: {
            "consistent-return": "off",
            "import/order": [
                "error",
                {
                    "groups": [
                        "builtin",
                        "external",
                        "internal",
                        "parent",
                        "sibling",
                        "index",
                        "object",
                        "unknown"
                    ],
                    "pathGroups": [
                        {
                            "pattern": "next**",
                            "group": "external",
                            "position": "before"
                        },
                        {
                            "pattern": "react",
                            "group": "external",
                            "position": "before"
                        },
                        {
                            "pattern": "@/**",
                            "group": "internal"
                        }
                    ],
                    "distinctGroup": false,
                    "pathGroupsExcludedImportTypes": [],
                    "newlines-between": "never",
                    "alphabetize": {
                        "order": "asc"
                    }
                }
            ],
            "import/prefer-default-export": "off",
            "lines-between-class-members": ["error", "always", { "exceptAfterSingleLine": true }],
            "react/no-danger": "off",
            "react/require-default-props": "off",
            "react/jsx-first-prop-new-line": [2, "multiline"],
            "react/jsx-max-props-per-line": [
                2,
                { "maximum": 1, "when": "multiline" }
            ],
            "@typescript-eslint/no-explicit-any": "off"
        }
    }
];

export default eslintConfig;
