/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

let quotes = [
  {
    quote: 'Things change. And friends leave. Life doesn\'t stop for anybody.',
    source: 'Stephen Chbosky',
    year: 1970,
    citation: 'Good reads-https://www.goodreads.com/quotes'
  },

  {
    quote: 'Be yourself, everyone else is already taken.',
    source: 'Oscar Wilde',
    year: 1942,
    citation: 'Good Reads-https://www.goodreads.com/quotes'
  },

  {
    quote: 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
    source: 'Albert Einstein',
    year: 1955,
    citation: 'Good reads-https://www.goodreads.com/quotes'
  },

  {
    quote: 'The Way Get Started Is To Quit Talking And Begin Doing.',
    source: 'Walt Disney',
    year: 1963,
    citation: 'Goal Cast-https://www.goalcast.com/2017/06/06/walt-disney-quotes-awaken-dreamer-in-you/'
  },

  {
    quote: 'You can have data without information, but you cannot have information without data,',
    source: 'Daniel Keys Moran',
    year: 2001,
    citation: 'Brainy Quote-https://www.brainyquote.com/quotes/daniel_keys_moran_230911'
  }

];
 

/***console.log(quotes.length [5]);
console.log(quotes[quotes.length - 1]);
quotes.push('Go');
quotes.log(quotes.join());

/***
Create the `getRandomQuote` function
In addition, added the random number to `return` a random quote object 
***/

function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}
//Use this code to test the console.log(getRandomQuote());

/**I created the `printQuote` function. 
   Created the `getRandomQuote` function and assign it to a variable.
   There is a variable for the HTML string and  it has been set to an empty string.
   ***/
function printQuote() {
  var randomquotes = getRandomQuote();
  var message = '';
  message += "<p class='quote'> " + randomquotes.quote + " </p>";
  message += "<p class='source'>" + randomquotes.source;
  console.log(Object.keys(randomquotes));
  if ('citation' in Object.keys(randomquotes) ) {
    console.log("jjjj");
  }
  if (typeof randomquotes.citation != 'undefined') {
    message += '<span class="citation">' + randomquotes.citation + ' </span>';
  }

  if (typeof randomquotes.citation != 'undefined') {
    message += "<span class='year'>" + randomquotes.year + " </span>";
  }
  message += '</p>';
  document.getElementById('quote-box').innerHTML = message;

}

newFunction();


/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


function newFunction() {
  printQuote();
}
