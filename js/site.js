$(document).ready(function() {
	$('#gh-form').on('submit', function(event) {
		 var userName = $('#first-name').val();
		  event.preventDefault();
		 greetUser(userName);
		});

	function greetUser(nameholder){
		var user=nameholder;
		var greeting='<ul><li>Hi, '+user+'!</li><li>Thank you for signing up!</li></ul>';
		$('#greetings').append(greeting);
	}
});