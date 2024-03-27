// Arreglo en JS

/*
si ejecutamos el código, en la consola podremos observar que un arreglo se identifica con []
*/

// No es aconsejable crear un arreglo de esta forma, salvo que querramos crear un array con un tamaño prefedinido al iniciar
const arregloFijo = new Array( 100 );//cada una de sus posiciones están vacias

//arregloFijo.push(1);//esto indica que tenemos 100 posiciones vacías y luego tenemos una adicional

// Forma convencional de crear un arreglo
const arreglo = [];

// Forma convencional de crear un arreglo
const arregloInicializado = [1,2,3,4];

// no es aconsejable utilizar el push, ya que este modifica el objeto principal, cuando querramos agregar elementos a un array lo haremos utilizando el operador de propagación ...
arreglo.push(1);
arreglo.push(2);
arreglo.push(3);
arreglo.push(4);

console.log( arreglo );

let arreglo2 =  arregloInicializado;//recuerde que esto hace una referencia al espacio en memoria de la variable

// si hacemos lo siguiente, afecta al objeto original
arreglo2.push(5);

// como podremos ver en los log, el elemento 5 se agrega en los 2 arrays
console.log( { arregloInicializado } );
console.log( { arreglo2 } );

// para poder agregar clonar el arregloInicializado y expandir el valor 5 lo haremos de la siguiente manera, usando el operador de propagación
let arreglo3 = [ ...arregloInicializado, 6 ];
console.log( { arreglo3 } );

// aquí usaremos el método map de arreglos.
// cada vez que creemos un arreglo, estos tienen implícito el método map en su prototype. Cuando querramos saber algo en particular, debemos consultar la página https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// Esto nos dice que map() nos crea un nuevo arreglo que es el resultado de ejecutar una función (esta función es conocida como callback), por ejemplo, obtener cada valor del arreglo arregloInicializado multiplicado por 2.
// podemos notar, al momento de imprimir, que se está creando el nuevo arreglo arregloMultiplicado y no se modifican los valores de arregloInicializado
const arregloMultiplicado = arregloInicializado.map(function (x){
    return x * 2;
})

console.log( { arregloMultiplicado } );

