// Get quote from API
async function getQuote() {
    const API = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
    try {
        const response = await fetch(API);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error getting quote", error);
    }
}

// On load:
getQuote();