let containerSection = document.getElementById('container-section'); 

const urlBase = `http://gateway.marvel.com/v1/public/`;
let ts = 1;
const publicKey = "47916284c7b873bb2f64315159b80f16";
const hash = "b0f53920e2c6dc1bef23034016fa3432";


// Función que llama a la API y retorna solo DATA
const fetchURL = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    return data
}


// función de obtener los comics
const getMarvelComics = async() => {
    const url = `${urlBase}comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    const data = await fetchURL(url)
    const results = data.data.results
    return results
}
getMarvelComics()

// pintar las Cards
const printComic = async() => {
    const comics = await getMarvelComics();
    containerSection.innerHTML = ``;
    for (let comic of comics) {
        containerSection.innerHTML += `
        <div class="cards">
                <div>
                    <div>
                        <img src="${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}" alt="" class="img-cards"
                    </div>
                </div>
                <div>
                    <h4>Nombre:</h4>
                    <p>${comic.title}</p>
                </div>
        </div>
        `    
    }
}
printComic()


