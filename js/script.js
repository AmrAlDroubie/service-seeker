// Dashboard Toggle Moblie Menu
const toggleBtn = $("#menu-dash-toggler");
const Menu = $(".user-dash-panel");
toggleBtn.on("click", function() {
    if (Menu.hasClass("open")) {
        Menu.animate({
                height: "93px",
            },
            300
        );
    } else {
        Menu.animate({
                height: "450px",
            },
            300
        );
    }

    Menu.toggleClass("open");
});

const date = new Date();

$("#dash-expired-input").attr({
    min: date.getFullYear(),
    placeholder: date.getFullYear(),
});

// dash settings btn
$("#image-profile-btn").click(function(e) {
    e.preventDefault();
    $("#image-profile-value").click();
});