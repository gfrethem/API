var searchCategory = "films/"
var numberOfButtons = 0;

$(document).ready(function() {
	getAllFilms();

	$("header").on("click", ".Ep1", function(){
		searchStarWars("4");
	});
	$("header").on("click", ".Ep2", function(){
		searchStarWars("5");
	});
	$("header").on("click", ".Ep3", function(){
		searchStarWars("6");
	});
	$("header").on("click", ".Ep4", function(){
		searchStarWars("1");
	});
	$("header").on("click", ".Ep5", function(){
		searchStarWars("2");
	});
	$("header").on("click", ".Ep6", function(){
		searchStarWars("3");
	});
	$("header").on("click", ".Ep7", function(){
		searchStarWars("7");
	});
	$("header").on("click", ".Ep8", function(){
		searchStarWars("7");
	});
	$("header").on("click", ".Ep9", function(){
		searchStarWars("7");
	});
});

function getAllFilms() {
$.ajax({
		type: 'GET',
		url: 'http://swapi.co/api/' + searchCategory
	}).done(function(data){
		numberOfButtons = data.count;
		for (i = 1; i <=numberOfButtons; i++) {
			$("header").append("<button class=\"Ep" + i + "\">Episode " + i + "</button>");
		};
	});
};

function searchStarWars(swquery){

	$.ajax({
		type: 'GET',
		url: 'http://swapi.co/api/' + searchCategory + swquery
	}).done(function(data){
		$("pre, h2").remove();
		if (data.opening_crawl == "unknown") {
			$("main").append("<h2>Release date " + data.release_date + "</h2>");
		} else {
			$("main").append("<pre>" + data.opening_crawl + "</pre>");
		};
	});
};