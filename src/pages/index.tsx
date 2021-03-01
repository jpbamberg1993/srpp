import React from 'react'
import { PageProps, graphql } from 'gatsby'
import { FluidObject } from 'gatsby-image'

import Layout from '@/components/Layout'
import Contact from '@/components/Contact'
import Banner from '@/components/Banner'
import About from '@/components/About'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'

type IndexQueryProps = {
  tucksatdump: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
}

type IndexPageProps = PageProps<IndexQueryProps>

const Home: React.FC<IndexPageProps> = (props: IndexPageProps) => (
  <Layout>
    <Contact />
    <Banner bgImage={props.data.tucksatdump.childImageSharp.fluid} />
    <About />
    <BeforeAfterSlider />
  </Layout>
)

export const query = graphql`
  query {
    tucksatdump: file(relativePath: { eq: "trucks-at-dump.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default Home
