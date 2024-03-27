// Desestructuración de arreglos

// Supongamos que tenemos el siguiente arreglo
const personajes = ['Goku', 'Vegeta', 'Trunks'];

//ahora necesito imprimir los personajes en consnola
console.log( personajes );

//en caso de querer imprimir en cada una de sus posiciones
console.log( personajes[0] );
console.log( personajes[1] );
console.log( personajes[2] );
//de esta manera es muy tediosos estar escribiendo el arreglo indicando su posición, pero tal vez eso no sea lo que necesitamos

//si necesitamos extraer a los personajes de manera independiente lo podemos hacer de la siguiente manera. Definir una constante y entre [] extraigo los elementos del array que necesito.

//aquí podemos ver que obtenemos a Goku
const [ p1 ] = personajes;
console.log( p1 );

//que pasa si quiero obtener a Vegeta pero no quiero a Goku, entonces debemos agregar una , al inicio indicando que ignore al primer elemento del arreglo.
const [ , p2 ] = personajes;
console.log( p2 );

//que pasa si quiero obtener a Trunks pero no quiero a Goku ni a Vegeta, entonces debemos agregar dos , al inicio indicando que ignore al primero y segundo elementos del arreglo.
const [ , , p3 ] = personajes;
console.log( p3 );

//es muy común ver esta forma de obtener los valores de un arreglo, no así ver espacios vacios al principio, ya que al hacer una desestructuración, siempre vamos a estar ocupando el 1º, 2º valor, ya lo veremos con otro ejercicio

const retornaArreglo = () => {
    return ['ABC', 123];
}

//de esta manera podemos extraerlos en sus variables o constantes independientes que me sirva para trabajar más facilmente
const [ letras, numeros] = retornaArreglo();
console.log(letras, numeros);


/*tarea: crear una función useState que retorna un arreglo y recibe un valor. Realizar la desestructuración del arreglo que cumpla lo siguiente
1. el primer nombre del arreglo se llamara nombre
2. el segundo se llamara setNombre
3. se deberán mostrar por separado los 2 elementos
*/
const a_useState = ( valor ) => {
    return [ valor, ()=>{ console.log('Hola Mundo') } ];
}

// const [arr] = a_useState( 'Goku' );
// console.log( arr );

//con esto estoy realizando la desestructuración del arreglo, y llamo al la posición 1 que es la función y llamo a la misma con (). Esto omstrará el mensaje 'Hola Mundo'
// arr[1]();

//resolución de la tarea
const [ nombre, setNombre] = a_useState( 'Goku' );
console.log( nombre );
setNombre();





