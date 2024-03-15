baseDatosUsuarios=[
    {usuario:'daniel',pass:'1234'},
    {usuario:'ana',pass:'1234'},
    {usuario:'sara',pass:'1234'},
    {usuario:'jorge',pass:'1234'},
    {usuario:'manuela',pass:'1234'}
]

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
    if (contrasena.value.length < 6) {
        errorContrasena.textContent = 'La contraseña debe tener al menos 6 caracteres.';
        errorContrasena.classList.remove('hidden');
    }else{
        errorConfirmarContrasena.classList.add('hidden');
    }

    if (!/[A-Z]/.test(contrasena.value)) {
        errorContrasena.textContent = 'La contraseña debe tener al menos una letra mayusculaa.';
        errorContrasena.classList.remove('hidden');
        
    }else{
        errorConfirmarContrasena.classList.add('hidden');
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(contrasena.value)) {
        errorContrasena.textContent = 'La contraseña debe tener al menos un caracer especial.';
        errorContrasena.classList.remove('hidden');
        
    }else{
        errorConfirmarContrasena.classList.add('hidden');
    }

});

confirmarContrasena.addEventListener('blur', function() {
    if (contrasena.value !== confirmarContrasena.value) {
        errorConfirmarContrasena.textContent = 'Las contraseñas no coinciden.';
        errorConfirmarContrasena.classList.remove('hidden');
    }else{
        errorConfirmarContrasena.classList.add('hidden');
    }
});
botonRegistro.addEventListener('click',function(){
    baseDatosUsuarios.push({ usuario: correo.value, pass: contrasena.value });
    Swal.fire({
        icon: 'success',
        title: '¡Registro exitoso!',
        text: 'Usuario registrado correctamente'
    });;
})



// function registrarUsuario() {
//     correo.addEventListener('input', function() {
//         if (baseDatosUsuarios.some(usuario => usuario.usuario === correo.value)) {
           
//             alert('El usuario ya existe en la base de datos');
//         }
//     });
    
//     if (contrasena.value.length < 6) {
//         alert('La contraseña debe tener al menos 6 caracteres');
//         return;
//     }
    
//     if (!/[A-Z]/.test(contrasena.value)) {
//         alert('La contraseña debe contener al menos una letra mayúscula');
//         return;
//     }
    
//     if (!/[!@#$%^&*(),.?":{}|<>]/.test(contrasena.value)) {
//         alert('La contraseña debe contener al menos un carácter especial');
//         return;
//     }

    
//     if (contrasena.value !== confirmarContrasena.value) {
//         alert('Las contraseñas no coinciden');
//         return;
//     }
    
//     baseDatosUsuarios.push({ usuario: correo.value, pass: contrasena.value });
//     Swal.fire({
//         icon: 'success',
//         title: '¡Registro exitoso!',
//         text: 'Usuario registrado correctamente'
//     });;

// }