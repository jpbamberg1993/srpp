import React from "react"
import { PageProps, graphql } from "gatsby"

import Title from "@/components/Title"
import Banner from "@/components/Banner"

const Home: React.FC<PageProps> = ({ data }) => (
  <main className="container">
    <Title />
    <Banner bgImage={data.file.childImageSharp.fluid} />
  </main>
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
