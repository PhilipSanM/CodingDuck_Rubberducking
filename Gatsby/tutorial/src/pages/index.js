import React from "react"
import { Link } from "gatsby"
export default function Home() {
  return (
    <div>
      <h1>Hello world! :)</h1>
      <Link to="/about"> About </Link>
      <div>
        <a href="/about">reg Link</a>
      </div>
      <div>
        <Link to="/company/history">history</Link>
      </div>
    </div>
  )
}
