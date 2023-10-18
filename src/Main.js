import React, { Component } from "react";
import {Routes,Route,Link,BrowserRouter} from "react-router-dom";
import Home from "./Home";
import Earth from "./Planets/Earth";
import Jupiter from "./Planets/Jupiter";
import Mars from "./Planets/Mars";
import Mercury from "./Planets/Mercury";
import Neptune from "./Planets/Neptune";
import Saturn from "./Planets/Saturn";
import Uranus from "./Planets/Uranus";
import Venus from "./Planets/Venus";


//Styled Components
import { Navbar,} from "./styled/navbar";
import { Header } from "./styled/header";
import { Contentbox } from "./styled/contentbox";

import data from "./data.json";





class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          
        
          <Header>
          <div className="Title">THE PLANETS</div>
          <Navbar>
          <li><Link to="/mercury">MERCURY</Link></li>
          <li><Link to="/venus">VENUS</Link></li>
            <li><Link to="/earth">EARTH</Link></li>
            <li><Link to="/mars">MARS</Link></li>
            <li><Link to="/jupiter">JUPITER</Link></li>
            <li><Link to="/saturn">SATURN</Link></li>
            <li><Link to="/uranus">URANUS</Link></li>
            <li><Link to="/neptune">NEPTUNE</Link></li>
            </Navbar>
          </Header>
          
         

          <Contentbox>
            <Routes>
              <Route path="/" element={<Earth data={data} />} />
              <Route path="/earth" element={<Earth data={data} />} />
              <Route path="/jupiter" element={<Jupiter data={data} />} />
                <Route path="/mars" element={<Mars data={data} />} />
                <Route path="/mercury" element={<Mercury data={data} />} />
                <Route path="/neptune" element={<Neptune data={data} />} />
                <Route path="/saturn" element={<Saturn data={data} />} />
                <Route path="/uranus" element={<Uranus data={data} />} />
                <Route path="/venus" element={<Venus data={data} />} />
            </Routes>
          </Contentbox>
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;
