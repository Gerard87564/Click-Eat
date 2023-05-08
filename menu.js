console.log("1")
jQuery("document").ready(function($){

    var menuButton = $(".menu-icon");
        menu =  $(".nav ul");
    
    menuButton.click(function() {

        if(menu.hasClass("htopnav")) {
            menu.removeClass("htopnav");
        } else {
            menu.addClass("htopnav");
        }
    });

    var menuButton2 = $("#icon-lupa"); 
        menu2 = $("div.nav div");  

    menuButton2.click(function() {

        if(menu2.hasClass("show")) {
            menu2.removeClass("show");
        } else {
            menu2.addClass("show");
        }
    });
});