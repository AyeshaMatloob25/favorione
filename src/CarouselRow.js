import React, { useState, useEffect } from "react";
import "./styles.css";
import MoviesData from "./Movies";

export default function CarouselRowData(props) {
  const _renderPerRow = () => {
    let arr = [];
    console.log(props.Movies);
    for (let i = 0; i < props.Movies.length; i += 4) {
      arr.push(
        <MoviesData
          movies={props.Movies}
          startIndex={i}
          endIndex={i + 4}
          key={i}
        />
      );
    }
    return arr;
  };

  return <>{_renderPerRow()}</>;
}
