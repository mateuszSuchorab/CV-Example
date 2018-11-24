import React, { Component } from 'react';
import { Sticky } from "semantic-ui-react";

import DynamicHeader from "./headers/DynamicHeader";
import Bio from "./blocks/Bio";
import About from "./blocks/About";
import './App.scss';


class App extends Component {
  state = {};

  handleContextRef = contextRef => {
    this.setState({ contextRef });
  }

  render() {
    const { contextRef } = this.state;
    const myDetails = {
      experience: [
        {
          title: "Future Processing sp z o.o.",
          description: "Inżynier Oprogramowania",
          from: "06.2012",
          to: "Present"
        },
        {
          title: "De Ygrek s.c.",
          description: "Kierownik działu IT",
          from: "09.2006",
          to: "05.2012"
        }
      ],
      education: [
        {
          title: "Future Processing sp z o.o.",
          description: "Inżynier Oprogramowania",
          from: "06.2012",
          to: "Present"
        },
        {
          title: "De Ygrek s.c.",
          description: "Kierownik działu IT",
          from: "09.2006",
          to: "05.2012"
        }
      ]
    }

    return (
      <div className="app-container">
        <DynamicHeader />
        <div className="cv-container">
          <aside>
            <div>               
              <Sticky context={contextRef} pushing offset={150}>
              <About/>
              </Sticky>
            </div>
          </aside>
          <section ref={this.handleContextRef}>
              
              <Bio experience={myDetails.experience} education={myDetails.education} >
              {            
              //dsadassda
              }
              </Bio>
              
            
          </section>
        </div>
      </div>
    );
  }
}

export default App;
