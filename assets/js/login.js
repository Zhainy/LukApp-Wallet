export function iniciarLogin() {
    $(document).on('submit', '#login-form', function(event) {
        
        event.preventDefault(); // Evita recarga de página
        let userEmail = $('#email').val();
        let userPassword = $('#password').val();
        let alertBox = $('#login-alert');
        // Validar el usuario
        if (userEmail.includes('@admin.com') && userPassword === '1234'){
            alertBox.alert();
            alertBox.removeClass('d-none alert-danger').addClass('alert-success');
            alertBox.text('Inicio de sesión exitoso. Redirigiendo al menú...');
            alertBox.show();
            setTimeout(function() {
        window.location.href = 'menu.html';
    }, 2000);
        } else {
            alertBox.removeClass('d-none alert-success').addClass('alert-danger');
            alertBox.text('Error: Credenciales inválidas. Por favor, inténtalo de nuevo.');
            alertBox.show();
        }
    })
}
