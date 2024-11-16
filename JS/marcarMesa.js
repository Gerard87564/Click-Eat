document.addEventListener("DOMContentLoaded", function () {
    const mesas = document.querySelectorAll('.background');

    mesas.forEach(function (mesa) {
        mesa.addEventListener('click', function () {
            if (mesa.classList.contains('mesa-ocupada')) {
                alert("Esta mesa ya está ocupada.");
            } else {
                setTimeout(function () {
                    localStorage.removeItem(`mesa_${mesa.id}`);

                    mesa.classList.remove('mesa-ocupada');
                    mesa.innerHTML = "";
                }, 30 * 60 * 1000);

                fetch('https://api.clickeat.cat/marcar-mesa-ocupada', {
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
                        
                        let mesasOcupadas = JSON.parse(localStorage.getItem('mesasOcupadas')) || [];
                        mesasOcupadas.push(mesa.id); 
                        localStorage.setItem('mesasOcupadas', JSON.stringify(mesasOcupadas));
                
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