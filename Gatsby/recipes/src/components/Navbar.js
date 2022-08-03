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
          <Link to="/home">about</Link>
        </li>
        <li>
          <Link to="/recipes">recipes</Link>
        </li>
        <li>
          <Link to="/tags">tags</Link>
        </li>
      </ul>
    </div>
  )
}

export default navar
