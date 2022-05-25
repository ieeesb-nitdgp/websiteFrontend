import React from 'react';
import Feature from '../../components/feature/Feature';
import './about.css';

const About = () => (
  <div className="cs__whatcs section__margin" id="wcs">
    <div className="cs__whatcs-heading">
      <h1 className="gradient__text">Delve into a world of possibilities!</h1>
    </div>
    <div className="cs__whatcs-container">
      <Feature title="10+ Events" />
      <Feature title="30+ Members" />
      <Feature title="500+ Participants" />
    </div>
  </div>
);

export default About;