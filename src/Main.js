import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  
  import Pageone from "./Pageone";
  import Shopping from "./Shopping";
  import Qanda from "./Qanda";

class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div>
                <h1>Nathaniel Breeden</h1>
                <ul className="header">
                   
                    <li><NavLink to="/pageone">Welcome</NavLink></li>
                    <li><NavLink to="/shopping">Shopping</NavLink></li>
                    <li><NavLink to="/qanda">Q and A</NavLink></li>
                </ul>
                <div className="content">
                     
                    <Route exact path="/pageone" component={Pageone}/>
                    <Route path="/shopping" component={Shopping}/>
                    <Route path="/qanda" component={Qanda}/>
                </div>
            </div>
        </HashRouter>
    );
  }
}
 
export default Main;