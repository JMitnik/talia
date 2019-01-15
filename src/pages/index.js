import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import HomePage from '../templates/home-page';

const IndexPage = () => (
  <Layout>
    <HomePage />
  </Layout>
)

export default IndexPage;