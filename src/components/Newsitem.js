// import PropTypes from 'prop-types'
import React, { Component } from "react";

export default class Newsitem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date,source } = this.props;

    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              !imageUrl
                ? "https://images.cnbctv18.com/wp-content/uploads/2022/07/james-webb-8-1-1019x573.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {" "}{title}...
              <span className="position-absolute top-0 translate-middle badge rounded-pill bg-warning opacity-75" style={{left:'50%', zIndex:'1'}}>
                {source}
               
              </span>
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
             <i><strong><small className=" text-warning opacity-75">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small></strong></i>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sn btn-warning  opacity-75"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
