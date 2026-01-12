import { obtenerSaldo } from "./saldo.js";
import { obtenerTransacciones } from "./transacciones.js";

export function cargarDatosDashboard() {
    const saldoActual = obtenerSaldo();
    $('#saldo').text('$ ' + saldoActual);

    const historial = obtenerTransacciones();
    const indicador = $('#indicador-variacion');

    if (!historial || historial.length === 0) {
        indicador.text('Sin movimientos recientes');
        return;
    }

    const ultimoMov = historial[0];
    const montoMovimiento = parseFloat(ultimoMov.monto);

    let saldoAnterior = 0;

    if (ultimoMov.tipo === 'ingreso') {
        saldoAnterior = saldoActual - montoMovimiento;
    } else {
        saldoAnterior = saldoActual + montoMovimiento;
    }

    let porcentaje = 0;
    
    if (saldoAnterior > 0) {
        porcentaje = (montoMovimiento / saldoAnterior) * 100;
    } else if (saldoAnterior === 0) {
        porcentaje = 100; 
    }

    const esIngreso = ultimoMov.tipo === 'ingreso';
    
    const icono = esIngreso ? '🡅' : '🡇';
    const claseColor = esIngreso ? 'text-success' : 'text-danger';
    
    indicador.removeClass('text-success text-danger text-muted');
    indicador.addClass(claseColor);

    indicador.html(`${icono} ${porcentaje.toFixed(1)}% <small class="text-muted ml-1">vs último mov.</small>`);
}
export function mostrarDatosTarjeta() {
    const btn = $('#btnMostrarDatos');
    const datos = $('#numero-tarjeta, #titular-tarjeta, #vencimiento-tarjeta, .credit-card-logo');
    btn.off('click').on('click', function() {
        datos.toggleClass('blur-text');
        if (datos.hasClass('blur-text')) {
            btn.text('Mostrar');
            btn.removeClass('btn-outline-danger').addClass('btn-luka--sm');
        } else {
            btn.text('Ocultar');
            btn.removeClass('btn-luka--sm').addClass('btn-outline-danger');
        }
    });
}