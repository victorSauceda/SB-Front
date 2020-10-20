import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = center => (
  <Layout>
    <Helmet title={'About Page'} />
    <Header title="About Page">Santa Barbara Re-entry App</Header>
    <Container center={center}>
      <h3>these are some things that you should know</h3>
    </Container>
  </Layout>
);

export default About;

About.propTypes = {
  center: PropTypes.object,
};
