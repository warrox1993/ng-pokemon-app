// @ts-check
// import unusedImports from "eslint-plugin-unused-imports";
import eslint from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import angular from "angular-eslint";
import tseslint from "typescript-eslint";
import unicorn from "eslint-plugin-unicorn";
import unusedImports from "eslint-plugin-unused-imports";
import { createRequire } from 'node:module';

// Fix for old plugins not yet in ESM
const require = createRequire(import.meta.url);
const pluginImport = require('eslint-plugin-import');

export default tseslint.config(
    {
        files: ["**/*.ts"],
        ignores: [
            "**/service-proxies.ts",
            "src/index.html",
            "src/app/core/app-permissions.ts"
        ],
        extends: [
            eslint.configs.recommended,
            ...tseslint.configs.recommended,
            ...tseslint.configs.stylistic,
            ...angular.configs.tsRecommended,
        ],
        plugins: {
            "@stylistic": stylistic,
            "unused-imports": unusedImports,
            "import": pluginImport,
            "unicorn": unicorn,
        },
        processor: angular.processInlineTemplates,
        rules: {
            "unused-imports/no-unused-imports": "warn",
            "no-case-declarations": "off",
            "no-console": ["error", { allow: ["warn", "error"] }],
            "no-extend-native": "error",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/consistent-type-definitions": "off",
            "@typescript-eslint/no-unused-vars": ["error", {
                argsIgnorePattern: "^_",
            }],
            "@typescript-eslint/no-empty-function": ["warn", {
                allow: [
                    "arrowFunctions",
                    "constructors",
                    "private-constructors",
                    "protected-constructors"
                ]
            }],


            "@stylistic/no-multi-spaces": ["warn"],
            "@stylistic/object-curly-spacing": ["warn", "always"],
            "@stylistic/indent": ["warn", 4],
            "@stylistic/no-trailing-spaces": ["warn"],
            "@stylistic/function-call-spacing": ["warn", "never"],
            "@stylistic/no-multiple-empty-lines": ["warn", {
                "max": 1,
                "maxEOF": 0,
                "maxBOF": 0
            }],
            "@stylistic/max-statements-per-line": ["warn", { "max": 1 }],
            "@stylistic/padding-line-between-statements": [
                "warn",
                { blankLine: "always", prev: ["block", "block-like"], next: "*" },
                { blankLine: "always", prev: "*", next: ["block", "block-like"] },
                { blankLine: "always", prev: "*", next: ["function", "class"] },
                { blankLine: "always", prev: ["function", "class"], next: "*" },
                // { blankLine: "always", prev: "case", next: "*" }
            ],
            "@stylistic/multiline-ternary": ["warn", "always-multiline"],
            "@stylistic/operator-linebreak": ["warn", "before", {
                overrides: {
                    "=": "none",
                    "?": "before",
                    ":": "before",
                    "&&": "after",
                    "||": "after",
                }
            }],
            "@stylistic/type-named-tuple-spacing": ["warn"],
            "@stylistic/quote-props": ["warn", "as-needed"],
            "@stylistic/member-delimiter-style": ["warn", {
                multiline: {
                    delimiter: "semi",
                    requireLast: true
                },
                singleline: {
                    delimiter: "semi",
                    requireLast: false
                }
            }],
            "@stylistic/semi": ["warn", "always"],
            "@stylistic/semi-spacing": ["warn", { "before": false, "after": true }],
            "@stylistic/rest-spread-spacing": ["warn", "never"],
            "@stylistic/one-var-declaration-per-line": ["warn", "always"],
            "@stylistic/template-curly-spacing": "warn",
            "@stylistic/function-call-argument-newline": ["warn", "consistent"],
            "@stylistic/array-bracket-newline": ["warn", { multiline: true, minItems: 2 }],
            "@stylistic/no-whitespace-before-property": "warn",
            "@stylistic/implicit-arrow-linebreak": ["warn", "beside"],
            "@stylistic/array-bracket-spacing": ["warn", "never"],
            "@stylistic/array-element-newline": ["warn", "always"],
            "@stylistic/arrow-parens": ["warn", "as-needed"],
            "@stylistic/quotes": ["warn", "single"],
            "@stylistic/arrow-spacing": ["warn", { "before": true, "after": true }],
            "@stylistic/comma-spacing": ["warn", { "before": false, "after": true }],
            "@stylistic/block-spacing": ["warn", "always"],
            "@stylistic/computed-property-spacing": ["warn", "never"],
            "@stylistic/brace-style": ["warn", "1tbs"],
            "@stylistic/padded-blocks": ["warn", "never"],
            "@stylistic/keyword-spacing": ["warn", { before: true, after: true }],
            "@stylistic/space-before-blocks": ["warn", "always"],
            "@stylistic/space-unary-ops": "warn",
            '@stylistic/type-annotation-spacing': ['warn', {
                before: false,
                after: true,
                overrides: {
                    arrow: {
                        before: true,
                        after: true
                    }
                }
            }],
            "@stylistic/switch-colon-spacing": ["warn", { "after": true, "before": false }],
            "@stylistic/space-before-function-paren": ["warn", {
                anonymous: "never",
                named: "never",
                asyncArrow: "always"
            }],
            "@stylistic/space-in-parens": ["warn", "never"],
            "@stylistic/space-infix-ops": ["warn"],
            "@stylistic/key-spacing": ["warn", { "beforeColon": false, "afterColon": true, mode: "strict" }],
            "@stylistic/comma-dangle": [
                "warn",
                {
                    arrays: "always-multiline",
                    objects: "always-multiline",
                    imports: "always-multiline",
                    exports: "always-multiline",
                    functions: "never",
                },
            ],

            "unicorn/throw-new-error": "warn",
            "unicorn/template-indent": "warn",
            "unicorn/require-array-join-separator": "warn",
            "unicorn/prefer-prototype-methods": "warn",
            "unicorn/prefer-optional-catch-binding": "warn",
            "unicorn/prefer-number-properties": "warn",
            "unicorn/no-useless-switch-case": "error",
            "unicorn/no-unnecessary-await": "error",
            "unicorn/no-negation-in-equality-check": "error",
            "unicorn/error-message": "error",
            "unicorn/no-empty-file": "error",
            "unicorn/no-await-in-promise-methods": "error",
            "unicorn/no-abusive-eslint-disable": "error",
            "unicorn/no-accessor-recursion": "error",
            "unicorn/consistent-date-clone": "error",
            "unicorn/new-for-builtins": "error",
            "unicorn/filename-case": [
                "error",
                {
                    "case": "kebabCase"
                }
            ],

            "import/order": [
                "warn",
                {
                    "groups": [
                        "builtin",      // ex: fs, path
                        "external",     // ex: angular, lodash
                        "internal",     // ex: @app/services
                        "parent",       // ex: ../
                        "sibling",      // ex: ./component
                        "index",        // ex: ./ (fichier index)
                        "object",       // rare, type { foo } from "bar"
                        "type",         // types TS
                    ],
                    "pathGroups": [
                        {
                            pattern: "@app/**",
                            group: "internal",
                            position: "after"
                        }
                    ],
                    "pathGroupsExcludedImportTypes": ["builtin"],
                    "alphabetize": {
                        order: "asc",
                        caseInsensitive: true
                    },
                    "newlines-between": "always"
                }
            ],

            "@angular-eslint/directive-selector": [
                "error",
                {
                    type: "attribute",
                    style: "camelCase",
                },
            ],
            "@angular-eslint/component-selector": [
                "error",
                {
                    type: "element",
                    style: "kebab-case",
                },
            ],
            "@angular-eslint/no-input-rename": "off"
        },
    },
    {
        files: ["**/*.html"],
        extends: [
            ...angular.configs.templateRecommended,
            ...angular.configs.templateAccessibility,
        ],
        rules: {
            "@angular-eslint/template/label-has-associated-control": "off",
            "@angular-eslint/template/alt-text": "off",
            "@angular-eslint/template/interactive-supports-focus": "off",
            "@angular-eslint/template/click-events-have-key-events": "off",
        },
    }
);
