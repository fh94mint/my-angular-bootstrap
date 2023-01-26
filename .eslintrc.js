module.exports = {
  root: true,
  ignorePatterns: ["projects/**/*"],
  overrides: [
    {
      files: ["*.ts"],
      parserOptions: {
        project: ["./tsconfig.json"],
      },
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@typescript-eslint/strict",
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
        "prettier",
      ],
      plugins: ["unicorn"],
      rules: {
        /**
         * @summary Angular ESLint
         */
        "@angular-eslint/directive-selector": [
          "error",
          {
            type: "attribute",
            prefix: "app",
            style: "camelCase",
          },
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            type: "element",
            prefix: "app",
            style: "kebab-case",
          },
        ],

        /**
         * @summary ESLintルール（追加分）
         */
        "array-callback-return": ["error"],
        "no-unmodified-loop-condition": ["error"],
        "default-case": ["error"],
        "default-case-last": ["error"],
        eqeqeq: ["error", "always", { null: "ignore" }],
        "func-style": ["error", "declaration", { allowArrowFunctions: true }],
        "no-await-in-loop": ["error"],
        "no-constructor-return": ["error"],
        "no-promise-executor-return": ["error"],
        "max-classes-per-file": ["error", 1],
        "no-bitwise": ["error"],
        "no-inline-comments": ["error"],
        "no-plusplus": ["error"],
        "no-return-assign": ["error"],
        "no-alert": ["error"],
        "no-nested-ternary": ["error"],
        "no-useless-concat": ["error"],
        "no-floating-decimal": ["error"],
        "no-param-reassign": ["error"],
        "no-var": ["error"],
        "object-shorthand": ["error"],
        "prefer-template": ["error"],
        "prefer-spread": ["error"],
        "prefer-promise-reject-errors": ["error"],
        "spaced-comment": ["error"],
        yoda: ["error", "never", { exceptRange: true }],

        /**
         * @summary ESLint TypeScript Plugin ルール（追加分）
         */
        "@typescript-eslint/array-type": [
          "error",
          {
            default: "array",
          },
        ],
        "@typescript-eslint/no-unused-vars": [
          "warn",
          { argsIgnorePattern: "^_" },
        ],
        "@typescript-eslint/consistent-indexed-object-style": [
          "error",
          "record",
        ],
        "@typescript-eslint/consistent-type-assertions": ["error"],
        "@typescript-eslint/explicit-function-return-type": ["error"],
        "@typescript-eslint/explicit-member-accessibility": [
          "error",
          { accessibility: "no-public" },
        ],
        "@typescript-eslint/member-ordering": ["error"],
        "@typescript-eslint/method-signature-style": ["error", "property"],
        "@typescript-eslint/naming-convention": [
          "warn",
          {
            selector: "default",
            format: ["strictCamelCase"],
            leadingUnderscore: "allow",
            trailingUnderscore: "allow",
          },
          {
            selector: "variable",
            format: ["strictCamelCase", "UPPER_CASE"],
            leadingUnderscore: "allow",
            trailingUnderscore: "allow",
          },
          {
            selector: "objectLiteralProperty",
            format: ["strictCamelCase", "snake_case"],
          },
          {
            selector: "typeLike",
            format: ["PascalCase"],
          },
        ],
        "@typescript-eslint/member-ordering": ["warn"],
        "@typescript-eslint/no-confusing-non-null-assertion": ["error"],
        "@typescript-eslint/no-useless-constructor": ["error"],
        "@typescript-eslint/strict-boolean-expressions": [
          "error",
          {
            allowString: false,
            allowNumber: false,
            allowNullableObject: false,
          },
        ],
        "@typescript-eslint/no-unused-expressions": ["error"],
        "@typescript-eslint/no-shadow": ["error"],
        "@typescript-eslint/require-array-sort-compare": ["error"],
        "@typescript-eslint/prefer-string-starts-ends-with": ["error"],
        "@typescript-eslint/prefer-regexp-exec": ["error"],
        "@typescript-eslint/no-extra-parens": ["error"],
        "@typescript-eslint/lines-between-class-members": ["error"],
        "@typescript-eslint/no-duplicate-imports": ["error"],
        "@typescript-eslint/require-await": ["error"],
        "@typescript-eslint/no-for-in-array": ["error"],
        "@typescript-eslint/no-parameter-properties": [
          "warn",
          { allows: ["private readonly"] },
        ],
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": ["error"],
        "@typescript-eslint/prefer-includes": ["error"],
        "@typescript-eslint/prefer-optional-chain": ["error"],
        "@typescript-eslint/no-dynamic-delete": ["error"],
        "@typescript-eslint/promise-function-async": ["error"],
        "@typescript-eslint/no-throw-literal": ["error"],
        "@typescript-eslint/no-require-imports": ["error"],
        "@typescript-eslint/no-implicit-any-catch": ["error"],

        /**
         * @summary ESLintルール（除外分）
         */
        "@typescript-eslint/no-extraneous-class": "off",

        /**
         * @summary ESLintルール（unicorn）
         * @description https://github.com/sindresorhus/eslint-plugin-unicorn/tree/main/docs/rules
         */
        // ファイル名はkebab-caseに統一する
        "unicorn/filename-case": [
          "error",
          {
            case: "kebabCase",
          },
        ],
        // catch句の変数名は必ず "e" にする
        "unicorn/catch-error-name": [
          "warn",
          {
            name: "e",
          },
        ],
        // 省略形命名を許可しないようにする
        "unicorn/prevent-abbreviations": [
          "warn",
          {
            replacements: {
              e: false,

              // 命名禁止ルールを追加する場合は、"命名: true"
            },
            checkProperties: true,
            checkVariables: true,
            checkFilenames: true,
            ignore: [],
          },
        ],

        /**
         * @summary 以下配列,文字列,オブジェクト操作の書き方統一
         */
        "unicorn/prefer-number-properties": ["warn"],
        "unicorn/prefer-negative-index": ["warn"],
        "unicorn/prefer-negative-index": ["warn"],
        "unicorn/prefer-string-slice": ["warn"],
        "unicorn/prefer-string-starts-ends-with": ["warn"],
        "unicorn/prefer-string-trim-start-end": ["warn"],
        "unicorn/prefer-array-find": ["warn"],
        "unicorn/prefer-array-flat": ["warn"],
        "unicorn/prefer-array-flat-map": ["warn"],
        "unicorn/prefer-array-index-of": ["warn"],
        "unicorn/prefer-array-some": ["warn"],
        "unicorn/prefer-code-point": ["warn"],
        "unicorn/prefer-default-parameters": ["warn"],
        "unicorn/prefer-object-from-entries": ["warn"],
        "unicorn/prefer-includes": ["warn"],
        "unicorn/prefer-spread": ["warn"],
        "unicorn/require-array-join-separator": ["warn"],
        "unicorn/require-number-to-fixed-digits-argument": ["warn"],
        "unicorn/throw-new-error": ["warn"],
        "unicorn/no-new-array": ["warn"],
        "unicorn/no-new-buffer": ["warn"],
        "unicorn/no-array-push-push": ["warn"],
        "unicorn/no-nested-ternary": ["warn"],
      },
    },
    {
      files: ["*.html"],
      extends: ["plugin:@angular-eslint/template/recommended"],
      rules: {},
    },
  ],
};
