import React from "react";
import { Planetinfobox } from "./styled/planetinfobox";
import { Planetimage } from "./styled/planetimage";
import { Planetstats } from "./styled/planetstats";
import { Planetname } from "./styled/planetname";
import { Statbox } from "./styled/statbox";
import { Planettext } from "./styled/planettext";
import { Styledbutton } from "./styled/styledbutton";
import { Planetmenu } from "./styled/planetmenu";



function PlanetDetails({data, activeId, handleButtonClick}) {

    let planetName = data.name.toUpperCase();
    let planetSource = data.overview.source;

    let rotation = data.rotation.toUpperCase();
    let revolution = data.revolution.toUpperCase();
    let radius = data.radius.toUpperCase();
    let temperature = data.temperature.toUpperCase();

    let colorPalette = data.colorpalette.color;
    

    const tabContent = {
      Overview: data.overview.content,
      InternalStructure: data.structure.content,
      SurfaceGeology: data.geology.content,
    };

    const tabImage = {
      Overview: (
        <>
          <img src={data.images.planet} alt={`Image of ${planetName}`} />
        </>
      ),
      InternalStructure: (
        <>
          <img src={data.images.internal} alt={`Image of ${planetName}`} />
        </>
      ),
      SurfaceGeology: (
        <>
        <div className="GeologyCollage">
      <img className="Pin" src={data.images.geology} alt="Geology" />
      <img className="Planet" src={data.images.planet} alt={`Image of ${planetName}`} />
      </div>
        </>
      ),
       
    };


  return (
    <div>
      <Planetinfobox>
        <Planetimage className="PlanetImage">
        {tabImage[activeId]}
        </Planetimage>

        <Planetname className="PlanetName">
          <span>{planetName}</span>
        </Planetname>

        <Planettext className="PlanetInfo">
          {/* Lädt den Text je nach aktiver ID */}
          <span>{tabContent[activeId]}</span>
          <div className="Wiki">
            <div className="SourceLink">
              Source:{" "}
              <b>
                <a href={planetSource} target="blank">
                  Wikipedia
                </a>
              </b>
            </div>
            <img
              src="./assets/icon-source.svg"
              alt="extranal_link_arrow_image"
            ></img>
          </div>
        </Planettext>

        <Planetmenu className="PlanetMenu">
          <Styledbutton id="Overview" className={activeId === "Overview" ? "active" : "unactive"} bgColor={colorPalette} onClick={()=>handleButtonClick("Overview")}>
            <p>01</p>
            <span>OVERVIEW</span>
          </Styledbutton>

          <Styledbutton id="InternalStructure" className={activeId === "InternalStructure" ? "active" : "unactive"} bgColor={colorPalette} onClick={()=>handleButtonClick("InternalStructure")}>
            <p>02</p>
            <span>INTERNAL STRUCTURE</span>
          </Styledbutton>

          <Styledbutton id="SurfaceGeology" className={activeId === "SurfaceGeology" ? "active" : "unactive"} bgColor={colorPalette} onClick={()=>handleButtonClick("SurfaceGeology")}>
            <p>03</p>
            <span>SURFACE GEOLOGY</span>
          </Styledbutton>

        </Planetmenu>

        <Planetstats className="Stats">
          <Statbox className="Statbox">
            <h3>ROTATION TIME</h3>
            <h1>{rotation}</h1>
          </Statbox>

          <Statbox className="Statbox">
            <h3>REVOLUTION TIME</h3>
            <h1>{revolution}</h1>
          </Statbox>

          <Statbox className="Statbox">
            <h3>RADIUS</h3>
            <h1>{radius}</h1>
          </Statbox>

          <Statbox className="Statbox">
            <h3>AVERAGE TEMP.</h3>
            <h1>{temperature}</h1>
          </Statbox>
        </Planetstats>
      </Planetinfobox>
    </div>
  );
}

export default PlanetDetails;
