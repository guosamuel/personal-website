import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { interview } from "../information/interview"
import Question from "../components/question"
import Answer from "../components/answer"


const About = () => {

  const dialogue = interview.map( (qAndA,index) => {
    return (
      <div key={index}>
        <Question question={qAndA.question} />
        <br />
        <Answer answer={qAndA.answer} />
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
