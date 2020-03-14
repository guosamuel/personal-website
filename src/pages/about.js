import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { interview } from "../data/interview"
import Question from "../components/question"



const About = () => {

  const dialogue = interview.map( (qAndA,index) => {
    return (
      <div key={index}>
        <Question question={qAndA.question} />
        <br />
        <br />
      </div>
    )
  })

  return (
    <Layout>
      <SEO title="About" />
      <div>{dialogue}</div>
    </Layout>
  )
}

export default About
