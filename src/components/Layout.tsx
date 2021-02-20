import React, {ReactNode} from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

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
        <div
          style={{
            margin: 'a auto',
            maxWidth: 960,
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

export default Layout 
