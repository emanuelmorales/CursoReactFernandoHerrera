/* The code snippet is creating an object named `persona` in JavaScript. This object has properties
such as `nombre` (name), `apellido` (last name), `edad` (age), and `direccion` (address). The
`direccion` property is an object itself with properties like `ciudad` (city), `zip` (zip code),
`lat` (latitude), and `lng` (longitude). */
const persona = {
    nombre:'Tony',
    apellido: 'Stark',
    edad: 45,//en muchas teorias de js dejar esta , al final es buena práctica
    // puede anidar objetos dento de objetos, funciones
    direccion: {
        ciudad: 'New York',
        zip: 4543434,
        lat: 14.3232,
        lng: 34.87563,
    }
}
//Hay muchas maneras de mostrar un objeto

//aqui estamos declarando el objeto persona que es del tipopersona, por esta razón, como se llaman de la misma manera, se puede reducir simplement a persona
console.table( { persona } ); //equivalente a console.log( { persona:persona } ) Esta es una maera de imprimir en consola que nos ayuda a imprimir el nombre de la variable en caso de tener muchas variables y saber cual es la primera, la segunda y así sucesivamente.


const persona3 = {...persona};


// podriamos querer copiar el objeto persona y creo persona2 a partir de persona, pero no es una copia de los valores, sino que es una referencia al espacio en meoria de esta variable, lo vemos en el siguiente código
const persona2 = persona;
persona2.nombre = 'Peter';

// Una forma de clonar un objeto es definiendo todas las propiedades nevamente, es decir, el nombre, apelido, edad, dirección. Sin embargo, Js a partir de Ecmascript6 incorpora el operador de propagación o spread operator (...) y puedo utilicarlo para hacer un clone o para extraer sus propiedades y asignarsela al nuevo objeo creado como se muestra a continuación
// const persona3 = {...persona};


// otra forma es usar console.table() cuando estamos mostrando un objeto e cual es mejor al momento de verlo. Esto es bastante cómodo y conveniente.
console.table( { persona2 } );
console.table( { persona } );
console.table( { persona3 } );