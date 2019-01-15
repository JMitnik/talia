import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import Header from '../components/Header';

export const HomePageTemplate = ({ title, content, contentComponent }) => {
    const PageContent = contentComponent || Content;

    return (
        <Header>
            <PageContent content={content} />
            <div>Test12312</div>
        </Header>
    );
};

HomePageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentComponent: PropTypes.func
};

const HomePage = ({ data }) => {
    return (
        <div>
            <span>{data}</span>
            <HomePageTemplate
                contentComponent={HTMLContent}
                title="Test"
                content="Dog"
            />
        </div>
    );
};

HomePage.propTypes = {
    data: PropTypes.object.isRequired
};

export default HomePage;

export const homePageQuery = graphql`
    query HomePage {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "home-page" } } }
        ) {
            edges {
                node {
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
