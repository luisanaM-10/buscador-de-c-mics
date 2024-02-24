const $ = (selector) => document.getElementById(selector);

const urlBase = `http://gateway.marvel.com/v1/public/`;
let ts = 1;
const publicKey = "47916284c7b873bb2f64315159b80f16";
const hash = "b0f53920e2c6dc1bef23034016fa3432";
let offset = 0;

// Función que llama a la API y retorna solo DATA
const fetchURL = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    return data
}

// Función para obtener los comics
const getMarvelComics = async() => {
    const url = `${urlBase}comics?ts=${ts}&apikey=${publicKey}&hash=${hash}&offset=${offset}`;
    const data = await fetchURL(url)
    const results = data.data.results
    return results
}
getMarvelComics()

// Función que pinta las Cards
const printComic = async() => {
    const comics = await getMarvelComics();
    $('container-section').innerHTML = ``;
    for (let comic of comics) {
        $('container-section').innerHTML += `
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


// Función para obtener los personajes
const getMarvelCharacters = async() => {
    const url = `${urlBase}characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&offset=${offset}`;
    const data = await fetchURL(url)
    const results = data.data.results
    return results
}
getMarvelCharacters()

// Función que pinta las Cards
const printCharacters = async() => {
    const characters = await getMarvelCharacters();
    $('container-section').innerHTML = ``;
    for (let character of characters) {
        $('container-section').innerHTML += `
        <div class="cards">
                <div>
                    <div>
                        <img src="${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}" alt="" class="img-cards"
                    </div>
                </div>
                <div>
                    <h4>Nombre:</h4>
                    <p>${character.name}</p>
                </div>
        </div>
        `    
    }
}
printCharacters()


// PAGINADOR 
$('prev-page').onclick = function (e) {
    offset -= 20;
};
  
$('new-page').onclick = function (e) {
    offset += 20;
};
