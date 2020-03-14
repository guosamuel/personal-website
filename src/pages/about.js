import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { interview } from "../data/interview"
import Question from "../components/question"



const About = () => {

  const dialogue = interview.map( qAndA => {
    console.log("inside of the mapping", qAndA)
  })

  return (
    <Layout>
      <SEO title="About" />
      <h1>Who is Samuel?</h1>
      <div>meep</div>
    </Layout>
  )
}

export default About
