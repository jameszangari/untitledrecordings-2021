import { css } from 'styled-components'
import * as theme from '@/styles/theme'

export default css`
  .o-button {
    display: inline-block;
    font-family: ${theme.fonts.family.primary};
    font-size: 16px;
    font-weight: 600;
    padding: 12px 24px;
    color: ${theme.colors.white};
    transition: all 0.3s ease;
    line-height: 1;
    width: max-content;
    cursor: pointer;
    border: none;
  }
  .o-button-primary {
    display: inline-block;
    font-family: ${theme.fonts.family.primary};
    font-size: 16px;
    font-weight: 600;
    padding: 12px 24px;
    color: ${theme.colors.white};
    transition: all 0.3s ease;
    line-height: 1;
    width: max-content;
    cursor: pointer;
    border: none;
    background: ${theme.colors.red};
    &:after {
      content: '\f061';
      display: inline-block;
      font-family: 'FontAwesome';
      color: ${theme.colors.white};
      transform: rotate(-45deg);
      margin-left: 10px;
    }
    &:hover {
      box-shadow: 3px 3px 0px ${theme.colors.white};
      background: ${theme.colors.darkred};
    }
    &--small {
      display: inline-block;
      font-family: ${theme.fonts.family.primary};
      font-size: 16px;
      font-weight: 600;
      padding: 12px 24px;
      color: ${theme.colors.white};
      transition: all 0.3s ease;
      line-height: 1;
      width: max-content;
      cursor: pointer;
      border: none;
      background: ${theme.colors.red};
      font-size: 14px;
      padding: 8px 12px;
    }
  }
  .o-button-secondary {
    display: inline-block;
    font-family: ${theme.fonts.family.primary};
    font-size: 16px;
    font-weight: 600;
    padding: 12px 24px;
    color: ${theme.colors.white};
    transition: all 0.3s ease;
    line-height: 1;
    width: max-content;
    cursor: pointer;
    border: none;
    background: ${theme.colors.blue};
    &:after {
      content: '\f061';
      display: inline-block;
      font-family: 'FontAwesome';
      color: ${theme.colors.white};
      transform: rotate(-45deg);
      margin-left: 10px;
    }
    &:hover {
      box-shadow: 3px 3px 0px ${theme.colors.white};
      background: ${theme.colors.blue};
    }
    &--small {
      display: inline-block;
      font-family: ${theme.fonts.family.primary};
      font-size: 16px;
      font-weight: 600;
      padding: 12px 24px;
      color: ${theme.colors.white};
      transition: all 0.3s ease;
      line-height: 1;
      width: max-content;
      cursor: pointer;
      border: none;
      background: ${theme.colors.blue};
      font-size: 14px;
      padding: 8px 12px;
    }
  }
  .o-button-stream {
    display: inline-block;
    font-family: ${theme.fonts.family.primary};
    font-size: 16px;
    font-weight: 600;
    padding: 12px 24px;
    transition: all 0.3s ease;
    line-height: 1;
    width: max-content;
    cursor: pointer;
    border: none;
    background: ${theme.colors.white};
    color: $color-black;
    font-weight: 700;
    &:after {
      content: '\f061';
      font-family: 'FontAwesome';
      transform: rotate(-45deg);
      position: relative;
      float: right;
    }
    &:hover {
      box-shadow: 3px 3px 0px ${theme.colors.white};
      background: ${theme.colors.gray};
      color: ${theme.colors.white};
    }
  }
`
