const persona = {
    nombre: 'sebastian',
    apelllido: 'mafla',
    edad: 19,
    direccion: {
        ciudad: 'cali',
        zip: 72001,
        lat: 14.32332,
        lng: 34.5455
    }
}
 console.table(persona);

 // de esta forma persona y persona2 quedan atadas a una sola constante, 
 // para hacerlo independiente se debe crear de nuevo toda la estructura del objeto.
//  const persona2 = persona;
//  persona2.nombre = 'daniel'
 
//  console.log(persona);
// console.log(persona2);

const persona2 = {...persona}
persona2.nombre = 'daniel'

console.log(persona);
console.log(persona2);