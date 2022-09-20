// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      <h1>About Me</h1>
      <Link to="/">Back to Home</Link>
      <p>Hi there! I'm the creator of this site, which I built with Gatsby.</p>
    </main>
  )
}

// Gatsby Head API lets you define <title> & other metadata
// by exporting Head component in a page inside src/pages 
export const Head = () => <title>About Me</title>

// Step 3: Export your component
export default AboutPage