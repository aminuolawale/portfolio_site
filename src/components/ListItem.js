import React from "react";
import chevronRight from "../img/chevron-right.png";

const ListItem = (props) => {
  return (
    <div className="listItem">
      <img className="listItem__icon" src={chevronRight}></img>
      {props.children}
    </div>
  );
};

export default ListItem;
