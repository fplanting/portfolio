
    fetch ("https://api.github.com/users/fplanting/repos")
    .then(function (response) {
        return response.json();
    })
    .then(function(json) {
       console.log("github API", json);
   
       let portfolio = document.getElementById("portfolio");

       portfolio.innerHTML= "";
       for (i=0; i<json.length; i++) {
       //    portfolio.insertAdjacentHTML("beforeend", "<a href='"+ json[i].html_url +"' target='_blank'><div class='githubrepo'>" + json[i].name + "</div></a>")

       let githubApi = document.createElement("div");
       githubApi.setAttribute("id", "githubApi");
       githubApi.innerHTML = "<a href='"+ json[i].html_url +"' target='_blank'><div class='githubrepo'>" + json[i].name + "</div></a>";

       portfolio.append(githubApi);
    }
});

