import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
//My mistake the name of that
import { page, text } from "../examples/home.module.css"
import { ExampleButton } from "../examples/button"

export default function Home() {
  return (
    <Layout>
      {/* Doble {}because is JS nOT css */}
      {/* So now You can add color like JS  */}
      <h1 style={{ color: "blue", textTransform: "capitalize" }}>
        Hello world! :), shit Home page
      </h1>
      <ExampleButton>Click on me</ExampleButton>
      <Link to="/about"> About </Link>
      <div>
        <a href="/about">reg Link</a>
      </div>
      <div>
        <Link to="/company/history">history</Link>
      </div>

      <h1>Hello again</h1>
      {/* Lets apply the class so: */}
      <div className={page}>
        <h1>Hello, but this have a class</h1>
        <p className={text}>lorem lorem</p>
      </div>
    </Layout>
  )
}
