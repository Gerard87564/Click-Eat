function redireccionarMesa(numeroMesa) {
    window.location.href = `mesas.html?mesa=${numeroMesa}`;
}

document.addEventListener('DOMContentLoaded', function () {
    const mesas = [
        document.getElementById("mesa-1"),
        document.getElementById("mesa-2"),
        document.getElementById("mesa-3"),
        document.getElementById("mesa-4"),
        document.getElementById("mesa-5"),
        document.getElementById("mesa-6"),
        document.getElementById("mesa-7"),
        document.getElementById("mesa-8")
    ];

    mesas.forEach(mesa => {
        mesa.addEventListener("click", function () {
            const numeroMesa = this.querySelector("p").textContent;
            redireccionarMesa(numeroMesa);
        });
    });
});