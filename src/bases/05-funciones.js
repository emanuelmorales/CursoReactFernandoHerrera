// Funciones en JS

// no se aconseja crear una función de esta manera, ya que es fácil sobreescribir esa función como se ve más abajo
function saludar( nombre ){
    return `Hola, ${ nombre }`;
}

// si hacemos esto, saludar ahora es 30 y ya no es una referencia a l a funciòn
// esto nos arroja un warning pero la app sigue funcionando
saludar = 30; 

// Para solucionar esto, la manera de definir una función es definiéndola como una constante como se muestra a continuación
const saludar2 = function ( nombre ){
    return `Hola, ${ nombre }`;
}
// si ahora hacemos saludar2 = 20 esto nos tira un error, y nuestro código ya no funciona, debido a que nos indica que queremos cambiar el valor a una constante
// saludar2 = 20

console.log( saludar2);

/*FUNCIONES DE FLECHA
Se puede transformar una fción tradicional en una fción de flechas, la cual tiene muchas ventajas, por ejemplo para transformar la fción saludar2 seguimos los siguiente pasos
1. quitar la palabra function
2. luego de () viene la => que es conocida como flecha gorda
quedando de la siguiente manera
*/
const saludar3 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

/* 
una ventaja de las funciones de flecha es donde recibimos todos los argumentos y el cuerpo de la fción solo hace un return, podemos simplificarlo de la siguiente manera
1. eliminamos la palabra function
2. elimino las {} de la función 
3. elimino la palabra return
quedando d ela siguiente manera
*/
const saludar4 = ( nombre ) => `Hola, ${ nombre }`;

/*
En caso de no recibir ningún argumento sería
*/
const saludar5 = () => `Hola Mundo`;

console.log( saludar3('Vegeta'));
console.log( saludar4('Goku'));
console.log( saludar5());

/* 
Veremos como retornar un objeto de forma implícita utilizando los ()

const getUser = function(){
    return {
    uid: 'ABC123',
    username: 'El_Papi1502'
    }
}
*/
const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502'
})
const user = getUser();
console.log(user);

/*
Tarea: 
1. Transformen a una función de flechas
2. Tiene que retornar un objeto implícito
3. Pruebas
*/
// function getUsuarioActivo( nombre ) {
//     return {
//         uid: 'ABC567',
//         username: nombre
//     }
// };

const getUsuarioActivo = ( nombre ) => ({
        uid: 'ABC567',
        username: nombre
});

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);