var getUserRepos = function(user) {
  // format the github api url
  var apiUrl = "https://api.github.com/users/" + user + "/repos";

  // make a get request to url
  fetch(apiUrl).then(function(response) {
    console.log(response);
    response.json().then(function(data) {
      console.log(data);
    });

    
var userFormEl = document.querySelector("#user-form");
var NameInputEl = document.querySelector("#username");
var formSubmitHandler = function (event) {
  event.preverntDefault();
  console.log(event);
};

  });
};

userFormEl.addEventListener("submit", formSubmitHandler);

