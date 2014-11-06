$(document).ready(function() {
	var toggled = true
    $("#lightDark").click(function(event) {
        toggled ? tDark() : tLight();
        toggled = !toggled;
    });
});