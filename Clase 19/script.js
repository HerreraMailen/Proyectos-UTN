/* Callback */

/* es uns funcion pasada por parametro*/




const saludar = () => {
    alert("Hola" + nombre)
}
const solicitarDato = (mensaje) => {
    let nombre = prompt(mensaje)
    while(!solicitarDato || !isNaN(dato) || dato.includes('*')){
        dato = prompt('Error, volver a ingresar el nombre')
    }
    return dato
}

let nombre = solicitarDato(
    'ingrese el nombre',
    'Error al ingresar nombre, recuerda que no se permiten numeros o asteriscos'
)
let nombreEmpresa = solicitarDato(
    'Ingreses el nombre de su empresa',
    'Error al ingresar el nombre de la empresa'
)

saludar(nombre)

// Quiero solicitar nombre de la empresa