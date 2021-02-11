import React from "react"
import facebookIcon from "../images/facebook-icon.svg"

const Title: React.FC = () => (
  <div>
    <h1>South Reef Property Preservation Inc.</h1>
    <ul>
      <li>
        <a href="https://www.facebook.com/srppfl" rel="Our facebook page">
          <img src={facebookIcon} alt="facebook icon" />
        </a>
      </li>
    </ul>
  </div>
)

export default Title
