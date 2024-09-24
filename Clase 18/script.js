let nombre = 'pepe'
let apellido = 'suarez'
let edad = 26
console.log('hHola minombre es ' + nombre + 'y mi apellido es ' + apellido + 'y tengo ' + edad + 'años')

console.log('Hola, mi nombre es ${nombre} y si mi apellido es ${apellido} y tengo ${edad} años')

const cliente = {
    nombre: 'maria',
    apellido: 'reinaldo',
    'edad actual': 26
}

console.log('Hola, mi nombre es ${cliente.nombre} y si mi apellido es ${cliente.apellido} ')

//Obtener un array de strings con las claves/propiedades de mis objetos
console.log(Object.keys(cliente))

//Obtener un array con los valores de mi objeto por el orden de declaracion
console.log(Object.values(cliente))

//                                 0          1           2
/*const usuarios_conectados = ['Profe UTN', 'Augusto', 'Alejandro', nombre]
*/
const usuarios_conectados = [
    {
        nombre: 'Profe UTN',
        id: 1,
        isAdmin: true,
        isMuted: false,
        isOnCamara: false,
        image:'http://direccion-imagen.jpg'
    },
    {
        nombre: 'Augusto',
        id: 2,
        isAdmin: false,
        isMuted: false,
        isOnCamara: false,
        image:'http://direccion-imagen.jpg'
    },
    {
        nombre: 'Alejandro',
        id: 3,
        isAdmin: false,
        isMuted: false,
        isOnCamara: false,
        image:'http://direccion-imagen.jpg'
    },
]

usuarios_conectados[1] = 'Mateo Devola'
console.log(usuarios_conectados[1])
console.log(usuarios_conectados)

//Listar a los usuarios conectados (el FOR OF es una accion por cada elemento de mi array, se va a ejecutar 4 veces)

for(let usuario of usuarios_conectados){
    console.log(usuario + 'esta conectado')

}
/*Esto hace el for of por detras*/
{
    let usuario = usuarios_conectados[0]
    console.log(usuario + 'esta conectado')
}

{let usuario = usuarios_conectados[1]
    console.log(usuario + 'esta conectado')

}

{let usuario = usuarios_conectados[2]
    console.log(usuario + 'esta conectado')

}

{let usuario = usuarios_conectados[3]
    console.log(usuario + 'esta conectado')

}
