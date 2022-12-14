// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'


// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Page">
      <p>Hi there! I'm the creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

// Gatsby Head API lets you define <title> & other metadata
// by exporting Head component in a page inside src/pages 
export const Head = () => <Seo title="About Me" />

// Step 3: Export your component
export default AboutPage