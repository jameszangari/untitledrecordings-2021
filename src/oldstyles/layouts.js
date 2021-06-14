import styled, { css } from 'styled-components'
import theme from './theme'

export const ExtendGridStyle = css`
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 3%;
  width: 100%;
  ${theme.mq.l1} {
    padding: 0;
  }
`

export const Grid = styled.div`
  ${ExtendGridStyle};
`
