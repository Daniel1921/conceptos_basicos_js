console.log('hi');

const nombre = 'daniel';
const apellido = 'mafla bonet';
const nombreCompleto = `
 ${nombre}
 ${apellido} 
 ${1+1}`;

console.log(nombreCompleto);

function getSaludo( nombre ) {
    return 'Hello World! ' + nombre
}

console.log(`this is a Hi form: ${getSaludo(nombre)}`);