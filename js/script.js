// Dashboard Toggle Moblie Menu
const toggleBtn = $("#menu-dash-toggler");
const Menu = $(".user-dash-panel");
toggleBtn.on("click", function() {
    if (Menu.hasClass("open")) {
        Menu.animate({
                height: "93px",
            },
            500
        );
    } else {
        Menu.animate({
                height: "450px",
            },
            500
        );
    }

    Menu.toggleClass("open");
});