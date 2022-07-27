function readJson() {
  fetch("http://localhost:3000/movies.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }
      return response.json();
    })
    .then((json) => {
      let innhtml = "";
      for (const mv of json.Movies) {
        innhtml += "<div>" + mv.Name + "</div>";
      }
      document.getElementById("mvdiv").innerHTML = innhtml;
    })
    .catch(function () {
      this.dataError = true;
    });
}

readJson();
//const obj = JSON.parse(movies.json);
//
