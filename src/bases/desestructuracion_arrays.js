const personajes = [
    'iron man',
    'capitan america',
    'black widow',
    'hulk'
]


const [, , p3] = personajes;

console.log(p3);


const returnArray = () => {
    return ['ABC', 123]
}

const [letras, numeros] = returnArray();

console.log(letras , numeros);

const getEstado = ( valor ) => {
    return [valor, () => {console.log('hola Mundo')}];
}

const arr = getEstado('kakaroto');
const [nombre, setNombre] = arr
console.log(nombre);
setNombre();
