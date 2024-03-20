import { baseDatosUsuarios } from "./baseDatos.js";
document.addEventListener('DOMContentLoaded', function() {
    const botonIniciarSesion = document.getElementById('iniciarSesion');
    
    botonIniciarSesion.addEventListener('click', function() {
        login();
    });

    function login() {
        console.log(baseDatosUsuarios)
        let correo = document.getElementById('correo');
        let contrasena = document.getElementById('contrasena');
        const usuarioEncontrado = baseDatosUsuarios.find(usuario => usuario.usuario === correo.value && usuario.pass === contrasena.value);
        
        if (usuarioEncontrado) {
            location.href = 'index.html';
            localStorage.setItem('usuarioActual', JSON.stringify(usuarioEncontrado));
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Usuario o contraseña incorrectos'
            });
        }
    }
});