import React, { useState } from "react";


const Checklist = () => {
  const [items, setItems] = useState([
    { id: 1, text: "Water (one gallon per person per day for at least three days, for drinking and sanitation)", checked: false },
    { id: 2, text: "Food (at least a three-day supply of non-perishable food)", checked: false },
    { id: 3, text: "Battery-powered or hand crank radio and a NOAA Weather Radio with tone alert", checked: false },
    { id: 4, text: "Flashlight", checked: false },
    { id: 5, text: "First aid kit", checked: false },
    { id: 6, text: "Extra batteries", checked: false },
    { id: 7, text: "Whistle (to signal for help)", checked: false },
    { id: 8, text: "Dust mask (to help filter contaminated air)", checked: false },
    { id: 9, text: "Plastic sheeting and duct tape (to shelter in place)", checked: false },
    { id: 10, text: "Moist towelettes, garbage bags, and plastic ties (for personal sanitation)", checked: false },
    { id: 11, text: "Wrench or pliers (to turn off utilities)", checked: false },
    { id: 12, text: "Manual can opener (for food)", checked: false },
    { id: 13, text: "Local maps", checked: false },
    { id: 14, text: "Cell phone with chargers and a backup battery", checked: false },
  ]);

  const handleCheck = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
  };

  return (
    <div className="checklist">
      <h2>Emergency Kit Checklist</h2>
      <ul>
        {items.map(item => (
          <li key={item.id} className={item.checked ? "checked" : ""}>
            <label>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
              />
              {item.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checklist;