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
        location.href='index.html'
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Usuario o contraseña incorrectos'
        });
    }
    
}

