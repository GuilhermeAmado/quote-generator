// Get quote from API
async function getQuote() {
    const PROXY = "https://cors-anywhere.herokuapp.com/"
    const API = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
    try {
        const response = await fetch(PROXY + API);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        getQuote();
        console.log("Error getting quote", error);
    }
}

// On load:
getQuote();