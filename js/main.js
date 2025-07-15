// From: https://flannyh.github.io/portfolio/?page=./parts/home.html
// |This code is used to setup the system that allows
// |me to change the page displayed in the content of
// |the index.html page.
$(document).ready(function () {
	// Get the page from the link `?page=pageName`
	const url_params = new URLSearchParams(window.location.search);
	pageSource = url_params.get("page");
	projectSource = url_params.get("game");
	
	// Check if a project page needs to be loaded
	if(projectSource == null) {
		// Get about me page by default
		if (pageSource == null) {
			pageSource = "home";
		}

		// Set content for the selected page
		$("#contentField").load("./pages/" + pageSource + ".html");
		$("#localStyle").attr("href", "./css/" + pageSource + ".css");
		$("#localFunctionality").attr("src", "./js/" + pageSource + ".js");
		$("#" + pageSource).addClass("Active");
	} else {
		// Set content for the project
		$("#contentField").load("./pages/projects/" + projectSource + ".html");
		$("#localStyle").attr("href", "./css/project.css");
		$("#localFunctionality").attr("src", "./js/project.js");
		$("#" + pageSource).addClass("Active");
	}
});