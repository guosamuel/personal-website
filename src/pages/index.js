import React from "react"
import styles from "./css-modules.module.css"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const imageURL = 'https://media-exp1.licdn.com/dms/image/C5603AQH9KmTFZP-zQA/profile-displayphoto-shrink_200_200/0?e=1588809600&v=beta&t=fSXinxjcWcKo-vKhZLw8MJlyy18ELJxzQnZQ-UD_cV4'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={styles.user}>
      <img src={imageURL} className={styles.avatar} alt="" />
      <div className={styles.description}>
        <h2 className={styles.username}>Hi, Samuel here!</h2>
        <p className={styles.excerpt}>
          I am a full-stack developer, living in New York City, who is constantly working on side projects or learning something new.
        </p>
        <br />
        <p className={styles.excerpt}>
          I believe in the mentality of being a student for life. I'm always on the lookout of constantly learning new skills or concepts, applying those skills or concepts to wherever is applicable, and adapting to whatever scenario that life may throw at me.
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
