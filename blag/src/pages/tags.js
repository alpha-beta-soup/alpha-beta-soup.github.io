import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { Link, graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"

import { rhythm } from '../utils/typography'
import Tag from '../components/Tag'
import Bio from '../components/Bio'

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <div>
    <Helmet title={`${title} | Tags`}/>
    <div style={{
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: rhythm(24),
      padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
    }}>
      <Bio/>
      <h1>Tags</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridGap: 10
      }}>
        {group.sort((a, b) => a.totalCount < b.totalCount).map(tag => (
          <Tag tag={tag.fieldValue} value={tag.totalCount}/>
        ))}
      </div>
    </div>
  </div>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { published: { ne: false } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
