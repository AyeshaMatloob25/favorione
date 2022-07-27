import React from "react";
import "./styles.css";

export default function ResultMoviesData(props) {
  console.log(props);
  let MoviesChunk = [];
  if (props.movies && props.movies.length > 0) {
    MoviesChunk = props.movies.slice(props.startIndex, props.endIndex);
    console.log("movieschunk: " + MoviesChunk);
  }

  return (
    <div className="row">
      {MoviesChunk.map((item, i) => {
        return (
          <div className="column">
            <div className="card">
              <div className="img-box">
                <img src={item.Image} width="180px" height="150px" alt="" />
              </div>
              <div className="card-body">
                <h4>{item.Name}</h4>
                <p className="item-price">
                  <b>{item.ActualPrice} kr</b>
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
  );
}
