import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Header from '../components/Header';

const IndexPage = ({ data }) => {
    const frontData = data.allMarkdownRemark.edges[0].node.frontmatter;
    const { header, subheader, header_image } = frontData;

    return (
        <Layout>
          <Header>
            <h1>{header}</h1>
            <h2>{subheader}</h2>
          </Header>
        </Layout>
    );
};

export const homepageQuery = graphql`
    query homepageQuery {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "home-page" } } }
        ) {
            edges {
                node {
                    excerpt(pruneLength: 400)
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        header
                        subheader
                        header_image
                    }
                }
            }
        }
    }
`;

export default IndexPage;
