// Inicializar estadísticas si no existen
if (!localStorage.getItem("visitas")) localStorage.setItem("visitas", 0);
if (!localStorage.getItem("correctas")) localStorage.setItem("correctas", 0);
if (!localStorage.getItem("incorrectas")) localStorage.setItem("incorrectas", 0);

// Incrementar el contador de visitas a la página
localStorage.setItem("visitas", parseInt(localStorage.getItem("visitas")) + 1);

// Seleccionar elementos del DOM
const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

// Manejar el evento de envío del formulario
loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío del formulario
    const password = document.getElementById("password").value;
    const username = document.getElementById("username").value;

    // Verificar contraseña
    if (password === "Pepinillo20*") {
        localStorage.setItem("correctas", parseInt(localStorage.getItem("correctas")) + 1);
        window.location.href = "correcto.html"; // Redirige a la página correcta
    } else {
        localStorage.setItem("incorrectas", parseInt(localStorage.getItem("incorrectas")) + 1);
        message.innerText = "Error de contraseña.";
    }
});
