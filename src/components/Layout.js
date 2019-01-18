import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components";
import Navbar from '../components/Navbar';
import Theme from './styles/Theme';
import GlobalStyles from './styles/GlobalStyles';

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
          site {
            siteMetadata {
              title,
              description,
            }
          }
        }
    `}
    render={data => (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />
          
          <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
	        <link rel="icon" type="image/ico" href="/img/.ico"/>
          <link href="https://fonts.googleapis.com/css?family=Catamaran|Lato" rel="stylesheet"/>

	        <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#ff4400" />
	        <meta name="theme-color" content="#fff" />

	        <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
        </Helmet>
        <ThemeProvider theme={Theme}>
          <div>
            <GlobalStyles/>
            <Navbar />
            <div>{children}</div>
          </div>
        </ThemeProvider>
      </div>
    )}
  />
)

export default TemplateWrapper
