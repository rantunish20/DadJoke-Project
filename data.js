const jokeUrl = 'https://icanhazdadjoke.com/';
const jokeBtn = document.getElementById("genJoke");

jokeBtn.addEventListener('click', function(event) {
    getjokes();
    event.preventDefault();
});

async function getjokes(){
    const response = await fetch(jokeUrl,{
        method: "GET",
        headers: {
            'Accept' : 'application/json'
        }
    })
    const data = await response.json();
    console.log(data); 
    document.getElementById("fjoke").innerHTML = data.joke
}





