console.log('hi');
// variables y constantes
const nombre = 'Daniel';
const apellido = 'Mafla Bonet';

let dado = 6;
dado = 2;
// var ya no se usa.
// dentro de un if las variables y constantes son unicas.
if (true) {
    let dado = 3;
    console.log(dado);
}

console.log(nombre, apellido, dado)
