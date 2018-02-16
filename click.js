$(document).ready(function () {
    $(".card").click(turnAround);
});

function turnAround() {
    console.log("Card clicked");
    var elements = $(this).find(".thumbnail");
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].className == "thumbnail") {
            elements[i].className += " rotated";
        } else {
            elements[i].className = "thumbnail";
        }
    }
}

