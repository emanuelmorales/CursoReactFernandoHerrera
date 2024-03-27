// Variables y constantes
const nombre = 'Fernando';
const apellido = 'Herrera';

let valorDado = 5;
// si desea cambiar el valor de una variable, no es necesario escribir nuevamente let
valorDado = 4;

console.log(nombre, apellido, valorDado);// Fernando Herrera 4

// una característica es que al usar const y let, creamos variables de scope o variables en un ámbito en particular. Por ej:
if (true) {
    const nombre = 'Emanuel';
    // Este valorDado solo va a existir dentro de este ámbito o scope
    let valorDado = 6;
    console.log(nombre, valorDado);//Emanuel 6
}

console.log(valorDado);//4