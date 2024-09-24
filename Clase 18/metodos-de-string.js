//Metodos de string

//['p', 'e', 'p', 'e']

let nombre = 'pepe'


console.log(nombre[0])
console.log(nombre.length)

console.log(mensaje.includes('todos'))
console.log(mensaje.toUpperCase())
console.log(mensaje.toLowerCase())
console.log(mensaje)

/*para modificar el string original tengo que reasignarlo, toUppercase y toLowercase generan un nuevo string, no modifican el original*/

let mensaje = 'HoLa a todos, como estan?'
let palabraBuscada = 'hola'

mensaje = mensaje.toLocaleLowerCase()
palabraBuscada = palabraBuscada.toLowerCase()

console.log(mensaje.includes(palabraBuscada))

/*siemmpre y cuando el primer metodo que usemos tenga como valor de retorno, lo mismo que el segundo metodo a utilizar, por ej un string, es valido*/
/*
let resultado = mensaje.toLowerCase().includes(palabraBuscada.toLowerCase())
console.log(resultado)

console.log(buscarPalabraEnString('CoMo', mensaje))

function buscarPalabraEnString (palabraBuscada, string){
    let stringLowercase = string.toLowerCase()
    let palabraBuscadaLowercase = palabraBuscada.toLowerCase()
    return stringLowercase.includes(palabraBuscadaLowercase)
}
*/

/* let mensaje = 'HoLa a todos, como estan?, todos estan bien?'

console.log(mensaje.replace('todos', 'todas'))
console.log(mensaje.replaceAll('todos', 'todas'))

//Elimina los espacios dobles de los bordes(final e inicio)
/* console.log(nombre.repeat(10))*/

//Trae el caracter en la posicion 0
/* console.log(nombre.charAt(0))*/

//Nos permmite transformar un string en array
/* let mensajeArray = mesaje.split(' ') */
/*mensajeArray.push('juan')*/

/* console.log(`En el mensaje hay ${mensajeArray.length} palabras`) */

/* let mensaje2 = 'HoLa a todos, como estan?, todos estan bien?*/

//Arrow function

//Verificar si es un numero

/* function VerificarNumero (numero){
    return !isNaN(numero)
    }
    */

    /* const VerificarNumero = (numero) => {
        return !isNaN(numero)
    }*/

