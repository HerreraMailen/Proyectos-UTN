
/*
Funciones nativas
SI QUEREMOS ACTIVAR/INVOCAR/LLAMAR UNA FUNCION DEBEMOS USAR () AL FINAL
Las funciones pueden recibir valores (a esos valores los llamamos parametros)
prompt()
alert()
console.log()
*/

/*prompt('dime tu nombre', 'pepe')

let nombre = 'pepe'
alert(nombre)
let resultadoAlerta = alert(10)
console.log ('Resultado:' + resultadoAlerta)

let nombre = prompt('ingrese su nombre')
console.log('El resultado de prompt es: ' + nombre)

/*Bloque de codigo*/
/*
{
    console.log('hola')
    alert('como estas?')
    let nombre = 'pepe'
    alert(nombre)
}
*/

/*CONDICIONES*/


/* if(1==1){
    alert('verdadero')
} */
/* if(''){
    alert('verdadero')
}
else{
    alert('false')
} */
    let edad = prompt('ingrese su edad')

    /*Si mi edad es > 18 decir puede pasar sino decir no puede pasar*/
    
    /* if(edad > 18){
        alert('puede pasar')
    }
    else{
        alert('no puede pasar')
    }
    
    /*Operadores Logicos
    Prompt
    comparador mayo igual y menor igual
    */ 
    
    /* Solicitar un numero entre 1 y 10 al usuario, si el numero es mayor a 10 o menor a 1 deberemos decir por alerta 'Dato incorrecto' caso contrario decir 'Dato correcto' */
    
    /*EJEMPLO 1*/
    let numero = prompt(`ingresar un numero del 1 al 10`)
    if (numero > 0 && numero <= 10 ) {
        alert("Dato Correcto")
    } else {
        alert("Dato Incorrecto")
    }
    /*EJEMPLO 2*/
    if(numero>10 || numero<=1){
        alert("Dato incorrecto")
        }else{
            alert("Dato correcto")
        } (edited) 
    
        /*
        Tabla de la verdad:
        And: devuelve el segundo, el unico caso que va a ser verdadero es cuando ambos datos son true.
    EJEMPLOS
        true && true = true 
        true && false = false
        false && true = false
        false && false = false
    
    
        Or: con que alguna de las condiciones se cumpla va a dar true
        EJEMPLOS
        true || true = true 
        false || true = true
        true ||false = true
        false || false = false
        */