$(document).ready(function(){
    $(".hide").on('click', function() {
        $(".card").hide();
        return false;
    });
 
    $(".show").on('click', function() {
        $(".card").show();
        return false;
    });
});