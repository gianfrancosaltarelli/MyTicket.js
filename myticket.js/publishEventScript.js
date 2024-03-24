document.addEventListener('DOMContentLoaded', function() {
    const publishEventButton = document.getElementById('publishEventButton');

    publishEventButton.addEventListener('click', function() {
        const eventName = document.getElementById('eventName').value;
        const eventDate = document.getElementById('eventDate').value;
        const ticketPrice = parseFloat(document.getElementById('ticketPrice').value);

        // Aquí puedes enviar los datos del evento al backend para su procesamiento
        // Por ejemplo, puedes usar fetch() para enviar una solicitud POST al backend
        // con los datos del evento
    });
});
