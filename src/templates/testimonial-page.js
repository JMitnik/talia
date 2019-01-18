import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

const TestimonialPage = ({ data }) => {
  return (
    <Layout>
     
    </Layout>
  )
}

TestimonialPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default TestimonialPage;

export const testimonialPageQuery = graphql`
  query testimonialPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
