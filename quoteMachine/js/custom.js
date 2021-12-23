var quote= "";
var author= "";

var preURI = 'https://twitter.com/intent/tweet?text=';


// initilizing with the first quote
window.onload = refreshQuote;

// with each button click, a new quote is called
document.getElementById("shuffle").onclick = refreshQuote;

document.getElementById("twitter-button").onclick = tweetIt;



////////////////////// functionalites //////////////////////
// get the quotes as jason object from API, then use to populate the page
function refreshQuote () {


    // get quote from API
    getQuoteFromAPI();

    // set the colors of the overlay and the box
    setColors ();

    // change the inner html of the quote paragraph and the author parapgrap
    writeQuote();


}

// receive the quote from the API
function getQuoteFromAPI () {

    $.getJSON("https://talaikis.com/api/quotes/random/", function(a) {
        quote = a.quote;
        author = a.author;

        document.getElementById("quote").innerHTML = quote;
        document.getElementById("author").innerHTML = " - " + author;

    });

}

// set the colors of the overlay and the box to random light colors
function setColors () {
    document.body.style.backgroundColor = getRandomColor();
    document.getElementById("quote-box").style.backgroundColor = "cornsilk";
}

// get random light color
function getRandomColor () {
  var letters = 'BCDEF'.split('');
                var color = '#';
                for (var i = 0; i < 6; i++ ) {
                    color += letters[Math.floor(Math.random() * letters.length)];
                }
                return color;
}

// populate the quote and author with parameters values
function writeQuote () {
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = " - " + author;
};

// twitter button
function tweetIt () {

    withAuthor = quote + " -" + author;
    withoutAuthor = quote;

    if (withAuthor.length > 140 ) {
        if (confirm("You can't have a tweet this length, are you sure you want to continue?") ) {
            window.open(preURI + withAuthor, "_blank");
        }
        else {
                if (withoutAuthor.length <= 140) {
                    if (confirm("It's possible to tweet it without including the author name, do you want to do that?")) {
                        window.open(preURI + withoutAuthor, "_blank");
                    }
                    else {

                    }
                }
        }
    }
    else {
        window.open(preURI + withAuthor, "_blank");
    }
}
