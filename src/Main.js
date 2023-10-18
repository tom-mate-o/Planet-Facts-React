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
          <li><Link to="/Planet-Facts-React/mercury">MERCURY</Link></li>
          <li><Link to="/Planet-Facts-React/venus">VENUS</Link></li>
            <li><Link to="/Planet-Facts-React/earth">EARTH</Link></li>
            <li><Link to="/Planet-Facts-React/mars">MARS</Link></li>
            <li><Link to="/Planet-Facts-React/jupiter">JUPITER</Link></li>
            <li><Link to="/Planet-Facts-React/saturn">SATURN</Link></li>
            <li><Link to="/Planet-Facts-React/uranus">URANUS</Link></li>
            <li><Link to="/Planet-Facts-React/neptune">NEPTUNE</Link></li>
            </Navbar>
          </Header>
          
         

          <Contentbox>
            <Routes>
              <Route path="/Planet-Facts-React/" element={<Earth data={data} />} />
              <Route path="/Planet-Facts-React/earth" element={<Earth data={data} />} />
              <Route path="/Planet-Facts-React/jupiter" element={<Jupiter data={data} />} />
                <Route path="/Planet-Facts-React/mars" element={<Mars data={data} />} />
                <Route path="/Planet-Facts-React/mercury" element={<Mercury data={data} />} />
                <Route path="/Planet-Facts-React/neptune" element={<Neptune data={data} />} />
                <Route path="/Planet-Facts-React/saturn" element={<Saturn data={data} />} />
                <Route path="/Planet-Facts-React/uranus" element={<Uranus data={data} />} />
                <Route path="/Planet-Facts-React/venus" element={<Venus data={data} />} />
            </Routes>
          </Contentbox>
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;
