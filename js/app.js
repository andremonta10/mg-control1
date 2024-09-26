// app.js

document.addEventListener("DOMContentLoaded", function() {
    // Funzione di esempio per la gestione delle scadenze dei veicoli
    function checkVehicleDeadlines() {
        const today = new Date();
        const deadlineDate = new Date("2024-12-01"); // Data di esempio

        if (deadlineDate <= today) {
            alert("Un veicolo ha una scadenza oggi!");
        }
    }

    // Controllo delle scadenze dei veicoli all'avvio della pagina
    checkVehicleDeadlines();
});
