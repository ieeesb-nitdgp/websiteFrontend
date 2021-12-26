import React, { Component } from "react";
import Fade from 'react-reveal/Fade'
import "./events.css"
import { Link, Redirect, Switch, Route } from "react-router-dom";


class EventDetails extends Component {

  render() {
      return (
        <div className="text-center main-container">
        	<div className="jumbotron banner border-0 rounded-0">
        		<h1 className="display-3 text-light"> Events </h1>
        	</div>
			  <div className="row row-details">
				<div className="display-3 p-3">
					Loading...
				</div>
			  </div>
        </div>
      )
  }
}

export default EventDetails;
