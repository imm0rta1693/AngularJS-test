function tDark() {

    $("#afterReveal").animate({
        color: "black"
    }, 500);

    $("body").animate({
        backgroundColor: "black"
    }, 500);

    $("h3, h1").not('#afterReveal').animate({
        color: "white"
    }, 500);

    $("button").animate({
        backgroundColor: "gray"
    }, 500);

}