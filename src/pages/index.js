import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Label from '../components/Label';
import Section from '../components/styles/Section';
import { MainHeading, SubHeading, PlayHeading } from '../components/styles/Headings';
import Portfolio from './Portfolio';
import Testimonials from '../components/Testimonials';
import Paragraph from '../components/styles/Paragraph';

const SampleTestimonials = [
    {
        quote: 'Sit sint Lorem nisi ut dolor ullamco cupidatat mollit exercitation.',
        author: 'Jane van Gaalen',
        imageUrl: 'https://bodhiyogateachertraining.com/wp-content/uploads/2015/10/Testimonial-71.png'
    },
    {
        quote: 'Ontzettend Gaaf. Leuke Samenwerking. Erg fijn',
        author: 'Jane van Gaalen',
        imageUrl: 'https://bodhiyogateachertraining.com/wp-content/uploads/2015/10/Testimonial-71.png'
    },
];

const IndexPage = ({ data }) => {
    const frontData = data.homepage.edges[0].node.frontmatter;
    const { header, subheader, header_image } = frontData;

    const portfolioCollection = [ {'products': data.products} ];
    const listTestimonials = data.testimonials;

    return (
        <Layout>
            <Header backgroundImage={header_image}>
                <PlayHeading>
                    Pleased to meet you
                </PlayHeading>
                <MainHeading as="h1">
                    {header}
                </MainHeading>
                <SubHeading as="h2">
                    {subheader}
                </SubHeading>
            </Header>
            <Section center>
                <Paragraph>
                    <PlayHeading>
                        Who am I?
                    </PlayHeading>
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
                </Paragraph>
            </Section>
            <Section>
                <Portfolio portfolioCollection={portfolioCollection}/>
            </Section>
            <Section>
                <Testimonials testimonials={SampleTestimonials} />
            </Section>
        </Layout>
    );
};

export const creationImageQuery = graphql`
    fragment creationImageQuery on MarkdownRemarkConnection {
        edges {
            node {
                frontmatter {
                    image {
                        publicURL
                        childImageSharp {
                            original {
                                src
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const homepageQuery = graphql`
    query homepageQuery {
        homepage: allMarkdownRemark(
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
                    }
                }
            }
        }

        products: allMarkdownRemark(
            filter: { frontmatter: { design_type: { eq: "Product" } } }
        ) {
            ...creationImageQuery
        }

        brand: allMarkdownRemark(
            filter: { frontmatter: { design_type: { eq: "Brand" } } }
        ) {
            ...creationImageQuery
        }
        
        testimonials: allMarkdownRemark(
            filter: { frontmatter: {templateKey: {eq: "testimonial-page"}}}
        ) {
        edges {
            node {
            	frontmatter {
                author
                imageUrl
                logoUrl
                affiliate
                quote
              }
            }
        }
    }
    }
`;

export default IndexPage;
