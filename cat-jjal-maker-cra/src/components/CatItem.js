import React from "react";

function CatItem(props) {
  return (
    <li>
      <img src={props.img} style={{ width: "150px" }} alt="cat img" />
    </li>
  );
}

export default CatItem;
