const historialDefault = [
    { tipo: "ingreso", descripcion: "Depósito Inicial", monto: 50000, fecha: "10-01-2026" },
    { tipo: "egreso", descripcion: "Compra en línea", monto: 12990, fecha: "11-01-2026" },
    { tipo: "ingreso", descripcion: "Transferencia de Juan", monto: 5000, fecha: "12-01-2026" }
];

// Función para obtener la lista
export function obtenerTransacciones() {
    const historial = localStorage.getItem('historialTransacciones');
    if (!historial) {
        localStorage.setItem('historialTransacciones', JSON.stringify(historialDefault));
        return historialDefault;
    }
    return JSON.parse(historial);
}


export function registrarTransaccion(tipo, descripcion, monto) {
    let historial = obtenerTransacciones();

    const nuevoMovimiento = {
        tipo: tipo,
        descripcion: descripcion,
        monto: monto,
        fecha: new Date().toLocaleDateString('es-CL')
    };

    historial.unshift(nuevoMovimiento);

    localStorage.setItem('historialTransacciones', JSON.stringify(historial));
}