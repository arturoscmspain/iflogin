$(document).ready(function(){
	$("#rememberPassword").click(function(e){
 		$("#panelRemember").slideToggle(1000, function(display) {
    // Animation complete.
			if ($(this).is(":visible")) {
		  
			  $("#username").prop("disabled", true);
			  $("#username").prop("required", false);
			  $("#username").val("");

			  $("#password").prop("disabled", true);
			  $("#password").prop("required", false);
			  $("#password").val("");

			  $("#btn_enter").prop("disabled", true);
			  $("#btn_enter").addClass("desactive");
			  
			  $("#login .imf-searcher_filter label.lb-hide").addClass("desactive");
			  $("#lbl_remember").addClass("lbl_remember--desactive");
			  $("#legal").prop("disabled", true);
			  $("#usernameRemember").prop("required", true);

			} 
			else {
			  
			  $("#username").prop("disabled", false);
			  $("#username").prop("required", true);
			  
			  $("#password").prop("disabled", false);
			  $("#password").prop("required", true);
			  
			  $("#btn_enter").prop("disabled", false);
			  $("#btn_enter").removeClass("desactive");
			  
			  $("#login .imf-searcher_filter label.lb-hide").removeClass("desactive");
			  $("#lbl_remember").removeClass("lbl_remember--desactive");
			  $("#legal").prop("disabled", false);
			  $("#usernameRemember").prop("required", false);
			}
  		});
	});
});