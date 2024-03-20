
import { baseDatosUsuarios, agregarUsuario } from "./baseDatos.js";
const correo = document.getElementById('correo');
const contrasena = document.getElementById('contrasena');
const confirmarContrasena = document.getElementById('confirmarContrasena');
const botonRegistro=document.getElementById('botonRegistro')
const errorCorreo = document.getElementById('errorCorreo');
const errorContrasena = document.getElementById('errorContrasena');
const errorConfirmarContrasena = document.getElementById('errorConfirmarContrasena');
correo.addEventListener('blur', function() {
    if (baseDatosUsuarios.some(usuario => usuario.usuario === correo.value)) {       
        errorCorreo.textContent = 'Este correo ya está registrado.';
        errorCorreo.classList.remove('hidden');
    }else{
        errorCorreo.classList.add('hidden');
    }
});

contrasena.addEventListener('blur', function() {
    errorContrasena.classList.add('hidden');
    errorConfirmarContrasena.classList.add('hidden');
    if (contrasena.value.length < 6) {
        errorContrasena.textContent = 'La contraseña debe tener al menos 6 caracteres.'
        errorContrasena.classList.remove('hidden')
    }else{
        errorConfirmarContrasena.classList.add('hidden')
    }

    if (!/^(?=.*[A-Z]).+$/.test(contrasena.value)) {
        errorContrasena.textContent = 'La contraseña debe tener al menos una letra mayuscula.'
        errorContrasena.classList.remove('hidden');
        
    }else{
        errorConfirmarContrasena.classList.add('hidden')
    }

    if (!/^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?/~`\-\\|]).+$/.test(contrasena.value)) {
        errorContrasena.textContent = 'La contraseña debe tener al menos un caracer especial.'
        errorContrasena.classList.remove('hidden')
        
    }else{
        errorConfirmarContrasena.classList.add('hidden')
    }

});

confirmarContrasena.addEventListener('blur', function() {
    if (contrasena.value !== confirmarContrasena.value) {
        errorConfirmarContrasena.textContent = 'Las contraseñas no coinciden.'
        errorConfirmarContrasena.classList.remove('hidden')
    }else{
        errorConfirmarContrasena.classList.add('hidden')
    }
});
botonRegistro.addEventListener('click',function(){
    agregarUsuario({
        usuario: correo.value,
        pass: contrasena.value
    });
    Swal.fire({
        icon: 'success',
        title: '¡Registro exitoso!',
        text: 'Usuario registrado correctamente'
    })

    
    
})



