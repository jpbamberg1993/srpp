import React, {ReactNode} from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { GlobalStyle } from '../styles/theme'
import { StyledLayout } from '../styles/layout.css'

interface Props {
  children: ReactNode
}

const Layout = ({children}: Props) => (
  <>
    <Helmet
      title='South Reef Property Preservation Inc'
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]}
    >
      <html lang="en" />
    </Helmet>
    <StyledLayout>
      {children}
    </StyledLayout>
  </>
)

export default Layout 
