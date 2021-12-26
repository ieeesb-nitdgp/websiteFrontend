import React from "react";
import "./events.css";
import { Link, useHistory } from "react-router-dom";
import posts from "../../data/events";

function Events() {
  const history = useHistory();

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
                <div
                  onClick={()=>history.push(`/events/${post.event}`, post)}
                  className="btn btn-primary mb-3 w-75 mx-auto rounded-pill"
                >
                  details
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Events;
