/*
 * @Author: saber
 * @Date: 2021-11-23 15:07:04
 * @LastEditTime: 2021-11-23 18:31:55
 * @LastEditors: saber
 * @Description: 
 */
// const colorValues = require('./colorNames')
const colorSystem = require('./colorSystem');
const colorTheme = require('./colorTheme');
let colorObject = {
  "transparent": "transparent",
  "current": "currentColor",
  ...colorSystem,
  ...colorTheme,
}

module.exports = colorObject