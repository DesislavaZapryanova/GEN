import React from 'react';
import './About.css';

function About() {
  return (
    <div className="container-about-page">
      <div className="container-frame">
        <p>
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
          src="images/sketch3.jpg"
        />
      </div>
      <div className="container-frame">
        <img
          className="about-image"
          src="images/sketch1.jpg"
        />
        <p>
          Our suite of interior design services encompasses a comprehensive approach, from initial
          measurements to final implementation, harmonizing all client preferences seamlessly.
          Guided by the principles of design psychology, we commence by gaining an in-depth
          understanding of you and your lifestyle, ensuring that the proposed design aligns with
          your personal identity. We understand that design transcends mere drawings; it embodies a
          fusion of aesthetics, functionality, psychological resonance, and seamless integration
          within the environment.
        </p>
      </div>
      <div className="container-frame">
        <p>
          With a personalized approach to each interior design endeavor, our aim is to transform
          your every aspiration into something extraordinary and distinct. In our pursuit of staying
          abreast of contemporary trends in architecture and design, we infuse a modern perspective
          into our work.
        </p>
        <img
          className="about-image"
          src="images/sketch2.jpg"
        />
      </div>
    </div>
  );
}

export default About;
