export const contactosDefault = [
    { nombre: "Juan Perez", cuenta: "1234567890", alias: "juanp" , banco: "Banco Estado", tipoCuenta: "Cuenta Rut" },
    { nombre: "Maria Gomez", cuenta: "0987654321", alias: "mariag" , banco: "Scotiabank", tipoCuenta: "Corriente" },
    { nombre: "Sofia Martinez", cuenta: "3344556677", alias: "sofiam" , banco: "Mercado Pago", tipoCuenta: "Vista" },
    { nombre: "Diego Fernandez", cuenta: "7788990011", alias: "diegof" , banco: "Banco Falabella", tipoCuenta: "Corriente" },
    { nombre: "Elena Suarez", cuenta: "4455667788", alias: "elenas" , banco: "Banco Ripley", tipoCuenta: "Vista" },
];
export function obtenerContactos() {
    let contactosGuardados = localStorage.getItem('listaContactos');
    if (!contactosGuardados) {
        localStorage.setItem('listaContactos', JSON.stringify(contactosDefault));
        return contactosDefault;
    }
    return JSON.parse(contactosGuardados);
}
export function agregarNuevoContacto(nuevoContacto) {
    let lista = obtenerContactos();
    lista.push(nuevoContacto);
    localStorage.setItem('listaContactos', JSON.stringify(lista));
}