import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import door from "../images/door.png"

import Layout from "../components/layout"
import Seo from "../components/seo"

// css
import "./index.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <img src={door} className="door" />
    {/* <StaticImage
      src="../images/door.png"
      width={"980px"}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
    /> */}
  </Layout>
)

export default IndexPage
