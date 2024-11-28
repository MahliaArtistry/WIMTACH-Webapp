import React from "react";


const Home = ({ highContrast }) => {
    const disasters = [
       { name: "Fire", description: "Protect yourself from fires.", link: "/Fires" },
       { name: "Food", description: "Learn about food preparedness.", link: "/Food" },
      { name: "Droughts", description: "Discover tips for managing droughts.", link: "/droughts" },
      { name: "Earthquakes", description: "Stay safe during seismic activity.", link: "/earthquakes" },
      { name: "Hurricanes", description: "Prepare for severe tropical storms.", link: "/hurricanes" },
      { name: "Tornadoes", description: "Safety measures for tornadoes.", link: "/tornadoes" },
    ];
  
   
  
    return (
      <div className={`hero ${highContrast ? "high-contrast" : ""}`}>
        <div className="hero-content">
          <h2>Your guide to natural disaster preparedness</h2>
          <p>
            Explore resources and tools to stay informed and prepared for any natural disaster.
            Adjust accessibility settings or dive into the dashboard below.
          </p>
        </div>
  
        <div className="carousel">
          {disasters.map((disaster, index) => (
            <div key={index} className="carousel-item" aria-label={`Card for ${disaster.name}`}>
              <h3>{disaster.name}</h3>
              <p>{disaster.description}</p>
              <a href={disaster.link} className="carousel-link">
                Learn More
              </a>
            </div>
          ))}
        </div>
  
        <div className="resources">

        </div>
      </div>
    );
  };
  
  export default Home;