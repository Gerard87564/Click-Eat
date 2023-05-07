jQuery("document").ready(function($){
    
    var menuButton = $("#icon-lupa"); 
        menu = $("div.nav div");  

    menuButton.click(function() {

        if(menu.hasClass("show")) {
            menu.removeClass("show");
        } else {
            menu.addClass("show");
        }
    });
});
