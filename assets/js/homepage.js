var getUserRepos = function (user) {
  // format the github api url
  var apiUrl = "https://api.github.com/users/" + user + "/repos";

  // make a get request to url
  fetch(apiUrl)
  .then(function (response) {
    response.json().then(function(data){
      displayRepos(data,user);
    })

    });

  };



var userFormEl = document.querySelector("#user-form");
var NameInputEl = document.querySelector("#username");

var formSubmitHandler = function(event) {
  event.preverntDefault();
  
  //get value from input element
  var username = nameInputEl.Value.trim();

  if (username) {
    getUserRepos(username);
    nameInputEl.value = "";
  } else{
    alert("Please enter a GitHub username");
  }
};

userFormEl.addEventListener("submit", formSubmitHandler);

var  displayRepos = function (repos, searchTerm) {
  console.log (repos);
  console.log (searchTerm);
};

