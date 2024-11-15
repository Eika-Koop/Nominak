// Inicializar estadísticas si no existen
if (!localStorage.getItem("visitas")) localStorage.setItem("visitas", 0);
if (!localStorage.getItem("correctas")) localStorage.setItem("correctas", 0);
if (!localStorage.getItem("incorrectas")) localStorage.setItem("incorrectas", 0);
if (!localStorage.getItem("intentosAcceso")) localStorage.setItem("intentosAcceso", 0);

// Incrementar el contador de visitas a la página
localStorage.setItem("visitas", parseInt(localStorage.getItem("visitas")) + 1);

// Actualizar estadísticas en la página principal
document.getElementById("visitCount").innerText = localStorage.getItem("visitas");
document.getElementById("accessAttempts").innerText = localStorage.getItem("intentosAcceso");

// Manejar el evento de envío del formulario
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío del formulario
    const password = document.getElementById("password").value;
    const username = document.getElementById("username").value;

    // Incrementar intentos de acceso
    localStorage.setItem("intentosAcceso", parseInt(localStorage.getItem("intentosAcceso")) + 1);
    document.getElementById("accessAttempts").innerText = localStorage.getItem("intentosAcceso");

    // Verificar usuario y contraseña
    if (username === "EikaRRHH" && password === "Pepinillo20*") {
        localStorage.setItem("correctas", parseInt(localStorage.getItem("correctas")) + 1);
        window.location.href = "correcto.html"; // Redirige a la página correcta
    } else {
        localStorage.setItem("incorrectas", parseInt(localStorage.getItem("incorrectas")) + 1);

        // Mostrar mensaje de error específico
        if (username !== "EikaRRHH" && password !== "Pepinillo20*") {
            document.getElementById("message").innerText = "Usuario y contraseña incorrectos.";
        } else if (username !== "EikaRRHH") {
            document.getElementById("message").innerText = "Usuario incorrecto.";
        } else if (password !== "Pepinillo20*") {
            document.getElementById("message").innerText = "Contraseña incorrecta.";
        }
    }
});
