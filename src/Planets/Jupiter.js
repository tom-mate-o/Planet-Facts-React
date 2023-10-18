import React from "react";
import PlanetDetails from "../planetdetails";

function Jupiter(props) {
  const data = props.data[4];
  const [activeId, setActiveId] = React.useState("Overview"); // Legt Overview als Startwert fest

  const handleButtonClick = (id) => {
    setActiveId(id);
  };


  return <PlanetDetails data={data} activeId={activeId} handleButtonClick={handleButtonClick} />;
}

export default Jupiter;
