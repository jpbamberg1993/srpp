import React from "react"
import Img, { FluidObject } from "gatsby-image"

interface Props {
  bgImage: FluidObject
}

class Banner extends React.Component<Props> {
  render() {
    return (
      <div>
        <Img fluid={this.props.bgImage} />
      </div>
    )
  }
}

export default Banner
