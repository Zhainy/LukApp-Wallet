import { obtenerTransacciones } from "./transacciones.js";

export function cargarHistorial() {
    const lista = $('#lista-movimientos');
    // Si no estamos en la página de transacciones (la lista no existe), no hacemos nada
    if (lista.length === 0) return;

    const historial = obtenerTransacciones();
    lista.empty();

    historial.forEach(mov => {
        // Definimos estilos según si es ingreso (verde) o egreso (rojo)
        let colorClase = mov.tipo === 'ingreso' ? 'text-success' : 'text-danger';
        let signo = mov.tipo === 'ingreso' ? '+' : '-';
        let icono = mov.tipo === 'ingreso' ? '🡅' : '🡇'; // Flechitas simples

        let html = `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <div>
                    <span class="font-weight-bold">${mov.descripcion}</span>
                    <br>
                    <small class="text-muted">${mov.fecha}</small>
                </div>
                <span class="${colorClase} font-weight-bold">
                    ${signo} $${mov.monto} ${icono}
                </span>
            </li>
        `;
        lista.append(html);
    });
}