document.addEventListener("DOMContentLoaded", function(){
  event.preventDefault();

  const url = "https://meowfacts.herokuapp.com/";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
      console.log(json)

      results += "<p>" + json.data[0]+ "</p>";



      document.getElementById("fact").innerHTML = results;
    });
  });



document.getElementById("randomFactButton").addEventListener("click", function(event) {
  event.preventDefault();

  const url = "https://meowfacts.herokuapp.com/";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
      console.log(json)

      results += "<p>" + json.data[0]+ "</p>";




      document.getElementById("fact").innerHTML = results;
    });
});
