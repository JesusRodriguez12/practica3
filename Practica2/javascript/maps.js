// Detecta el scroll para mostrar u ocultar el pie de página
window.addEventListener('scroll', function() {
    var footer = document.querySelector('footer');
    if (window.scrollY > 100) {
        footer.classList.add('show');
    } else {
        footer.classList.remove('show');
    }
});

function initMap() {
    var eventLocation = { lat: -34.397, lng: 150.644 }; // Cambia esto a la ubicación de tu evento
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15, // Ajusta el nivel de zoom según sea necesario
        center: eventLocation
    });
    var marker = new google.maps.Marker({
        position: eventLocation,
        map: map
    });
}

document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    alert('Gracias por registrarte, ' + nombre + '! Te hemos enviado un correo a ' + email + '.');
});
