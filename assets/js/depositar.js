import { obtenerSaldo, guardarSaldo, saldoActualizado } from "./saldo.js";

export function iniciarDeposito() {
    $(document).on('submit', '#deposit-form', function(event) {
        
        event.preventDefault(); 
        
        let depositAmount = parseFloat($('#depositAmount').val());
        let alertBox = $('#deposit-alert');
        

        if (!isNaN(depositAmount) && depositAmount > 0) {
            let saldo = obtenerSaldo();
            let nuevoSaldo = saldo + depositAmount;
            guardarSaldo(nuevoSaldo)
            alertBox.removeClass('d-none alert-danger').addClass('alert-success');
            alertBox.text('Depósito realizado con éxito. Monto: $' + depositAmount);
            alertBox.show();
            $('#depositAmount').val('');
            saldoActualizado()
            setTimeout(function() {
                window.location.href = 'menu.html'; 
            }, 2000);

        } else {
            alertBox.removeClass('d-none alert-success').addClass('alert-danger');
            alertBox.text('Error: El monto debe ser mayor a 0.');
            alertBox.show();
        }
    });
}