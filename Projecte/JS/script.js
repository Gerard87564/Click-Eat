document.addEventListener('DOMContentLoaded', function () {
    const icon= document.getElementById('hide');
    const htopnav = document.getElementById('htopnav');

    icon.addEventListener("click", function () {
        htopnav.classList.toggle('visible');
    }); 
});