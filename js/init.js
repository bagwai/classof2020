//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "06 july 2021 17:00:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	