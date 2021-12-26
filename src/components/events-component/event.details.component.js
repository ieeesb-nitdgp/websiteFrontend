import React, { Component } from "react";
import "./events.css";
import { useParams, useLocation } from "react-router-dom";

function EventDetails() {
  const { event } = useParams();
  const location = useLocation();

  return (
    <div className="text-center main-container">
      <div className="jumbotron banner border-0 rounded-0">
        <h1 className="display-3 text-light"> Events </h1>
      </div>
      <div className="row row-details">
        {/* {this.state.retrieved ? (
            ""
          ) : (
            <div className="display-3 p-3">Loading...</div>
          )} */}
        <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 card card-details">
          <div className="image-wrapper image-wrapper-details">
            <img
              className="card-img-top event-img-details"
              src={require(`../../Assets/${location.state.image}`).default}
              alt=""
            />
          </div>
          <div className="card-body">
            <h1 className="text-center heading lead">{location.state.title}</h1>
            <p className="card-text"> {location.state.content} </p>
          </div>
          <div className="row grid-img-wrapper">
            <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 grid-img">
              <img
                src={require(`../../Assets/${location.state.image_1}`).default}
                alt=""
              />
            </div>
            <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 grid-img">
              <img src={require(`../../Assets/${location.state.image_2}`).default} alt="" />
            </div>
            <div className="col-xs-6 col-sm-4 col-md-4 col-lg-4 grid-img">
              <img src={require(`../../Assets/${location.state.image_3}`).default} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
