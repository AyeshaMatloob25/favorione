import React, { useState, useEffect } from "react";
import "./styles.css";
import ResultMoviesData from "./ResultMovie";

export default function ResultRowData(props) {
  const _renderPerRow = () => {
    let arr = [];
    console.log(props.Movies);
    for (let i = 0; i < props.Movies.length; i += 4) {
      arr.push(
        <ResultMoviesData
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
