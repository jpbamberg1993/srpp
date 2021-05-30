import React, {ReactNode} from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { GlobalStyle } from '../styles/theme'
import { StyledLayout } from '../styles/layout.css'

interface Props {
  children: ReactNode
}

const Layout = ({children}: Props) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
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
    )}
  />
)

export default Layout 
