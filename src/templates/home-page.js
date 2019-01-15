import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

const HomePage = ({ data }) => {
  return (
    <Layout>

    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default HomePage;


export const homePageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`