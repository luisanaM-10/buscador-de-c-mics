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