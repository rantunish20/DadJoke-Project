const jokeUrl = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=london';

async function getjokes(){
    const response = await fetch(jokeUrl,{
        headers: {
            'Content-Type': 'application/json'
        }
    })
    await response.json();
    console.log(this.responseText);
}


getjokes();