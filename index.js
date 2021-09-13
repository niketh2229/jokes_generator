const jokes = document.querySelector(".joke")
const jokeButton  = document.querySelector(".btn")
const generateNewJoke = () => 
{
    const setHeader = {
        headers:{
            Accept: "application/json"
        }
    }
    fetch('https://icanhazdadjoke.com/', setHeader)
    .then ((response) => {
        response.json()
    .then ((data) => {
        jokes.innerHTML = data.joke;
    })
    }).catch((error_fetch) => {
        error_fetch
    })
}
jokeButton.addEventListener('click',generateNewJoke)
generateNewJoke()