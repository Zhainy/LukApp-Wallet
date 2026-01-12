import { iniciarLogin } from "./login.js";
import { iniciarDeposito } from "./depositar.js";
import { saldoActualizado } from "./saldo.js";
import { extraerContactos } from "./enviarDinero.js";
import { iniciarGestorDeTransferencias } from "./enviarDinero.js";
import { cargarHistorial } from './renderTransacciones.js';
import { cargarDatosDashboard, mostrarDatosTarjeta } from './dashboard.js';

$(document).ready(function () {
    iniciarLogin();
    saldoActualizado();
    iniciarDeposito();
    extraerContactos();
    iniciarGestorDeTransferencias();
    cargarHistorial();
    if ($('#saldo').length > 0) {
        cargarDatosDashboard();
    }
    mostrarDatosTarjeta();
}); 