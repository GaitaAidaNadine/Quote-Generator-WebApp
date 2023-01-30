let apiQuotes = [];

//Show New Quote
function newQuote(){
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
}

//Get Quotes from API
async function GetQuotes(){
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch(error){
        // Catch Error here
    }
}

//On Load
GetQuotes();