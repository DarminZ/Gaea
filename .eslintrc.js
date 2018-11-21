// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "space-before-function-paren": 0,  // 0:函数定义时括号前面要不要有空格
    "eol-last": 0,  // 0:文件以单一的换行符结束
    "no-extra-semi": 0, // 0:可以多余的冒号
    "semi": 0,  // 0:语句可以不需要分号结尾
    "eqeqeq": 0, // 0:必须使用全等
    "one-var": 0, // 0:连续声明
    "no-undef": 1, // 1:警告 有未定义的变量
  }
}
