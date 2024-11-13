document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const menuId = document.getElementById('menuId').value;
    const dni = document.getElementById('dni').value;
    const nom = document.getElementById('nom').value;
    const cognom = document.getElementById('cognom').value;
    const tlf = document.getElementById('tlf').value;
    const correu = document.getElementById('correu').value;
    
    fetch('https://api.clickeat.cat/comandes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            MenuID: menuId,
            DNI: dni,
            Nom: nom,
            Cognom: cognom,
            Tlf: tlf,
            Correu: correu
        })
    })

    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        return response.json();
    })
    .then(data => {
        console.log('Comanda creada:', data);
    })
    .catch(error => {
        console.error('Ups ha succeit un problema amb la comanda:', error);
    });

    console.log('menuId:', menuId);
    console.log('dni:', dni);
    console.log('nom:', nom);
    console.log('cognom:', cognom);
    console.log('tlf:', tlf);
    console.log('correu:', correu);
});