import React from "react";

const FoodSafety = () => {
  return (
    <div className="foodsafety-container">
      <div className="foodsafety-header">
        <h1>Food Safety</h1>
        <p>
          During a power outage, food kept in the refrigerator or freezer may become unsafe to eat. The following tips can help ensure food is stored safely:
        </p>
      </div>
      <div className="foodsafety-section">
        <ul>
          <li>Keep your refrigerator and freezer doors closed to maintain the temperature inside:</li>
          <ul>
            <li>Without power, the refrigerator will keep food cool for 4 to 6 hours.</li>
            <li>A completely full freezer will keep food frozen for about 48 hours.</li>
            <li>A half-full freezer will keep food frozen for about 24 hours.</li>
          </ul>
          <li>Throw out perishable foods such as meat, fish, poultry, eggs, and leftovers that have been at temperatures above 4°C for more than two hours.</li>
          <li>Foods that have thawed in the freezer may be refrozen if they still contain ice crystals or are at 4°C or below.</li>
          <li>Partial thawing and refreezing may reduce the quality of some food, but food will remain safe to eat.</li>
          <li>If possible, add bags of ice to the refrigerator and freezer to keep temperatures cooler for a longer period.</li>
          <li>Discard any items in the freezer or refrigerator that have come into contact with raw meat juices.</li>
          <li>Evaluate each food item separately and if in doubt, throw it out.</li>
          <li>Contact your doctor or pharmacist for information about proper storage of medication that requires refrigeration, such as insulin.</li>
        </ul>
        <p>
          For more information about when to keep and when to throw out refrigerated foods, visit <a href="http://www.toronto.ca/health">Food Safety at Home on the Toronto Public Health website</a>.
        </p>
        <h2>Important numbers and websites</h2>
        <p>If people or property are at risk call 911:</p>
        <ul>
          <li>DO NOT call 911 if it is not an emergency.</li>
          <li>Call 311 to get assistance finding shelter and other services.</li>
        </ul>
        <p>City of Toronto:</p>
        <ul>
          <li>City of Toronto website: <a href="http://toronto.ca">toronto.ca</a></li>
          <li>Call 311</li>
          <li>During a major emergency, follow the City on Twitter <a href="https://twitter.com/TorontoComms">@TorontoComms</a> or <a href="https://twitter.com/TorontoOEM">@TorontoOEM</a> for up to date information.</li>
        </ul>
        <p>Weather warnings and updates:</p>
        <ul>
          <li>Environment Canada: <a href="http://weatheroffice.gc.ca">weatheroffice.gc.ca</a></li>
          <li>The Weather Network: <a href="http://theweathernetwork.com">theweathernetwork.com</a></li>
        </ul>
        <p>To Report a Power Outage:</p>
        <ul>
          <li>Toronto Hydro Power Disruption Hotline: 416-542-8000</li>
          <li><a href="http://outageTO.com">outageTO.com</a></li>
          <li><a href="https://twitter.com/TorontoHydro">@TorontoHydro</a></li>
        </ul>
        <p>Always call to report possible gas leaks (smell of rotten eggs):</p>
        <ul>
          <li>Enbridge Gas Distribution Emergency Number: 1-866-763-5427</li>
        </ul>
        <p>Non-Emergency Phone Numbers:</p>
        <ul>
          <li>Fire: 416-338-9000</li>
          <li>Police: 416-808-2222</li>
        </ul>
      </div>
    </div>
  );
};

export default FoodSafety;