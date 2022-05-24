import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Top-notch Events',
    text: 'We are proud to come up with some of the best cyber-based events you will ever come across. Get ready to delve into this intriguing world.',
  },
  {
    title: 'Devoted Team',
    text: 'Our team boasts a bunch of knowledgable and commited members towards the upliftment of the society.',
  },
  {
    title: 'Our Achievements',
    text: 'Some of our achievements include.....',
  },
];

const Features = () => (
  <div className="cs__features section__padding" id="features">
    <div className="cs__features-heading">
      <p>We live in a Computer Society</p>
    </div>
    <div className="cs__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;