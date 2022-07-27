import React from "react";
import "./styles.css";

export default function MoviesData(props) {
  console.log(props);
  let MoviesChunk = [];
  if (props.movies && props.movies.length > 0) {
    MoviesChunk = props.movies.slice(props.startIndex, props.endIndex);
    console.log("movieschunk: " + MoviesChunk);
  }

  let classNames = "item carousel-item";
  if (props.startIndex === 0) classNames += " active";

  return (
    <div className={classNames}>
      <div className="row">
        {MoviesChunk.map((item, i) => {
          return (
            <div className="col-sm-3" key={i}>
              <div className="thumb-wrapper">
                <span className="wish-icon">
                  <i className="fa fa-heart-o"></i>
                </span>
                <div className="img-box">
                  <img src={item.Image} className="img-fluid" alt="Headphone" />
                </div>
                <div className="thumb-content">
                  <h4>{item.Name}</h4>
                  <div className="star-rating">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <i className="fa fa-star"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-star"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-star"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-star"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-star-o"></i>
                      </li>
                    </ul>
                  </div>
                  <p className="item-price">
                    <strike>{item.ReducedPrice} kr</strike>{" "}
                    <b>{item.ActualPrice} kr </b>
                  </p>
                  <a href="#" className="btn btn-primary">
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
