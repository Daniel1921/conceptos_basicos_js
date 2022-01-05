
 const saludar = function(nombre) {
     return `hi, my name is ${nombre}`
 }
 const saludar2 = (nombre) => {
     return `hi, my name is ${nombre}`
 }

const saludar3 = (nombre) => `hi, my name is ${nombre}`;

const saludar4 = () => `hi, for all`;

// saludar = 30;
console.log(saludar('Daniel'))
console.log(saludar2('Sebas'))
console.log(saludar3('Luis'))
console.log(saludar4())

// console.log(saludar2);

const getUser = () => 
    ({
        uid: 'ABC123',
        username: 'daniel1921mb'
    }) 

const user = getUser();

console.log(user);

const getUsuarioActivo = (nombre) => 
    ({
        uid: 'ABC454',
        username: nombre
    }
) 

const usuarioActivo = getUsuarioActivo('bits');

console.log(usuarioActivo);