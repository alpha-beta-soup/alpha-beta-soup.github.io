import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import { rhythm } from '../utils/typography'
import Tag from '../components/Tag'

class BlogIndex extends React.Component {
  render() {
    const data = this.props.data;
    const siteTitle = data.site.siteMetadata.title
    const siteDescription = data.site.siteMetadata.description
    const posts = data.allMarkdownRemark.edges
    return (
      <Layout location={this.props.location} title={siteTitle} style={{fontSize: '5vw'}}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <Bio />
        {
          posts.map(post => {
            const title = post.node.frontmatter.title || post.node.fields.slug
            const path = post.node.frontmatter.path || post.node.fields.slug
            const tags = post.node.frontmatter.tags || []
            const tagsContainer = tags.length ? (
              <div>
                <div style={{fontSize: 'x-small'}}><strong>See other posts tagged with</strong></div>
                {
                  tags.map(tag => (
                    <Tag key={tag} tag={tag}/>
                  ))
                }
              </div>
            ) : null
            return (
              <div key={post.node.fields.slug}>
                <div>
                  <h3
                    style={{
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link style={{ boxShadow: 'none' }} to={path}>
                      {title}
                    </Link>
                  </h3>
                  <small>{post.node.frontmatter.date}</small>
                  <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
                </div>
                {tagsContainer}
              </div>
            )
          })
        }
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            updated(formatString: "MMMM DD, YYYY")
            tags
          }
        }
      }
    }
  }
`
