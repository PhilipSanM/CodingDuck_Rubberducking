import React from "react"
import Layout from "../components/Layout"
import * as aboutStyles from "../examples/about.module.css"
import styled from "styled-components"

const about = () => {
  return (
    <Layout>
      <Wrapper>
        <div>
          <h1>Help me :$</h1>
        </div>
        <p>sdgdg adg a adga</p>
      </Wrapper>
    </Layout>
  )
}

// Styled components
const Wrapper = styled.section`
  color: yellow;
  background-color: rgb(245, 240, 255);

  .text {
    text-transform: capitalize;
  }

  .page h1 {
    color: yellowgreen;
  }
`

export default about
