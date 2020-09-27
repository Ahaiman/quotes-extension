const api_url = "http://api.forismatic.com/api/1.0/?&method=getQuote&format=json&lang=en"
const proxyurl = "https://cors-anywhere.herokuapp.com/";

getQuoteFromApi = (callback) => {
    fetch(proxyurl + api_url)
        .then(repsonse => repsonse.json())
        .then(data => callback(data))
        .catch(err => console.log(err))
}

document.addEventListener('DOMContentLoaded', function(){
    let quate = document.getElementById('quote');
    let author = document.getElementById('author');
    let button = document.getElementById('generate');

    setDataToDOM = (data) => {
        quate.innerHTML = data.quoteText;
        author.innerHTML = data.quoteAuthor;
    }

    //Get a starting quote
    getQuoteFromApi(setDataToDOM);
    
    button.addEventListener('click', function() {
        getQuoteFromApi(setDataToDOM);
    });

});