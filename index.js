$(document).ready(function() {
    $("#toggle-sidebar").on("click", function() {
        $("#sidebar").toggleClass("active");
        $("#card-list").style.width = "100%";
    });
});


function toggleInfoPane() {
    $("#card-list").addClass("col-lg-6");
    $("#card-list").removeClass("col-lg-12");
    $("#card-info").addClass("col-lg-6");

}

function closeInfoPane() {
    $("#card-list").removeClass("col-lg-6");
    $("#card-list").addClass("col-lg-12");
    $("#card-info").removeClass("col-lg-6");
}
