import CarouselRowData from "./CarouselRow";
import ResultRowData from "./ResultRow";
import "./styles.css";
import React, { useState, useEffect } from "react";

function NavBar(props) {
  return (
    <nav className="navbar navbar-light">
      <div className="container-fluid">
        <ul className="nav navbar-nav navbar-center">
          <li className="dropdown">
            <a className="dropdown-toggle" data-toggle="dropdown" href="#">
              Movies<span className="caret"></span>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a onClick={() => props.setMovieCategory("Action")}>Action</a>
              </li>
              <li>
                <a onClick={() => props.setMovieCategory("Drama")}>Drama</a>
              </li>
              <li>
                <a onClick={() => props.setMovieCategory("Animated")}>
                  Animated
                </a>
              </li>
              <li>
                <a onClick={() => props.setMovieCategory("Disney")}>Disney</a>
              </li>
              <li>
                <a onClick={() => props.setMovieCategory("ScienceFiction")}>
                  Science Fiction
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Carousal(props) {
  return (
    <div className="container-xl">
      <div className="row">
        <div className="col-md-12">
          <h2>
            <b> Current Compaigns</b>
          </h2>
          <div
            id="myCarousel"
            className="carousel slide"
            data-ride="carousel"
            data-interval="0"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#myCarousel"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner" id="mvdiv2">
              <CarouselRowData Movies={props.Movies} />
            </div>
            <a
              className="carousel-control-prev"
              href="#myCarousel"
              data-slide="prev"
            >
              <i className="fa fa-angle-left"></i>
            </a>
            <a
              className="carousel-control-next"
              href="#myCarousel"
              data-slide="next"
            >
              <i className="fa fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResultView(props) {
  return (
    <div className="container-xl">
      <ResultRowData Movies={props.Movies} />
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Movies: [],
      Category: "Action",
    };
    this.setMovieCategory = this.setMovieCategory.bind(this);
  }
  componentDidMount() {
    fetch("http://localhost:3000/movies.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        return response.json();
      })
      .then((json) => {
        console.log(json.Movies);
        this.setState({ Movies: json.Movies });
      });
  }

  setMovieCategory(newCategory) {
    console.log(newCategory);
    this.setState({ Category: newCategory });
  }

  render() {
    let Movies = this.state.Movies;
    if (Movies.length && this.state.Category) {
      console.log(this.state.Category);
      Movies = Movies.filter((movie) => movie.Category === this.state.Category);
    }
    return (
      <div>
        <NavBar setMovieCategory={this.setMovieCategory}></NavBar>
        <Carousal Movies={this.state.Movies}></Carousal>
        <ResultView Movies={Movies} />
      </div>
    );
  }
}

export default App;
