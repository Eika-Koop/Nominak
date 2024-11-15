document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value;

        if (username === 'EikaRRHH' && password === 'Pepinillo20*') {
            window.location.href = 'success.html';
        } else {
            alert('Erabiltzailea edo pasahitza ez da zuzena!');
        }
    });
});
