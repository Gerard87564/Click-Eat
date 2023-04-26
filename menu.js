jQuery("document").ready(function($){

    var menuButton = $(".menu-icon");
        menu =  $(".nav div");
    
    menuButton.click(function() {

        if(menu.hasClass("htopnav")) {
            menu.removeClass("htopnav");
        } else {
            menu.addClass("htopnav");
        }
    });
});