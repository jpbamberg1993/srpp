import React from "react"
import { PageProps, graphql } from "gatsby"

import Layout from "@/components/Layout"
import Contact from "@/components/Contact"
import Banner from "@/components/Banner"

const Home: React.FC<PageProps> = ({ data }) => (
  <Layout>
    <Contact />
    <Banner bgImage={data.file.childImageSharp.fluid} />
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "trucks-at-dump.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default Home
