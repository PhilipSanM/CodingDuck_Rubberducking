import React from "react"
import { Link } from "gatsby"
const navar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>
    </div>
  )
}

export default navar
