document.addEventListener("DOMContentLoaded", function(event) { 
  console.log('Hey')


const jokeUrl = 'https://icanhazdadjoke.com/';
const searchUrl = 'search?term=';
const jokeBtn = document.getElementById("genJoke");
const searchinput = document.getElementById("jokesD")
const searchQ = document.getElementById("jokesD").value;
const listres = document.getElementById("resultsLis")


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

searchinput.addEventListener('keypress', function(event){
    jokeQ();
    if (e.key === 13){
        event.preventDefault();
    }
    
})

function jokeQ(){
    const searchjoke = (jokeUrl + `search?term=${searchQ}`)
    fetch(searchjoke,{
        headers: {
            'Accept':'application/json'
        }
    })
    .then ((response) => {
        return response.json()
    })
    .then ((data) => {
        console.log(data.results)
        data.results.map(results => {
            const jokeList = document.createElement('li');
            jokeList.innerHTML =`${results.joke}`
            listres.appendChild(jokeList);
        }

        )
    })

    
}


});
