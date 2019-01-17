import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

const ItemPage = ({ data }) => {
  return (
    <Layout>
     
    </Layout>
  )
}

ItemPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ItemPage;

export const ItemPageQuery = graphql`
  query ItemPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
