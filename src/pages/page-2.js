import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <h1>Paul's heading</h1>

    <h1>Thilo's heading</h1>
    <h3>This is Daniel</h3>
  </Layout>
)

export default SecondPage
