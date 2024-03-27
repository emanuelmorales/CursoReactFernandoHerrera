// Desestructuración
// Asignación Desestructurante

// definimos el objeto persona
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
}

// en caso de querer mostrar los datos del objeto lo debemos hacer de la siguiente manera
console.log( persona.nombre  ); 
console.log( persona.edad  ); 
console.log( persona.clave  ); 

/* 
Si observamos es muy tedioso estar escribiendo persona. cada vez que necesito acceder a una propiedad del objeto.
Sería interesante extraer de este objero solo lo que me interesa, para poder utilizar sin persona y allí es donde entra en juego la asignación desestructurante
Para iniciar:
1.definir const { nombre } = persona; (extrae lo que está dentro de las llaves del objeto indicado luego de = )
*/
const { nombre, edad, clave } = persona;
/*
Otras formas: no tiene importancia el órden de las propiedades y puede terminar en , y no da error. Por ej:
const { edad, nombre, clave, } = persona;
*/
console.log( nombre );
console.log( edad );
console.log( clave );

// otra forma asignandole otro nombre al a const, por lo general se utiliza la primera forma sin necesidad de renombrarlo
const { nombre:nombre2 } = persona;
console.log( { nombre2 } );


// otra implementación sería crear una función que devuelva los datos de la persona
const retornaPersona = ( usuario )=> {
    const { nombre, edad, clave } = usuario;
    console.log(nombre, edad, clave);
}
retornaPersona( persona );

// Algo muy usado es la desustructuración en el argumento de la función por ejemplo
const retornaPersona2 = ( {nombre, edad} )=> {
    console.log(nombre, edad, );
}
retornaPersona2( persona );

/*
Otra cosa importante que tiene la desestrucutración es que podemos asignar valores por defecto. Ej: el rango no viene en la persona, pero podemos definirle un rango pr defecto, ahora, si el rango está definido en el objeto, toma ese valor
*/
const retornaPersonaSinRango = ( {nombre, edad, rango = 'Capitan'} )=> {
    console.log(nombre, edad, rango );
}
retornaPersonaSinRango( persona );

/*
Crear una función común y corriente que solo retorna un objeto, si quiero extraer el nombreClave y los anios del avenger, somo así tbn la lat y lng, cómo lo hago?
*/

const retornaPersona3 = ( { clave, edad } )=> {
    // console.log(nombre, edad );
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 13.12315,
            lng: -12.2323
        }
    }
}
const {nombreClave, anios, latlng:{lat, lng}} = retornaPersona3( persona );
console.log( nombreClave, anios );
console.log( lat, lng );

//obtener la lat y lng se conoce como desestructuración anidada de objetos