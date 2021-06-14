import styled, { css } from 'styled-components'
import * as theme from '@/styles/theme'

export const ExtendContent = css`
  * + * {
    margin-top: 20px;
  }
  p {
    line-height: 150%;
  }
`

export const Content = styled.div`
  ${ExtendContent};
`
