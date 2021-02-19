import React from "react"
import Img, { FluidObject } from "gatsby-image"

interface Props {
  bgImage: FluidObject
}

export class Banner extends React.Component<Props> {
  render() {
    return (
      <div>
        <Img fluid={this.props.bgImage} />
      </div>
    )
  }
}

// export const Banner = (props: ImageProp) => (
//   <div>
//     <Img fixed={props.bgImage} />
//   </div>
// )
