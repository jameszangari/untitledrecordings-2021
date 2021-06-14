import { css } from 'styled-components'
import * as theme from '@/styles/theme'

export default css`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    max-width: 100%;
    background: $color-black;
    color: ${theme.colors.white};
    font-family: ${theme.fonts.family.primary};
    font-weight: ${theme.fonts.weights.regular};
    font-size: 16px;
    line-height: 34px;
    scroll-behavior: smooth;
  }

  .is-open {
    overflow:hidden;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    margin: 0;
  }

  img {
    max-width: 100%;
  }

  button {
    outline: 0;
    margin: 0;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
    line-height: 1;
    vertical-align: middle;
  }

  // Fonts
  .u-heading-1 {
    line-height: 1;
    font-weight: 600;
    font-size: 54px;
    ${theme.mq.l} {
      font-size: 64px;
    }
  }
  .u-heading-2 {
    font-weight: 600;
    font-size: 38px;
    ${theme.mq.l} {
      font-size: 48px;
    }
  }
  .u-heading-3 {
    font-weight: 600;
    font-size: 36px;
  }
  .u-heading-4 {
    font-size: 24px;
    font-weight: 600;
  }
  .u-paragraph {
    line-height: 26px;
    font-size: 18px;
    font-family: ${theme.fonts.family.primary};
  }
  .u-paragraph-small {
    font-size: 14px;
    font-family: ${theme.fonts.family.primary};
  }
  
  // Utilities
  .u-align-left {
    text-align: left;
  }
  .u-align-center {
    text-align: center;
  }
  .u-align-right {
    text-align: right;
  }

  .skip-to-content-link {
    left: -999px;
    position: absolute;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
    z-index: -999;
    &:focus {
      left: auto;
      top: auto;
      width: 30%;
      height: auto;
      overflow: auto;
      margin: 0 35%;
      padding: 5px;
      font-size: 20px;
      outline: 3px solid red;
      text-align: center;
      z-index: 999;
    }
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
  ol {
    list-style-type: none;
    padding: 0;
  }

  a,
  button {
    color: inherit;
    text-decoration: none;
    &:hover {
      cursor: pointer;
    }
  }

  // Layouts
  .l-wrapper {
    width: 100%;
    max-width: 1240px;
    margin: 0 auto;
    padding-left: 3%;
    padding-right: 3%;
  }
  .l-wrapper--medium {
    width: 100%;
    max-width: 1100px;
    padding-left: 3%;
    padding-right: 3%;
    margin: 0 auto;
    ${theme.mq.m} {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
  }
  .l-wrapper--small {
    width: 100%;
    max-width: 854px;
    padding-left: 3%;
    padding-right: 3%;
    margin: 0 auto;
    ${theme.mq.m} {
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  // Buttons
  .o-button {
    display: inline-block;
    font-family: ${theme.fonts.family.primary};
    font-size: 16px;
    font-weight: ${theme.fonts.weights.regular};
    font-style: italic;
    padding: 12px 36px;
    color: ${theme.colors.blue};
    background: ${theme.colors.white};
    transition: all 0.3s ease;
    line-height: 1;
    width: max-content;
    cursor: pointer;
    border: 1.5px solid ${theme.colors.blue};
    border-radius: 50px;
    &:hover, &:focus {
      color: ${theme.colors.white};
      background: ${theme.colors.blue};
    }
  }
  .o-button__small {
    display: inline-block;
    font-family: ${theme.fonts.family.secondary};
    font-size: 12px;
    font-weight: ${theme.fonts.weights.semibold};
    text-transform: uppercase;
    padding: 10px 30px;
    color: ${theme.colors.blue};
    transition: all 0.3s ease;
    line-height: 1;
    width: max-content;
    cursor: pointer;
    border: 1.5px solid ${theme.colors.blue};
    border-radius: 50px;
    &:hover, &:focus {
      color: ${theme.colors.white};
      background: ${theme.colors.blue};
    }
  }
  .o-button__secondary {
    display: inline-block;
    font-family: ${theme.fonts.family.primary};
    font-size: 16px;
    font-weight: ${theme.fonts.weights.regular};
    font-style: italic;
    padding: 12px 36px;
    color: ${theme.colors.white};
    background: none;
    transition: all 0.3s ease;
    line-height: 1;
    width: max-content;
    cursor: pointer;
    border: 1px solid ${theme.colors.white};
    border-radius: 50px;
    &:hover, &:focus {
      color: ${theme.colors.gray};
      background: ${theme.colors.white};
    }
  }
  .c-header-mobile__menu-active < body {
      overflow: hidden;
  }
`
