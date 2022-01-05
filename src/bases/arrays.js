// const array = new Array(100);
const array = [];
array.push(1);
array.push(2);
array.push(3);
array.push(4);
// No se puede usar porque deja atado ambos arrays como si fuera uno solo
//let array2 = array;
//array2.push(5);
let array2 = [...array, 5]
// el map crea un nuevo array.
const array3 = array2.map(function multiplicador(x) {
    return x * 2;
});

console.log(array);
console.log(array2);
console.log(array3);