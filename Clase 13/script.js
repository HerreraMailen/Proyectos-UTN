/*
Constructor:
Number (dato) devuelve un dato numerico
String (dato) devuelve un dato string
Boolean (dato) devuelve um dato boolean
*/

/*Truthy or Falsy

Falsy:
-null
-undefinded
-NaN
-0
-false
-' ' (comillas vacias)

Truthy:
TODOS LOS VALORES DISTINTOS A LOS MENCIONADOS A FALSY
*/

/*OPERADORES ARITMETICOS

-Concatenacion: ocurre cuando HAY un string o mas en una operacion, Pasa el dato distinto de string a string y los une. Devuelve SIEMPRE un string

-Suma: ocurre cuando NO hay string en una operacion. Pasa el dato distinto a numero a numero. Devuelve siempre Number


-Resta: Pasa el dato distinto a numero a numero. Devuelve siempre Number


-Multiplicacion: Pasa el dato distinto a numero a numero.
-Division: Pasa el dato distinto a numero a numero. Devuelve siempre Number


-%: Pasa el dato distinto a numero a numero. Devuelve siempre Number

REGLAS:

Cualquier dato operado con NaN, excepto la concatenacion, da como resultado un NaN

Cuando se operan datos numericos con un Undefined, siempre da comoresultado NaN, xq los datos que no son numericos siempre tienen valor NaN y todos las operaciones con NaN dan ese resultado
*/

/*Ejemplos:
5 + 5 //number, 10

undefined + 'NaN' //string, 'undefinedNaN'

'hola' + '1' //string, hola1

true + false //number, 1
Number(true) + Number(false)
Resultado: 1 + 0 

Number(NaN) - Number(NaN) //number, NaN

0 + null //number, 0

null + null //number,0

3 * '5' //number, 15
*/

//COMPARADORES: siempre devuelven booleanos

/*
== : Igualdad entre dos valores
=== : Estricta igualdad, compara valor y tipo de dato (Uso recomendado como buena practica)
!= : Diferencia
!== : Estricta diferencia, compara la diferencia de valor y tipo de dato (Uso recomendado como buena practica)
> : mayor a
< : menor a 
>= : mayor o igual a
<= : menor o igual a




Excepcion:

NaN siempre s distinto de cualquier valor, incluido el mismo NaN
null solo puede ser igual a null o undefined, siempre va a dar False
*/

/*true === null //false

Boolean(true + false - 1) === Boolean(NaN) //true

Number('hola') === NaN //false

undefined == null //true

3 != (true + '1' + 1)//true
*/

/*OPERADORES LOGICOS*/

/*
!NOT: Devuelve el valor booleano opuesto al valor negado
!7 //false
!-10 //false
!'' //true

||OR: Verifica si el primer valor es es verdadero o falso, si es verdadero devuelve el primer valor, si es falso devuelve el segundo valor
'pepe' || 'maria' //pepe
0 || '' //''
NaN || 9 //9

&&AND: Verifica si el primer valor es es verdadero o falso, si es verdadero devuelve el segundo valor, si es falso devuelve el primer valor

7 && 0 //0
'pepe' && 'maria' //'maria'
'' && 0 //''
*/

/*VARIABLES*/

/*
VAR, variable que nos permite guardar valores que queremos asignar
LET
CONST
*/

//VAR: se puede reasignar, se puede declarar sin valor inicial(automaticamente JS le asignara undefined) se puede redeclarar. Se puede acceder antes de su inicializacion/declaracion

/*HOISTING

/*var nombre = 'pepe'
nombre = 'juan'
var apellido


console.log(nombre)
console.log(apellido)
*/

//LET: se puede reasignar, se puede declarar sin valor inicial (automaticamente JS le asignara undefined) NO se puede redeclarar*/

/*let nombre = 'pepe'
nombre = 'juan'

console.log(nombre)

//CONST: No se puede reasignar. No se puede declarar sin valor inicial. No se puede redeclarar. No se puede acceder antes de su inicializacion/declaracion

/*
alert()Enviar una alerta
prompt()Solicita un dato (SIEMPRE RETORNA UN STRING O UN NULL)
Si le damos a aceptar devuelve un string
Si le damos a cancelar devuelve un null
*/
/*alert('hola')*/
/*let edad = prompt('dame tu edad')
console.log('El tipo de dato de edad es: ' + (typeof(edad)) )*/

