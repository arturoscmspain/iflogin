$(function(){

// *********************************************  //
// SCROLL ANIMATION//
// *********************************************  //
var ScrollAnimation = function () {
	var self = this;
	this.init = function() {
		self.check_if_in_view();
	};
	this.myWindow = $(window);
	this.myAnimation_elements = $('.testimony_item');

	this.check_if_in_view = function() {
	  	var window_height = this.myWindow.height();
	  	var window_top_position = this.myWindow.scrollTop();
	  	var window_bottom_position = (window_top_position + window_height);

	  	$.each(this.myAnimation_elements, function() {
		    var $element = $(this);
		    var element_height = $element.outerHeight();
		    var element_top_position = $element.offset().top;
		    var element_bottom_position = (element_top_position + element_height);

		    if ((element_bottom_position >= window_top_position) &&
		        (element_top_position <= window_bottom_position)) {
		      $element.addClass('in-view');
		    } 
	  	});
	}
}

var myScrollAnimation = new ScrollAnimation();

$(window).on("scroll resize", function (){
 		myScrollAnimation.init();
});
$(window).trigger('scroll');
});

// *********************************************  //
// modal links//
// *********************************************  //

$("[data-link]").on("click", function(e){
	e.preventDefault();
	var modalTarget = $(this).attr("data-link");
	var modal = $("#" + modalTarget);
	EmptyFields();
	modal.toggleClass("be-visible");
});

$("[data-close]").on("click", function(e){
	e.preventDefault();
	var modalCloseTarget = $(this).attr("data-close");
	var modalClose = $("#" + modalCloseTarget);
	modalClose.toggleClass("be-visible");
	EmptyFields();
});

$(".modal").on("click", function (e) {
    if (e.target === this) {
        $(this).toggleClass("be-visible");
    }
});