const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const twitterBtn = document.getElementById("twitter");
newQuoteBtn.addEventListener("click", NewQuote);

let apiQuotes = [];

//Show New Quote
function NewQuote(){
    // Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // Set author's name
    authorText.textContent = quote.author? quote.author: 'Unknown';
    // Check quote length to determine styling
    if(quote.text.length > 50){
        quoteText.classList.add("long-quote");
    } else{
        quoteText.classList.remove("long-quote");
    }
    quoteText.textContent = quote.text;
}

//Get Quotes from API
async function GetQuotes(){
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        NewQuote();
    } catch(error){
        // Catch Error here
    }
}

//On Load
GetQuotes();