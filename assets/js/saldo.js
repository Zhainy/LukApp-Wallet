export function obtenerSaldo(){
    let saldoCuenta = localStorage.getItem('saldo');
    if (saldoCuenta === null) {
        return 0;
    }
    return parseFloat(saldoCuenta);
}
export function guardarSaldo(nuevoMonto){
    localStorage.setItem('saldo', nuevoMonto);
}
export function saldoActualizado() {
    let monto = obtenerSaldo();
    $('#saldo').text('$ '+ monto);
}