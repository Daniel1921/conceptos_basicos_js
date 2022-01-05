import { getHeroeById } from "../bases/imports_exports";



// const promesa = new Promise(( resolve, reject ) => {
//     setTimeout(() => {
        
//         const heroe = getHeroeById(2);
//         //console.log('2 segundos despues se ejecuta este codigo', heroe)

//         resolve(heroe);
//        // reject('No se encontro ningun heroe');
//     }, 2000);
// });

// promesa.then((heroe) => console.log(heroe))
//         .catch((error) => console.error(error));


const getHeroesByIdAsync = (id) => {

    const promesa = new Promise(( resolve, reject ) => {
        setTimeout(() => {
            
            const heroe = getHeroeById(id);
            //console.log('2 segundos despues se ejecuta este codigo', heroe)
            if(heroe) {
                resolve(heroe);
            } else {
                reject('No se encontro ningun heroe');
            }
                       
        }, 2000);
    });

   return promesa;     
}


getHeroesByIdAsync(4).then( console.log ).catch(console.error);