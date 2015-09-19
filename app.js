$(document).ready(function() {
	searchStarWars(1);
	searchStarWars(2);
	searchStarWars(3);


});

var searchCategory = "films/"
// var searchTerms = "1"

function searchStarWars(swquery){

	$.ajax({
		type: 'GET',
		url: 'http://swapi.co/api/' + searchCategory + swquery
	}).done(function(data){
		$("main").append("<p> " + data.opening_crawl + "</p>");
	});
}