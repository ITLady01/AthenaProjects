/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// The link to my project - 

/*** 
  I created the array of quote objects and name it `quotes`.
  Their are five arrays listed with various quotes array.
  Each object has been assigned an `quote` and `source` property.
  In addition, I added the `year` property to all the objects in the array. In addition ,the tags are included in the arrays.
  Then in the end I used console.log() to test the code and it worked. I tested this code in google chrome and it worked **/

let quotes = [
  {
    quote: ' Things change. And friends leave. Life doesn\'t stop for anybody. ',
    source: ' Stephen Chbosky ',
    year: 1970,
    citation: ' Good reads-https://www.goodreads.com/quotes ',
    tags: ' Inspirational ',
  },

  {
    quote: ' Be yourself,everyone else is already taken. ',
    source: ' Oscar Wilde ',
    year: 1942,
    citation: ' Good Reads-https://www.goodreads.com/quotes ',
    tags: ' Humor ',
  },

  {
    quote: ' Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe. ',
    source: ' Albert Einstein ',
    year: 1955,
    citation: ' Good reads-https://www.goodreads.com/quotes ',
    tags: ' Humor ',
  },

  {
    quote: ' The Way Get Started Is To Quit Talking And Begin Doing.',
    source: '-Walt Disney ',
    year: 2017,
    citation: ' Goal Cast-https://www.goalcast.com/2017/06/06/walt-disney-quotes-awaken-dreamer-in-you/ ',
    tags: ' Humor ',
  },

  {
    quote: ' You can have data without information, but you cannot have information without data,',
    source: '- Daniel Keys Moran',
    year: 2011,
    citation: 'Brainy Quote-https://www.brainyquote.com/quotes/daniel_keys_moran_230911',
    tags: ' Genius ',
  }

];

// This function will generate a random color in the quotes background
function randomRGB () {
  return Math.floor(Math.random() * 256)
}

// This function `getRandomQuote` stores and returns all my random quotes 

function getRandomQuote(quotes) { 
var randomQuotesNumber = Math.floor(Math.random() * quotes.length);
var randomQuote = quotes[randomQuotesNumber]
return randomQuote;
}
 
/***
I created the array of quote objects and name it `quotes`.
  Their are five arrays listed with various quotes array.
  Each object has been assigned an `quote` and `source` property.
  In addition, I added the `year` property to at least one object in the array.
  Then in the end I used console.log() to test the code and it worked. I tested this code in google chrome and it work pretty well**/

  //Now I have added the auto_refesh function,timer and timer1.
function auto_refresh()
{
  var timer = setInterval(printQuote,3000); //I increased the 3000 milliseconds delay
  var timer1 = clearInterval(timer);
}
function printQuote() {
  var randomQuote = getRandomQuote(quotes);
  var message = " ";
  var x = randomRGB();
  var y = randomRGB();
  var z = randomRGB();
  var rbgColor  = "rgb("+ x +","+ y +", "+ z +")";

  message += "<p class='quote'>" + randomQuote.quote + '</p>';
  message += "<p class='source'>" + randomQuote.source ;

//Added the If statement for citation, year and tags
if (randomQuote.citation) {
  message += "<span class='citation'>" + randomQuote.citation + "</span>";
}
if (randomQuote.year) { 
  message += "<span class='year'>" + randomQuote.year + "</span>";
}

if (randomQuote.tags) { 
message += "<span class='tags'>" + randomQuote.tags + "</span>";
}
  message += "</p>";

document.body.style.background = rbgColor;

document.getElementById('quote-box').innerHTML = message;
}
document.getElementById('loadQuote').addEventListener("click",printQuote,false);

printQuote();
clearInterval();
auto_refresh();
// The program is done 

