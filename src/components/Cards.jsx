import React from "react";
import { Image } from "react-bootstrap";

function Cards(props) {
  return (
    <div className="Cards">
      <p
        className="lead text-start"
        dangerouslySetInnerHTML={{ __html: props.text }}
      />
      <Image src={props.image} alt="SKLauncher" fluid />
    </div>
  );
}

export default Cards;
