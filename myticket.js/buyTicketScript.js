document.addEventListener('DOMContentLoaded', function() {
    const eventList = document.getElementById('eventList');
    const buyTicketButton = document.getElementById('buyTicketButton');

    // Supongamos que aquí cargamos dinámicamente la lista de eventos disponibles desde el servidor
    // Esto puede hacerse mediante una solicitud GET al backend
    // Por simplicidad, asumimos que ya tenemos los eventos disponibles en una variable

    const availableEvents = [
        { id: 1, name: 'Concierto', date: '2024-04-15', price: 20 },
        { id: 2, name: 'Festival de Cine', date: '2024-05-20', price: 15 },
        { id: 3, name: 'Conferencia', date: '2024-06-10', price: 10 }
    ];

    availableEvents.forEach(event => {
        const option = document.createElement('option');
        option.value = event.id;
        option.textContent = `${event.name} - ${event.date}`;
        eventList.appendChild(option);
    });

    buyTicketButton.addEventListener('click', function() {
        const selectedEventId = parseInt(eventList.value);
        const quantity = parseInt(document.getElementById('quantity').value);

        // Aquí puedes enviar los datos de la compra al backend para su procesamiento
        // Por ejemplo, puedes usar fetch() para enviar una solicitud POST al backend
        // con el ID del evento y la cantidad de entradas
    });
});

