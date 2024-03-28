const apiKey = 'hdgeja6vBangw04w3kPCzW6BahbpSRta';

// Esto devuelve un apromesa
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// como es una promesa puedo usar then
// peticion.then( resp => {
//     resp.json().then( data => {
//         console.log(data);
//     })
// })
// .catch( console.warn );

// esto mismo lo podemos obtener con código más limpio usando promesas en cadena
peticion
    .then( resp => resp.json() )//el resultado de esta promesa pasa al siguiente then

    // usar la desestructuración para obtener la data
    .then( ( { data } ) => {
    
       // usamos la desestructuracipon para pobetene la url
       const { url } = data.images.original;

       const img = document.createElement('img');
       img.src = url;

       document.body.append( img );
    })
    .catch( console.warn );

