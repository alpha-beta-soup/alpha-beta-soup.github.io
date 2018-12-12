import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Bio from '../components/ExtendedBio'
import Layout from '../components/Layout'
import { rhythm } from '../utils/typography'

class Index extends React.Component {
  render() {
    const data = this.props.data;
    const siteTitle = data.site.siteMetadata.title
    const siteDescription = data.site.siteMetadata.description
    const lastPost = data.allMarkdownRemark.edges[0].node
    const lastPostTitle = lastPost.frontmatter.title || lastPost.fields.slug
    const lastPostPath = lastPost.frontmatter.path || lastPost.fields.slug
    return (
      <Layout location={this.props.location} title={siteTitle} style={{fontSize: '5vw'}}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <Bio />
        <div key={lastPost.fields.slug}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)'
          }}>
            <h4 style={{gridColumn: '1/2'}}>Most recent post</h4>
            <h4 style={{gridColumn: '3/last', textAlign: 'right'}}>
              <a href="/blog">All posts</a>
            </h4>
          </div>
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
            <Link style={{ boxShadow: 'none' }} to={lastPostPath}>
              {lastPostTitle}
            </Link>
          </h3>
          <small>{lastPost.frontmatter.date}</small>
          <p dangerouslySetInnerHTML={{ __html: lastPost.excerpt }} />
        </div>
      </Layout>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
