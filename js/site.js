	$(document).ready(function() {
		$('#gh-form').on('submit', function(e) {
			e.preventDefault();
			var userName = $('#name').val();
			greetUser(userName);

		});

		function greetUser(usname){
			var greeting='<ul><li>Hi, '+usname+'!</li><li>Thank you for signing up!</li></ul>';
			$('#greetings').append(greeting);
		}
	});
