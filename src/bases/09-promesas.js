import { getHeroeById } from "./bases/08-imp-exp";

/* creamos la función getHeroeByIdAsync pasando el id y pegamos dentro la promesa.
    para poder usar el then y catch, debemos retornar la promesa a la función, caso contrario no se podrá acceder
*/
const getHeroeByIdAsync = (id) => {
    // retornar la promesa a la fción
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const p1 = getHeroeById(id);
            if (p1) {
                resolve (p1);
            } else {
                reject( 'No se encontró el Heroe' );
            }
        }, 2000);
    } );
}

// forma larga de then y catch
// getHeroeByIdAsync(2)
//     .then( heroe => console.log('Heroes', heroe) )
//     .catch( err => console.warn( err) );
    
/* 
Otra forma de usar ek then y el catch de forma simplificada es la siguente.
lo que estoy haciendo es mandar la referencia, para que cuando se reciba el then, mande el primer argumento al console.log 
*/
getHeroeByIdAsync(2)
    .then( console.log )
    .catch( console.warn );