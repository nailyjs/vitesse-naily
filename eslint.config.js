// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
    formatters: true,
    rules: {
      'ts/no-redeclare': 'off',
      'ts/method-signature-style': 'off',
    },
  },
)
