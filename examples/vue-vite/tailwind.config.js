/*
 * @Author: saber
 * @Date: 2021-11-23 15:10:48
 * @LastEditTime: 2021-11-23 16:03:44
 * @LastEditors: saber
 * @Description: 
 */
module.exports = {
  mode: 'jit',
  purge: {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    options: {
      safelist: [
        /data-theme$/,
      ]
    },
  },
  plugins: [
    // require('daisyui')
    require('../../index')
  ],
}