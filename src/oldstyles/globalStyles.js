import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
// import fonts from './fonts'
import general from './general'
import objects from './objectIcons'

const GlobalStyles = createGlobalStyle`
// Packages
${normalize}

// Base
${general}
${objects}

`

export default GlobalStyles
