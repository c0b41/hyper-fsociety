'use strict';
const foregroundColor = '#A9BCD0';
const backgroundColor = '#1B1B1E';
const black = '#1B1B1E';
const red = '#ff5c57';
const green = '#5af78e';
const yellow = '#f3f99d';
const blue = '#57c7ff';
const magenta = '#ff6ac1';
const cyan = '#9aedfe';
const gray = '#f1f1f0';
const brightBlack = '#B0BEC5';
const brightWhite = foregroundColor;

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    showHamburgerMenu:true,
    backgroundColor,
    foregroundColor,
    borderColor:red,
    cursorColor: '#D8DBE2',
    fontSize:14,
    fontFamily:'Fira Code, Menlo, DejaVu Sans Mono, Lucida Console, monospace',
    colors: [
      black,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      gray,
      brightBlack,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      brightWhite
    ],
    css: `
      ${config.css || ''}
      .tab_tab {
        border: 0 !important;
      }
      .tab_active{
        background-color: #373F51;
      }
      .tab_active:before {
        border-color: #2A99CF;
      }
    `
  });
}
