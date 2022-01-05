const apiKey = 'pWLllEX2Lp3jTPeNpL9UDV9w1I5sGdfl';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion.then(resp => resp.json())
        .then(({data}) => {
            const {url} = data.images.original;
            console.log(url);
            const img = document.createElement('img');
            img.src = url;
            document.body.append(img);
        }).catch(console.error)
