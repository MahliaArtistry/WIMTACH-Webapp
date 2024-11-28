import React from "react";

const Fires = () => {
  return (
    <div className="fires-container">
      <header className="fires-header">
        <h1>Fire Preparedness</h1>
        <p>Your guide to staying safe and prepared in the event of a fire.</p>
      </header>

      <main>
        <section className="section preparedness">
          <h2>Preventive Measures</h2>
          <ul>
            <li>Install smoke alarms and carbon monoxide detectors throughout your home and outside all bedrooms.</li>
            <li>Regularly check the batteries and replace them twice each year.</li>
            <li>Prepare and practice your escape plan, identifying all exits and a meeting place outside your home.</li>
          </ul>
        </section>

        <section className="section event">
          <h2>In the Event of Fire</h2>
          <ul>
            <li>Sound the fire alarm and alert others.</li>
            <li>Leave the building via the nearest exit, closing all doors behind you.</li>
            <li>DO NOT USE THE ELEVATOR.</li>
            <li>Call 9-1-1 and do not assume someone else has done it.</li>
            <li>If unable to leave, stay close to the floor to avoid inhaling smoke.</li>
          </ul>
        </section>

        <section className="section apartments">
          <h2>Apartment Buildings: To Stay or Go?</h2>
          <p>
            Depending on the situation, you may need to evacuate or stay in your unit. The decision must be made quickly to minimize exposure to smoke.
          </p>
          <h3>If You Decide to Go</h3>
          <ul>
            <li>Check the door for smoke or heat before opening.</li>
            <li>Take your keys, close the door behind you, and use the nearest exit stairway.</li>
            <li>DO NOT USE THE ELEVATOR.</li>
          </ul>
          <h3>If You Remain in Your Unit</h3>
          <ul>
            <li>Seal cracks around the door with duct tape and wet towels.</li>
            <li>Call 9-1-1 and inform them of your location.</li>
            <li>Stay near a window or balcony and signal for help if necessary.</li>
          </ul>
        </section>

        <section className="section disabilities">
          <h2>Considerations for People with Disabilities and Special Needs</h2>
          <ul>
            <li>Arrange for someone to check on you during emergencies.</li>
            <li>Wear a Medical ID bracelet or carry an identification card.</li>
            <li>Keep essential items, such as medications and medical supplies, in an emergency kit.</li>
            <li>Develop a back-up plan for life-sustaining equipment during power outages.</li>
          </ul>
        </section>
      </main>

      <footer className="fires-footer">
        <p>Stay safe and prepared. For more information, visit your local fire safety resources.</p>
      </footer>
    </div>
  );
};

export default Fires;
