const persona = {
    nombre: 'daniel',
    edad: '25',
    clave: 'daniel25'
}

const {nombre, edad, clave} = persona;


// console.log(nombre);
// console.log(edad);
// console.log(clave);
//console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);


const personaAtributos = ( {nombre, edad, clave, rango = 'programador'} ) => {
    
   // console.log(nombre, edad, clave, rango);
   return {
       nombreClave: clave,
       anios: edad,
       latLng: {
           lat: '14.2323',
           lng: '15.6454'
       }
   }
}

const personaUsuario = personaAtributos(persona);

const {nombreClave, anios, latLng: {lat, lng}} = personaUsuario
console.log('datos: '+ nombreClave, anios);
console.log(lat, lng)