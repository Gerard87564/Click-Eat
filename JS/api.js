document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const menuId = document.getElementById('menuId').value;
    const dni = document.getElementById('dni').value;
    const nom = document.getElementById('nom').value;
    const cognom = document.getElementById('cognom').value;
    const tlf = document.getElementById('tlf').value;
    const correu = document.getElementById('correu').value;

    localStorage.setItem('formData', JSON.stringify({
        MenuID: menuId,
        DNI: dni,
        Nom: nom,
        Cognom: cognom,
        Tlf: tlf,
        Correu: correu
    }));

    window.location.href = 'comanda.html';
});
