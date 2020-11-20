import React from "react";
import chevronRight from "../img/chevron-right.png";

const ListItem = (props) => {
  return (
    <div className="listItem">
      <img
        className="listItem__icon"
        src={chevronRight}
        alt="chevron-right"
      ></img>
      {props.children}
    </div>
  );
};

export default ListItem;
