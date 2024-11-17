document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada.

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;

        // Validación de credenciales
        if (username === 'EikaRRHH' && password === 'EiSC2024*') {
            // Redirigir a la página de éxito
            window.location.href = 'success.html';
        } else {
            // Mostrar un mensaje de error si las credenciales son incorrectas
            alert('Erabiltzailea edo pasahitza ez da zuzena!');
        }
    });
});
