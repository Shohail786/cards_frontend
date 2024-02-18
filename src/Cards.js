import React from "react";
import Card from "./Card.js";
import Card1Img from "./images/icon-calculator.svg";
import Card2Img from "./images/icon-karma.svg";
import Card3Img from "./images/icon-supervisor.svg";
import Card4Img from "./images/icon-team-builder.svg";
import CardStyles from "./styles/CardStyles.css";

const Cards = () => {
  return (
    <>
      <div>
        <h1>Reliable, efficient delivery</h1>
        <h1> Powered by Technology </h1>
        <h3>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </h3>
      </div>
      <div
        className="cards"
        style={{
          display: "flex",
          flexDirection: "row",
          flex: "wrap",
          gap: "200px",
        }}
      >
        <div className="card1">
          <Card
            imglink={Card1Img}
            name={`Supervisor`}
            des={`Monitors activity to identify project roadblocks`}
          />
        </div>
        <div className="card2">
          <Card
            imglink={Card2Img}
            name={`Team Builder`}
            des={`Scans our talent network to create the optimal team for your project`}
          />
        </div>
        <div className="card3">
          <Card
            imglink={Card3Img}
            name={`Calculator`}
            des={`Uses data from past projects to provide better delivery estimates`}
          />
        </div>
        <div className="card4">
          <Card
            imglink={Card4Img}
            name={`Karma`}
            des={`Regularly evaluates our talent to ensure quality`}
          />
        </div>
      </div>
    </>
  );
};

export default Cards;
