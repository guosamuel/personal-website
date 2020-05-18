import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./css-modules.module.css"

const Header = ({ siteTitle }) => (
  <header
    className={styles.header}
  >
    {/*
    <div
      style={{
        margin: `0 auto`,
        maxWidth: window.innerWidth < 2000 ? 960 : 0.8*window.innerWidth,
        padding: `1.45rem 1.0875rem`,
        display: `flex`,
        flexWrap: `wrap`,
        justifyContent: `space-between`,
        fontFamily: "Jura"
      }}
    >
    */}
    <div className={styles.headerContainer}>
      {/*
      <div style={{
        fontSize: (Math.max(window.innerWidth, window.innerHeight)*0.04) > 40 ? 40 : `4vmax`,
        marginTop: `0.5rem`,
        marginBottom: `0.5rem`
      }}>
      */}
      <div className={styles.name}>
      <p style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </p>
      </div>
      <div style={{
        fontSize: (Math.max(window.innerWidth, window.innerHeight)*0.04) > 40 ? 28 : `2.75vmax`,
        marginTop: `0.5rem`,
        marginBottom: `0.5rem`
      }}>
        <Link
          to="/blogs"
          style={{
            color: `white`,
            float: `right`,
            paddingRight: `1rem`,
            textDecoration: `none`
          }}
        >
          Blogs
        </Link>
        <Link
          to="/skills"
          style={{
            color: `white`,
            float: `right`,
            paddingRight: `1rem`,
            textDecoration: `none`,
          }}
        >
          Skills
        </Link>
        <Link
        to="/projects"
        style={{
          color: `white`,
          float: `right`,
          paddingRight: `1rem`,
          textDecoration: `none`,
        }}
        >
          Projects
        </Link>
        <Link
        to="/about"
        style={{
          color: `white`,
          float: `right`,
          paddingRight: `1rem`,
          textDecoration: `none`,
        }}
        >
          About
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
