$(document).ready(function() {
	$("#login_button").on("click", function(event) {
		event.preventDefault();
		$("#login_button").fadeOut(300);
		var action = { 
			action: "login", 
			username: $("#username").val(), 
			password: $("#password").val() };
		$.post(
			"action.php", 	// url
			action,			// action
			function(data) {// success callback
				if (data == 'ok') {
					$('.login_section').fadeOut(300);
					$('#status').html("Logged In!");
				} else {
					$('#status').html("Error: " + data);
					$('#login_button').fadeIn(150);
				}
			}, 
			'text' // callback 
		);		
	});
});
