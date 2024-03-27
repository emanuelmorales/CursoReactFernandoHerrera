const nombre = 'Emanuel';
const apellido = 'Morales';

const nombreCompleto = `Hola, mi nombre completo es 
${ nombre } 
${ apellido }
${ 1 + 1 }
`;

console.log(nombreCompleto);

function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log(`Este es el texto de la función: ${getSaludo('Emanuel Morales')}`);