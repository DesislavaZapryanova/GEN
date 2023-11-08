import React from 'react';
import './About.css';

function About() {
  return (
    <div className="container-about-page">
      <div className="container-frame">
        <p className="container-texts">
          GEN Interiors is a distinguished provider of top-tier interior design solutions, drawing
          upon extensive expertise in the field. We specialize in crafting exquisite interior
          designs tailored for residences, apartments, offices, restaurants, and various other
          settings. Additionally, our proficiency extends to the conceptualization and execution of
          bespoke projects involving custom furniture, kitchens, railings, visors, stairs, and more.
          Recognizing the distinctiveness of each client, along with their individual ideas and
          aspirations, we commit the requisite attention and time to curate a bespoke interior
          design that encapsulates your vision.
        </p>

        <img
          className="about-image"
          src="images/3.jpg"
        />
        <img
          className="about-image"
          src="images/3.jpg"
        />

        <p className="container-texts">
          Our suite of interior design services encompasses a comprehensive approach, from initial
          measurements to final implementation, harmonizing all client preferences seamlessly.
          Guided by the principles of design psychology, we commence by gaining an in-depth
          understanding of you and your lifestyle, ensuring that the proposed design aligns with
          your personal identity. We understand that design transcends mere drawings, it embodies a
          fusion of aesthetics, functionality, psychological resonance, and seamless integration
          within the environment.
        </p>
      </div>
    </div>
  );
}

export default About;
