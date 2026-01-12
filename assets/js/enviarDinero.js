import { obtenerSaldo, guardarSaldo, saldoActualizado } from "./saldo.js";
import { obtenerContactos, agregarNuevoContacto } from "./contactos.js";
import { registrarTransaccion } from "./transacciones.js";

let transaccionPendiente = null;

export function iniciarGestorDeTransferencias() {
    extraerContactos();
    saldoActualizado();
    $('#btn-confirmar-envio').off('click').on('click', confirmarTransaccion);
    $('#btn-guardar-contacto').off('click').on('click', guardarContactoUsuario);
}

function guardarContactoUsuario() {
const nombre = $('#nuevo-nombre').val().trim();
    const cuenta = $('#nuevo-cbu').val().trim(); 
    const alias = $('#nuevo-alias').val().trim();
    const banco = $('#nuevo-banco').val();
    const tipoCuenta = $('#nuevo-tipoCuenta').val(); 

    const alertBox = $('#contacto-alert');

    alertBox.addClass('d-none').removeClass('alert-danger alert-success');

    if (nombre === "" || cuenta === "" || alias === "" || banco === "" || tipoCuenta === "") {
        alertBox.removeClass('d-none').addClass('alert-danger');
        alertBox.text('Por favor complete todos los campos.');
        return;
    }

    const nuevo = {
        nombre: nombre,
        alias: alias,
        banco: banco,
        cuenta: cuenta,         
        tipoCuenta: tipoCuenta  
    };
    agregarNuevoContacto(nuevo);
    alertBox.removeClass('d-none alert-danger').addClass('alert-success');
    alertBox.text('Contacto guardado con éxito.');
    extraerContactos();
    $('#modalNuevoContacto').modal('hide');
    $('#form-nuevo-contacto')[0].reset();
}

export function extraerContactos() {
    let contenedor = $('#listaContactosAccordion');
       
    contenedor.empty();
    const lista = obtenerContactos()
    lista.forEach((contacto, index) => {
        const headingId = `heading-${index}`;
        const collapseId = `collapse-${index}`;
        let itemHTML = `
            <div class="card ">
                <div class="card-header" id="${headingId}" style="padding: 0;">
                    <h2 class="mb-0">
                        <button class="btn btn-light btn-block text-left p-3 d-flex justify-content-between align-items-center list-group-item" 
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#${collapseId}" 
                                aria-expanded="false" 
                                aria-controls="${collapseId}">
                            
                            <div class="contact-details">
                                <span class="font-weight-bold contact-name">${contacto.nombre}</span>
                                <br>
                                <small class="text-muted">Alias: ${contacto.alias}</small>
                            </div>
                            <i class="fas fa-chevron-down text-muted"></i> </button>
                    </h2>
                </div>

                <div id="${collapseId}" class="collapse" aria-labelledby="${headingId}" data-parent="#listaContactosAccordion">
                    <div class="card-body bg-light">
                        
                        <p class="small text-muted mb-2">
                           <strong>Banco:</strong> ${contacto.banco} | <strong>CBU:</strong> ${contacto.cuenta}
                        </p>

                        <form id="form-${index}">
                            <div class="form-group mb-2">
                                <label for="monto-${index}" class="sr-only">Monto</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">$</span>
                                    </div>
                                    <input type="number" class="form-control" id="monto-${index}" placeholder="Monto a transferir">
                                </div>
                            </div>
                            
                            <div class="form-group mb-2">
                                <input type="text" class="form-control" id="nota-${index}" placeholder="Nota (Opcional)">
                            </div>

                            <button type="button" class="btn btn-luka btn-block mt-3" onclick="prepararTransferencia(${index}, '${contacto.nombre}')">
                                Transferir
                            </button>
                            <button type="button" class="btn btn-luka btn-block mt-3" onclick="eliminarContacto(${index}, '${contacto.nombre}')">
                                Eliminar Contacto
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        `;

        contenedor.append(itemHTML);
    });
}
function irHaciaAlerta(){
    let posicionAlerta = $('#transfer-alert').offset().top;
    $('html, body').animate({
        scrollTop: posicionAlerta - 100
    }, 600);
}
window.prepararTransferencia = function(index, nombreContacto) {
    const inputMonto = $(`#monto-${index}`);
    const monto = parseFloat(inputMonto.val());
    const saldoDisponible = obtenerSaldo();
    let alertBox = $('#transfer-alert');
    alertBox.addClass('d-none').removeClass('alert-danger alert-success');

    if (isNaN(monto) || monto <= 0) {
        alertBox.removeClass('d-none').addClass('alert-danger');
        alertBox.text('Por favor, ingresa un monto válido para transferir.');
        irHaciaAlerta();
        return;
    }
    if (monto > saldoDisponible) {
        alertBox.removeClass('d-none').addClass('alert-danger');
        alertBox.text(`Fondos insuficientes. Tu saldo es $${saldoDisponible}`);
        irHaciaAlerta();
        return;
    }
    transaccionPendiente = {
        monto: monto,
        nombre: nombreContacto,
        inputId: `#monto-${index}`
    };
    $('#modal-nombre').text(nombreContacto);
    $('#modal-monto').text(`$ ${monto}`);
    $('#modalConfirmacion').modal('show');
};
window.eliminarContacto = function(index, nombreContacto) {
    let lista = obtenerContactos();
    lista.splice(index, 1);
    localStorage.setItem('listaContactos', JSON.stringify(lista));
    extraerContactos();
    let alertBox = $('#transfer-alert');
    alertBox.removeClass('d-none alert-danger').addClass('alert-success');
    alertBox.text(`Contacto ${nombreContacto} eliminado con éxito.`);
    setTimeout(() => {
        irHaciaAlerta(); 
    }, 300);
}

function confirmarTransaccion() {
    if (!transaccionPendiente) return;

    let saldoActual = obtenerSaldo();
    saldoActual -= transaccionPendiente.monto;

    guardarSaldo(saldoActual);
    saldoActualizado();
    registrarTransaccion('egreso', `Envío a ${transaccionPendiente.nombre}`, transaccionPendiente.monto);
    $(transaccionPendiente.inputId).val('');
    $('#modalConfirmacion').modal('hide');

    let alertBox = $('#transfer-alert');
    alertBox.removeClass('d-none alert-danger').addClass('alert-success');
    alertBox.text(`Transferencia de $${transaccionPendiente.monto} a ${transaccionPendiente.nombre} realizada con éxito.`);
    setTimeout(() => {
        irHaciaAlerta(); 
    }, 300);
    transaccionPendiente = null;
}