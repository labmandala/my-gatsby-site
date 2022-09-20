// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'

// Step 2: Define component
const IndexPage = () => {
  return (
    <main>
      <h1>Welcome to my Gatsby site!</h1>
      <Link to="/about">About</Link>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </main>
  )
}

// More to come, just copy for now
export const Head = () => <title>Home Page</title>

// Step 3: Export component
export default IndexPage