// const getImagenPromesa = () => {
//     const promesa = new Promise((resolve, reject) => {
//         resolve('urldeimagen.com')
//     })

//     return promesa;
// }

const getImagen = async () => {
    try {
        const apiKey = 'pWLllEX2Lp3jTPeNpL9UDV9w1I5sGdfl';
    const peticion = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await peticion.json();
    console.log(data);
    const {url} =  data.images.original;
    const img = document.createElement('img');
            img.src = url;
            document.body.append(img);
    } catch (error) {
        
    }
    
}

// getImagenPromesa().then(console.log)

getImagen().then()


