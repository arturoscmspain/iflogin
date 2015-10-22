$(document).on("ready", function (){

	function isValidFormLogin(){
		var username = true;
		var password = true;
		if ($("#btn_enter").prop("disabled") === false) {
			if ($("#username").val() == "" || $("#username").val() =="Nombre usuario"){
				$("#usernameError").show();
				username = false;
			}
			
			if ($("#password").val() == "" || $("#password").val() == "password") { 
				$("#passwordError").show();
				password = false;
			}
			return (username && password);
		}
		else {
			if ($("#usernameRemember").val() == "" || $("#usernameRemember").val() =="Nombre usuario"){
				$("#usernameRememberError").show();
				username = false;
			}				
			return username;
		}

		
	}


	function Login(){
		return true;
	}

	function SendEmailRemember(){
		return true;
	}

	$(".button_primary").click(function(){
		$(".error").hide();
		if (isValidFormLogin()) {
			if ($("#btn_enter").prop("disabled") === false) {
				Login();
			}
			else {
				SendEmailRemember();
			}			
		}
		else {
			return false;
		}
	});

	$("input").keyup(function(){
		if ($(this).val() != "") {
			$(".error").fadeOut();
			return false;
		}
	})

});



