const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterButton = document.getElementById("twitter");
const newQuoteButton = document.getElementById("new-quote");
const loader = document.getElementById("loader");

// Show loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide loading
function complete() {
    if (!loader.hidden) {
        quoteContainer.hidden = false;
        loader.hidden = true;
    }
}

// Get quote from API
async function getQuote() {
    loading();
    // const PROXY = "https://cors-anywhere.herokuapp.com/"
    const API = "https://favqs.com/api/qotd";
    try {
        const response = await fetch(API);
        const data = await response.json();
        console.log(data.quote.author)
        console.log(data.quote.body)

        // If Author is blank add "Unknown"
        if (!data.quote.author) {
            authorText.innerText = "Unknown"
        } else {
            authorText.innerText = data.quote.author;
        }

        // Reduce font size for long quotes
        if (data.quote.body.length > 120) {
            quoteText.classList.add("long-quote");
        } else {
            quoteText.classList.remove("long-quote");
        }
        quoteText.innerText = data.quote.body;

        // Stop loader and show quote
        complete();

    } catch (error) {
        getQuote();
        console.log("Error getting quote", error);
    }
}

// Tweet quote
function tweetQuote() {
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const TWITTER = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(TWITTER, "_blank");
}

// Event listeners
newQuoteButton.addEventListener("click", getQuote);
twitterButton.addEventListener("click", tweetQuote);

// On load:
getQuote();