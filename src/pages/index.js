import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Label from '../components/Label';
import Section from '../components/styles/Section';
import Portfolio from './Portfolio';

const IndexPage = ({ data }) => {
    const frontData = data.allMarkdownRemark.edges[0].node.frontmatter;
    const { header, subheader, header_image } = frontData;

    return (
        <Layout>
            <Header backgroundImage={header_image}>
                <Label>Hello</Label>
                <h1>{header}</h1>
                <h2>{subheader}</h2>
            </Header>
            <Section center>
                <h3>Who am I?</h3>
                <p>
                    Lorem Ipsum is slechts een proeftekst uit het drukkerij- en
                    zetterijwezen. Lorem Ipsum is de standaard proeftekst in
                    deze bedrijfstak sinds de 16e eeuw, toen een onbekende
                    drukker een zethaak met letters nam en ze door elkaar
                    husselde om een font-catalogus te maken. Het heeft niet
                    alleen vijf eeuwen overleefd maar is ook, vrijwel
                    onveranderd, overgenomen in elektronische letterzetting. Het
                    is in de jaren '60 populair geworden met de introductie van
                    Letraset vellen met Lorem Ipsum passages en meer recentelijk
                    door desktop publishing software zoals Aldus PageMaker die
                    versies van Lorem Ipsum bevatten.
                </p>
            </Section>
            <Section center>
                <h4>Portfolio</h4>
                <Portfolio/>
            </Section>
            <Section />
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
