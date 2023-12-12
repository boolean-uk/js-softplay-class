module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    jasmine: true
  },
  extends: ['standard', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 'latest'
  },

  
  overrides: [
    {
      files: ['src/soft-play.js'],
      rules: {
        'no-console': 'error'
      },
      parserOptions: {
        ecmaVersion: 'latest',
      },
      scripts: {
        "lint": "eslint --fix --ext .js"
    }
    },
  ],
};


