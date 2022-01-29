import * as React from "react"
// import { StaticImage } from "gatsby-plugin-image"

import door from "../images/door.png"
import lantern from "../images/lantern.gif"
import text from "../images/text.png"
import bg from "../images/025.png"
import tree from "../images/tree.png"
import lion from "../images/lion.png"
import fire from "../images/fire.mp4"

import Layout from "../components/layout"
import Seo from "../components/seo"

// css
import "./index.css"

const IndexPage = () => {
  const video = React.useRef()
  if (video.current) {
    const promise = video.current.play()
    if (promise !== undefined) {
      promise
        .catch(error => {
          // Auto-play was prevented
          // Show a UI element to let the user manually start playback
        })
        .then(() => {
          // Auto-play started
        })
    }
  }

  return (
    <Layout>
      <Seo title="Index" />
      <img src={bg} className="bg" />
      <img src={text} className="text" />
      <img src={door} className="door" />
      <img src={lantern} className="lantern lantern-left" />
      <img src={lantern} className="lantern lantern-right" />
      <video
        width="100%"
        height="100%"
        muted
        controls={false}
        autoplay={true}
        loop={true}
        ref={video}
      >
        <source src={fire} type="video/mp4" />
      </video>
      <footer>
        <img src={tree} className="tree tree-right" />
        <img src={tree} className="tree tree-left" />
        <img src={lion} className="lion lion-left" />
        <img src={lion} className="lion lion-right" />
      </footer>
    </Layout>
  )
}

export default IndexPage
