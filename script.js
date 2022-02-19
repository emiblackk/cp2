document.addEventListener("DOMContentLoaded", function(){
  event.preventDefault();

  const url = "https://api.aakhilv.me/facts/json";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
      console.log(json)

      results += "<p>";
      results += "<img src=" + json.dark + "></p>";



      document.getElementById("fact").innerHTML = results;
    });
  });



document.getElementById("randomFactButton").addEventListener("click", function(event) {
  event.preventDefault();

  const url = "https://api.aakhilv.me/facts/json";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
      console.log(json)

      results += "<p>";
      results += "<img src=" + json.dark + "></p>";



      document.getElementById("fact").innerHTML = results;
    });
});
