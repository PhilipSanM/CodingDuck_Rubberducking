import React from "react"
import Layout from "../components/Layout"
import * as aboutStyles from "../examples/about.module.css"

const about = () => {
  return (
    <Layout>
      <div className={aboutStyles.page}>
        <h1>Help me :$</h1>
      </div>
      <p className={aboutStyles.text}>sdgdg adg a adga</p>
    </Layout>
  )
}

export default about
