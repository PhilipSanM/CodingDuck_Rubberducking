import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
//My mistake the name of that
export default function Home() {
  return (
    <Layout>
      <h1>Hello world! :), shit Home page</h1>
      <Link to="/about"> About </Link>
      <div>
        <a href="/about">reg Link</a>
      </div>
      <div>
        <Link to="/company/history">history</Link>
      </div>
    </Layout>
  )
}
