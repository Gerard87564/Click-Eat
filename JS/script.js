document.addEventListener('DOMContentLoaded', function () {
    const menu= document.getElementById('hamburger-menu');
    const htopnav = document.getElementById('htopnav');
    const icon= document.getElementById('bar');

    menu.addEventListener("click", function () {
        icon.classList.toggle('animate');
        htopnav.classList.toggle('visible');
    }); 

    icon.addEventListener("click", function () {
        icon.classList.toggle('visible');
    });
});

function trbNosaltres () {
    window.location.href = 'treballaAmbNosaltres.html';
}

function inici() {
    window.location.href = 'index.html';
}

function carta() {
    window.location.href = 'carta.html';
}

function contacte() {
    window.location.href = 'contacte.html';
}

function reserva() {
    window.location.href = 'reserva.html';
}