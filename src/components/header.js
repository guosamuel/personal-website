import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styles from "./css-modules.module.css"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.headerContainer}>
      <div className={styles.margins}>
        <Link
          to="/"
          className={styles.name}
        >
          {siteTitle}
        </Link>
      </div>
      <div className={styles.margins}>
        <Link
          to="/about"
          className={styles.links}
        >
          About
        </Link>
        <Link
          to="/blogs"
          className={styles.links}
        >
          Blogs
        </Link>
        <Link
          to="/skills"
          className={styles.links}
        >
          Skills
        </Link>
        <Link
          to="/projects"
          className={styles.links}
        >
          Projects
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
