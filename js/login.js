baseDatosUsuarios=[
    {usuario:'daniel',pass:'1234'},
    {usuario:'ana',pass:'1234'},
    {usuario:'sara',pass:'1234'},
    {usuario:'jorge',pass:'1234'},
    {usuario:'manuela',pass:'1234'}
]

function login() {
    let correo=document.getElementById('correo')
    let contrasena=document.getElementById('contrasena')
    const usuarioEncontrado=baseDatosUsuarios.find(usuario=>usuario.usuario===correo.value && usuario.pass===contrasena.value)
    if (usuarioEncontrado) {
        location.href='https://www.google.com/'
    }
    else{
        alert('Usuario o contraseña incorrectos');
    }
    
}


function registrarUsuario() {
    if (baseDatosUsuarios.some(usuario => usuario.usuario === correo.value)) {
        alert('El usuario ya existe en la base de datos');
        return;
    }
    
    if (contrasena.value.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres');
        return;
    }
    
    if (!/[A-Z]/.test(contrasena.value)) {
        alert('La contraseña debe contener al menos una letra mayúscula');
        return;
    }
    
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(contrasena.value)) {
        alert('La contraseña debe contener al menos un carácter especial');
        return;
    }

    
    if (contrasena.value !== confirmarContrasena.value) {
        alert('Las contraseñas no coinciden');
        return;
    }
    
    baseDatosUsuarios.push({ usuario: correo.value, pass: contrasena.value });
    alert('Registro exitoso');

}