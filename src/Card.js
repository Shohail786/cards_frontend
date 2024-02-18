import React from "react";

const Card = (props) => {
  return (
    <>
      <div>
        <p className="para">{props.name}</p>
        <p className="des">{props.des}</p>
        <img src={props.imglink} alt={`This is ${props.name}`} />
      </div>
    </>
  );
};

export default Card;
