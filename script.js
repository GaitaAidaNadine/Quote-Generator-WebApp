const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const twitterBtn = document.getElementById("twitter");

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

//Tweet the quote
function TweetQuote(){
    let tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(tweetUrl, '_blank');
}

//Add event listeners to buttons
newQuoteBtn.addEventListener("click", NewQuote);
twitterBtn.addEventListener("click", TweetQuote);

//On Load
GetQuotes();