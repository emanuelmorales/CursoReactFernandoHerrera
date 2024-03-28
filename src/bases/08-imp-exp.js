// importa el contenido de un archivo
import { heroes } from '../data/heroes';

/* 
no vemos nada, si deseamos visualizarlo, en el archivpo que contiene la información, deberiamos exportarlo, para ello debemos anteponer la palabra export al arreglo de la forma
export const heores = [ ....
    Ahora si podremos ver el contenido del arreglo
*/
// console.log(heroes);

// otra manera de importar un archivo es escribiendo imp y el snippet nos mostrará las opciones, lo seleccionamos con TAB y nos marcará para escribir el path, presionar TAB y ponermos las llaves, presionar ctl+espacio y seleccionamos de las opciones heroes
// import { heroes } from './data/heroes';

// otra forma que usaremos mucho en el curso es hacer referencia al archivo escribiendo heroes y presionar TAB, con esto nos importará el archivo automáticamente, lo único es que nos agrega el import con comillas dobles, nosotros por convenición trabajermos con comillas simples, en caso de no aparecer la opción para importar el archivo, debemos abrir horoes.js y volver a cerrarlo para que lo reconozca

export const getHeroeById = (id) => {
    return heroes.find((heroe) => {
        if (heroe.id === id) {
            return true;//devuelve el elemento
        }
        else {
            return false;
        }
    });
}

//vamos a optimizar el código anterior
// const getHeroeByidOptimizado = (id) => heroes.find( (heroe) => heroe.id === id );


// console.log(getHeroeByid(2));
// console.log(getHeroeByidOptimizado(2));

// obtener todos los heroes con owner = DC
//el find no sirve porque solo devuelve 1 solo elemento, para ello usaremos el filter
export const getHeroeByidOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );

// console.log(getHeroeByidOwner('DC'));