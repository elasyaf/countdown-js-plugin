/*global $, jQuery, Snap, mina*/
$(document).ready(function () {
	"use strict";
    // Countdown
	$('#timer').countdown('2016/06/1', function (event) { //set date YYYY/MM/DD or YYYY/MM/DD HH:MM:SS
		var format = "<div class='col-xs-6 col-sm-3'><span>%D</span> days</div>" + "<div class='col-xs-6 col-sm-3'><span>%H</span> hours</div>" + "<div class='col-xs-6 col-sm-3'><span>%M</span> minutes</div>" + "<div class='col-xs-6 col-sm-3'><span>%S</span> seconds</div>";
		$(this).html(event.strftime(format));
	});
});





















