import React from "react";
import Accordion from './components/Accordion';
import "./style.css";

function App() {
  return (
    <div>
      <section className="hero">
        <div className="background-image">
          <div className="cta-box">
            <h1>Poverty is not God’s plan. You are.</h1>
            <p>
              Your gift will transform lives and play a part in ending extreme
              poverty and injustice around the world.
            </p>
            <button className="cta-button">Donate now</button>
          </div>
        </div>
      </section>
      <Accordion/>
      
    </div>
  );
}

export default App;
