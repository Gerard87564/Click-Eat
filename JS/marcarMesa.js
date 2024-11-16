document.addEventListener("DOMContentLoaded", function () {
    const mesas = document.querySelectorAll('.background');

    mesas.forEach(function (mesa) {
        mesa.addEventListener('click', function () {
            if (mesa.classList.contains('mesa-ocupada')) {
                alert("Esta mesa ya está ocupada.");
            } else {
                fetch('http://api.clickeat.cat/marcar-mesa-ocupada', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ mesaid: mesa.id })  
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        mesa.classList.add('mesa-ocupada');
                        mesa.innerHTML = "<p>Ocupada</p>";

                        window.location.href = `carta.html?mesa=${mesa.id}`;  
                    } else {
                        alert("Hubo un problema al marcar la mesa.");
                    }
                })
                .catch(error => {
                    console.error("Error al marcar la mesa como ocupada:", error);
                    alert("Hubo un error al procesar la solicitud.");
                });
            }
        });
    });
});