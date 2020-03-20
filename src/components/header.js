import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `orange`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
        <Link
          to="/blogs"
          style={{
            color: `orange`,
            float: `right`,
            paddingRight: `1rem`
          }}
        >
          Blogs
        </Link>
        <Link
          to="/skills"
          style={{
            color: `orange`,
            float: `right`,
            paddingRight: `1rem`
          }}
        >
          Skills
        </Link>
        <Link
        to="/projects"
        style={{
          color: `orange`,
          float: `right`,
          paddingRight: `1rem`
        }}
        >
          Projects
        </Link>
        <Link
        to="/about"
        style={{
          color: `orange`,
          float: `right`,
          paddingRight: `1rem`
        }}
        >
          About
        </Link>
      </h1>
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
