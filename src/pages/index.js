import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Index</h1>
    <h2>External Links</h2>
    <ul>
      <li>
        <Link to="https://github.com/Yayaka">
          GitHub Organization
        </Link>
      </li>
    </ul>
  </div>
)

export default IndexPage
