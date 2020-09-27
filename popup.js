const api_url = "http://api.forismatic.com/api/1.0/?&method=getQuote&format=json&lang=en"
const proxyurl = "https://cors-anywhere.herokuapp.com/";


//Function to generate new queate via fetch()
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

    //Function to write sata into our DOM elemtns
    setDataToDOM = (data) => {
        quate.innerHTML = data.quoteText;
        author.innerHTML = data.quoteAuthor;
    }
    //get starting quatoe
    getQuoteFromApi(setDataToDOM);
    
    // get quote on clcij
    button.addEventListener('click', function() {
        getQuoteFromApi(setDataToDOM);
    });

});