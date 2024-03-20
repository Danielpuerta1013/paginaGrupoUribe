var baseDatosUsuarios = JSON.parse(localStorage.getItem('baseDatosUsuarios')) || [
    { usuario: 'daniel', pass: '1234' },
    { usuario: 'ana', pass: '1234' },
    { usuario: 'sara', pass: '1234' },
    { usuario: 'jorge', pass: '1234' },
    { usuario: 'manuela', pass: '1234' }
];

function agregarUsuario(usuario) {
    baseDatosUsuarios.push(usuario);
    // Guardar datos en localStorage después de agregar un nuevo usuario
    localStorage.setItem('baseDatosUsuarios', JSON.stringify(baseDatosUsuarios));
}

export { baseDatosUsuarios, agregarUsuario };