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
        menu2 = $(".nav div form");  

    menuButton2.click(function() {

        if(menu2.hasClass("searchbox-form_SearchBox1")) {
            menu2.removeClass("searchbox-form_SearchBox1");
        } else {
            menu2.addClass("searchbox-form_SearchBox1");
        }
    });
});