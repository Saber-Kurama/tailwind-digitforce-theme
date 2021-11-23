/*
 * @Author: saber
 * @Date: 2021-11-23 14:58:24
 * @LastEditTime: 2021-11-23 18:30:04
 * @LastEditors: saber
 * @Description:
 */
const colors = require("./colors/index");
const base = require("./dist/base");
// dayui
const mainFunction = ({ addBase, config }) => {
  // console.log('config------?', config())
  addBase(base)
};
// check if tailwindcss package exists
let isTailwindInstalled = false;
try {
  // 判断是否有 tailwindcss/plugin
  require.resolve("tailwindcss/plugin");
  isTailwindInstalled = true;
} catch (er) {
  isTailwindInstalled = false;
}
console.log('colors-----', colors)
if (isTailwindInstalled !== false) {
  // 直接配置插件
  module.exports = require("tailwindcss/plugin")(mainFunction, {
    theme: { extend: { colors } },
  });
} else {
  // 返回函数
  module.exports = mainFunction;
}
