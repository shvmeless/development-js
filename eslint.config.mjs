import globals from 'globals'
import javascript from '@eslint/js'
import typescript from 'typescript-eslint'
import love from 'eslint-config-love'
import stylistic from '@stylistic/eslint-plugin'

const rules = {
  '@typescript-eslint/array-type': ['error', { default: 'generic', readonly: 'generic' }],
  '@typescript-eslint/no-dynamic-delete': 'off',
  '@typescript-eslint/no-magic-numbers': 'off',

  "@typescript-eslint/prefer-destructuring": [ 'error', { "array": true, "object": true },
    {
      "enforceForRenamedProperties": false,
      "enforceForDeclarationWithTypeAnnotation": false
    }
  ],

  '@typescript-eslint/no-unsafe-argument': 'error',
  '@typescript-eslint/no-unsafe-assignment': 'error',
  '@typescript-eslint/no-unsafe-call': 'error',
  '@typescript-eslint/no-unsafe-declaration-merging': 'error',
  '@typescript-eslint/no-unsafe-return': 'error',
  '@typescript-eslint/no-unsafe-enum-comparison': 'error',
  '@typescript-eslint/no-unsafe-function-type': 'error',
  '@typescript-eslint/no-unsafe-member-access': 'error',
  '@typescript-eslint/no-unsafe-unary-minus': 'error',

  '@stylistic/padded-blocks': 'off',
  '@stylistic/space-before-function-paren': ['error', 'always'],
  '@stylistic/arrow-parens': ['error', 'always'],
}

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: globals.node } },
  javascript.configs.recommended,
  ...typescript.configs.recommended,
  { ...love },
  stylistic.configs['recommended-flat'],
  { rules }
]
