import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { interview } from "../information/interview"
import Question from "../components/question"
import Answer from "../components/answer"
import styles from "./css-modules.module.css"

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
      <SEO title="Samuel Guo About" />
      <div className={styles.dialogueContainer}>{dialogue}</div>
    </Layout>
  )
}

export default About
