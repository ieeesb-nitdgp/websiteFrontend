import React, { Component } from "react";
import PostDataService from "../../services/post.service"
import Fade from 'react-reveal/Fade'
import "./events.css"
import { Link, Redirect, Switch, Route } from "react-router-dom";
import posts from "../../data/events";

class Events extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="text-center jumbotron banner border-0 rounded-0">
          <h1 className="display-3 text-light"> Events </h1>
        </div>

        <div className="row ml-0 mr-0">
          {/* {this.state.retrieved ? (
            ""
          ) : (
            <div className="text-center display-3 p-3">Loading...</div>
          )} */}
          {posts &&
            posts.map((post, index) => (
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div className="card">
                  <div className="image-wrapper">
                    <img
                      className="card-img-top event-img"
                      src={require(`../../Assets/${post.image}`).default}
                      alt=""
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">
                      {" "}
                      {post.content.substring(0, 200)}...{" "}
                    </p>
                  </div>
                  <Link to={`/events/${post.id}`} className="btn btn-primary">
                    details
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Events;
