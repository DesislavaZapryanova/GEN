import React, { useState } from 'react';
import './MyAccordion.css';

function AccordionItem({ title, content, index, activeIndex, toggleAccordion }) {
  const isOpen = index === activeIndex;

  return (
    <div className="accordion-item">
      <div
        className={`accordion-title ${isOpen ? 'active' : ''}`}
        onClick={() => toggleAccordion(index)}>
        <h2>{title}</h2>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
}

function MyAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: 'INTERIOR DESIGN',
      content: (
        <>
          <p>
            At GEN Interiors we appreciate that our array of specific interior design services could
            be extensively enumerated. However, we believe it is more insightful to present our
            capabilities by elucidating what we can offer you.
          </p>

          <p>
            Working with individuals brimming with innovative concepts poses a formidable challenge,
            as it is they who propel progress and transformation. Yet, the role of an interior
            designer extends beyond the mere inception of an idea; it necessitates its tangible
            realization. Frequently, this entails the conversion of the seemingly unattainable into
            an attainable reality.
          </p>

          <p>
            We understand that time stands as the most precious of resources. Hence, we propose the
            optimal utilization of your personal time, advising against its expenditure on tasks
            such as tile selection, computations of requisite construction materials, and the
            meticulous planning of residential interior designs.
          </p>
          <p>
            Accumulating experience is an endeavor that demands substantial dedication and practice.
            In the realm of interior design, this requisite is inherent, for beyond the aspiration
            to effect change lies the imperative to delineate the method by which it is to be
            achieved. As an interior design studio, we extend to you the benefit of our extensive
            years of experience. This reservoir of expertise empowers us to embark on ventures of
            remarkable audacity, often venturing into territories where others might hesitate to
            tread.
          </p>
          <p>
            Efficient organization stands as an imperative, even in the case of the most modest
            interior modification projects. This encompasses the entire process, commencing from
            conceptualization, design, contractor procurement and oversight, material and furnishing
            sourcing, up to the final cleanup. Seasoned interior designers would attest that the
            most substantial efforts are often dedicated to troubleshooting unforeseen challenges.
          </p>
          <p>
            Financial considerations play a pivotal role. It has been empirically established that
            possessing a well-conceived project, alongside the requisite expertise and a proficient
            team, constitutes the most direct and budget-conscious avenue towards its realization.
          </p>
          <p>
            We extend a selection of packages tailored to accommodate diverse customer preferences.
            You may peruse the details of these offerings in the dedicated section outlining our
            pricing structure.
          </p>
        </>
      ),
    },
    {
      title: 'PROJECT SUPERVISION',
      content: (
        <>
          <p>
            The designer's oversight in the realm of interior design stands as one of the pivotal
            stages in the execution of any interior project. This phase encompasses a range of
            precise tasks, assuring clients of GEN Interiors, both domestically and internationally,
            that their approved design drawings will be faithfully translated into reality.
          </p>

          <p>
            Given the gravity of the undertaking and the multiple stakeholders involved, it is
            prudent to formalize this process through a comprehensive contract delineating design
            and copyright supervision. This document serves to articulate the responsibilities of
            each party involved, thereby ensuring the utmost protection of the rights of our valued
            customers.
          </p>

          <p>
            Optimal outcomes are achieved through the collective expertise of a project manager,
            architect, designer, and construction and assembly contractor, each boasting extensive
            experience in orchestrating and executing akin projects. Designer's supervision stands
            as an indispensable facet of every interior design endeavor. We take great pride in
            offering our expertise and commitment, vouchsafing the entire process—from project
            conceptualization to the meticulous oversight of the author's vision in interior design,
            all underwritten by our esteemed name and proven experience.
          </p>
          <p>
            Author supervision for an interior project by GEN Interiors is detailed in our 'Delux'
            package. Should you be interested in availing this service and wish to ascertain its
            cost, we recommend utilizing our calculator. By inputting the square footage, you will
            obtain a preliminary estimate of the budget required for our services, eliminating the
            need for a bespoke quotation request.
          </p>
          <p>
            While our headquarters are located in Derbyshire, it is worth noting that we collaborate
            with clients both domestically and internationally. Additionally, for those interested,
            we can facilitate consumer financing options for the presented interior design proposal.
          </p>
        </>
      ),
    },
    {
      title: 'OVERALL EXECUTION',
      content: (
        <>
          <p>
            We understand the considerable stress associated with orchestrating a renovation,
            involving the coordination of subcontractors, procurement of materials, selection of
            furnishings, and the meticulous planning of installations, encompassing even the finer
            details like lighting fixtures. GEN Interiors addresses this challenge with our
            comprehensive 'Complete Implementation' service.
          </p>

          <p>
            Under this service, we take charge of sourcing all requisite offerings at every juncture
            of the project. This includes overseeing the entire spectrum of subcontractors such as
            repair crews, installers, as well as manufacturers of soft and cabinet furniture, among
            others. Rest assured, your project will be in the capable hands of its creators. Our
            commitment entails frequent site visits, factory inspections, and store visits
            throughout the entirety of the implementation phase, without any limitations on the
            number of supervisory interventions.
          </p>

          <p>
            This unwavering dedication ensures the precise and impeccable realization of your
            project, without compromise.
          </p>
          <p>
            For information regarding the pricing of author supervision for an interior project by
            GEN Interiors, please contact us through the provided email addresses.
          </p>
          <p>
            Please note that our 'Complete Implementation' service is exclusively available for
            projects designed by GEN Interiors. While our headquarters are located in Derbyshire, it
            is worth noting that we collaborate with clients both domestically and internationally.
            Additionally, for those interested, we can facilitate consumer financing options for the
            presented interior design proposal.
          </p>
        </>
      ),
    },
    {
      title: 'DESIGN STAGES',
      content: (
        <>
          <h3>STAGE 1 – LET’S GET TO KNOW EACH OTHER</h3>
          <p>
            Our initial meeting will center entirely on discerning your personal taste and
            distinctive style. Kindly provide insights into your preferences and aversions,
            envisioning the desired ambiance of your bedroom, and specifying favored hues for
            upholstered furniture. We will furnish you with a comprehensive questionnaire to capture
            these details. Furthermore, we will present an array of material samples, paint options,
            and more, allowing you to make informed choices. This process aims to intimately
            acquaint us with your lifestyle and preferences.
          </p>
          <h3>STAGE 2 – THE OFFER</h3>
          <p>
            We are pleased to present you with an option that encompasses 3D visualizations coupled
            with a detailed layout featuring precise dimensions of your interior project. This phase
            allows for an in-depth discussion of the most fitting options, affording you the
            opportunity to suggest partial adjustments. Subsequently, we will incorporate your
            revisions and present an updated version. The quantity of iterations we provide is
            contingent upon the specific package of services you have selected. Following the review
            of each iteration, you will have the opportunity to make partial refinements to ensure
            the final design aligns seamlessly with your vision.
          </p>
          <h3>STAGE 3 – FINAL TOUCHES</h3>
          <p>
            We are pleased to introduce a meticulously crafted project through a comprehensive 3D
            visualization. Depending on the selected package, you will receive a comprehensive set
            of technical documents, including working drawings, sections, electrical and plumbing
            installations, as well as detailed furniture plans. For those with a keen eye for
            detail, we also offer the option of a pristine crystal-clear 3D animation, providing a
            vivid glimpse into the future of your home, shop, restaurant, or office. Additionally,
            it is important to note that every project is accompanied by a detailed bill of
            quantities and a comprehensive breakdown of all materials employed in its realization.
          </p>
        </>
      ),
    },
    {
      title: 'PRICES',
      content: (
        <>
          <p>
            There are several compelling reasons to choose GEN Interiors for your interior design
            needs:
          </p>

          <p>
            <h3>Comprehensive Service Offering:</h3>
            GEN Interiors provides a wider range of services bundled in cost-effective packages.
          </p>

          <p>
            <h3>Transparent Pricing:</h3>
            At GEN Interiors, we believe in complete transparency. Our pricing structures are clear,
            and there are no hidden charges.
          </p>

          <p>
            <h3> Full Implementation Commitment:</h3>
            With our "full implementation" service, we remain dedicated to your project from its
            inception to the final cleaning, ensuring excellence without constraints on site visits
            or subcontractor involvement.
          </p>

          <p>
            <h3> No Additional Costs for Subcontractor Bids:</h3>
            We don't impose extra charges for soliciting bids from subcontractors, keeping your
            project costs straightforward.
          </p>

          <p>
            <h3> Customer Benefits:</h3>
            Every GEN Interiors customer gains access to exclusive discounts on various activities
            and items, enhancing the overall value of our services.
          </p>

          <p>
            <h3> Ongoing Customer Support: </h3>
            Our commitment to you extends beyond project completion. Customers can reach out for
            assistance or arrange site visits without incurring additional charges.
          </p>

          <p>
            <h3> Robust Hardware Resources: </h3>
            GEN Interiors is equipped with substantial server resources, ensuring the production of
            high-quality visualizations.
          </p>

          <p>
            <h3> Realizable Designs: </h3>
            We focus on creating designs that are not only aesthetically pleasing but also feasible
            for implementation. These factors collectively exemplify GEN Interiors 's commitment to
            delivering exceptional interior design solutions.
          </p>

          <h3>OUR PACKAGES:</h3>
          <div className="package">
            <h3>MINIMALIST</h3>
            <h4>£12 per sq.m.</h4>

            <p>• Meeting with client</p>
            <p>• Precise measure of property</p>
            <p>• Colour moon board</p>
            <p>• One correction</p>
            <p>• List of materials used</p>
            <p>• List of quantities and square footage of final project</p>
            <p>• 1 piece of flash drive with entire project</p>
          </div>
          <div className="package">
            <h3>LIGHT</h3>
            <h4>£19 per sq.m.</h4>

            <p>• Meeting with client</p>
            <p>• Precise measure of property</p>
            <p>• 3D Visualisation</p>
            <p>• Up to 2nr 360° panoramic visualisation</p>
            <p>• Up to 2nr corrections</p>
            <p>• Offers from subcontractors</p>
            <p>• Use of discounts from subcontractors</p>
            <p>• List of materials used</p>
            <p>• List of quantities and square footage of final project</p>
            <p>• 1 piece of flash drive with entire project</p>
            <p>• Plan drawing</p>
          </div>
          <div className="package">
            <h3>PRO</h3>
            <h4>£32 per sq.m.</h4>

            <p>• Meeting with client</p>
            <p>• Precise measure of property</p>
            <p>• 3D Visualisation</p>
            <p>• Up to 3nr 360° panoramic visualisation</p>
            <p>• Up to 3nr corrections</p>
            <p>• Offers from subcontractors</p>
            <p>• Use of discounts from subcontractors</p>
            <p>• List of materials used </p>
            <p>• List of quantities and square footage of final project</p>
            <p>• 1 piece of flash drive with entire project</p>
            <p>• Plan drawings</p>
            <p>• Construction drawings (Water, electric, ceilings and walls)</p>
            <p>• Detailed plans for custom furniture</p>
          </div>
          <div className="package">
            <h3>DELUX</h3>
            <h4>£44 per sq.m.</h4>

            <p>• Meeting with client</p>
            <p>• Precise measure of property</p>
            <p>• 3D Visualisation</p>
            <p>• Up to 3nr 360° panoramic visualisation</p>
            <p>• Up to 3nr corrections</p>
            <p>• Offers from subcontractors</p>
            <p>• Use of discounts from subcontractors</p>
            <p>• List of materials used</p>
            <p>• List of quantities and square footage of final project</p>
            <p>• 1 piece of flash drive with entire project</p>
            <p>• Plan drawings</p>
            <p>• Construction drawings (Water, electric, ceilings and walls)</p>
            <p>• Detailed plans for custom furniture</p>
            <p>• Section drawings of details</p>
            <p>• Project supervision</p>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="accordion">
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          index={index}
          activeIndex={activeIndex}
          toggleAccordion={toggleAccordion}
        />
      ))}
    </div>
  );
}

export default MyAccordion;
