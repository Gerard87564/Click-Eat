document.addEventListener("DOMContentLoaded", function () {
    const mesas = document.querySelectorAll('.background');

    let occupiedTables = JSON.parse(localStorage.getItem('occupiedTables')) || [];
    console.log("Occupied tables on page load:", occupiedTables);

    occupiedTables.forEach(function (table) {
        const tableElement = document.getElementById(table.id);
        if (tableElement) {
            tableElement.classList.add('mesa-ocupada');
            tableElement.innerHTML = "<p>Ocupada</p>";
        }
    });

    mesas.forEach(function (mesa) {
        mesa.addEventListener('click', function () {
            if (mesa.classList.contains('mesa-ocupada')) {
                alert("Esta mesa ya está ocupada.");
            } else {
                fetch('https://apic.clickeat.cat/marcar-mesa-ocupada', {
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

                        let occupiedTables = JSON.parse(localStorage.getItem('occupiedTables')) || [];
                        occupiedTables.push({
                            id: mesa.id,
                            timestamp: Date.now()
                        });
                        localStorage.setItem('occupiedTables', JSON.stringify(occupiedTables));

                        console.log(`Mesa ${mesa.id} marcada como ocupada`);

                        window.location.href = `carta.html?mesa=${mesa.id}`;
                    } else {
                        console.error("API returned an error:", data);
                        alert("Hubo un problema al marcar la mesa.");
                    }
                })
                .catch(error => {
                    console.error("Error al hacer la solicitud:", error);
                    alert("Hubo un error al marcar la mesa.");
                });
            }
        });
    });

    setInterval(function () {
        let occupiedTables = JSON.parse(localStorage.getItem('occupiedTables')) || [];
        const currentTime = Date.now();

        occupiedTables.forEach(function (table) {
            if (currentTime - table.timestamp > 1 * 60 * 1000) { 
                const tableElement = document.getElementById(table.id);
                if (tableElement) {
                    tableElement.classList.remove('mesa-ocupada');
                    tableElement.innerHTML = table.id; 

                    occupiedTables = occupiedTables.filter(t => t.id !== table.id);
                    localStorage.setItem('occupiedTables', JSON.stringify(occupiedTables));

                    console.log(`Mesa ${table.id} desocupada automáticamente después de 1 minuto`);
                }
            }
        });
    }, 5000);  
});