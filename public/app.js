var NewQuote = function( quote, author ) {
  this.quote = quote;
  this.author = author;
}

var jeff = new NewQuote( "I think this is goin to work: ", "Jeff" )

var steve = new NewQuote( "Well maybe it will: ", "Steve" )

var quoteArray = [ jeff, steve ]

var cl = function( stuff ) {
  console.log( stuff );
}

window.onload = function() {
  main();

}

function main() {

  var form = document.getElementById( "quote-form" );

  form.onkeyup = function() {
    constantClick()
  }

  form.onsubmit = function( event ) {
    event.preventDefault();
    handleClick()
  }
  var quoteArray = [ jeff, steve ];
  var quoteList = document.getElementById('quote-list');


  for( var i = 0; i < quoteArray.length; i++ ){

    var newQuote = document.createElement('li');
    newQuote.innerText = quoteArray[i].quote;

    var cite = document.createElement('cite');
    cite.innerText = quoteArray[i].author;

    newQuote.appendChild(cite);
    quoteList.appendChild(newQuote);
    newQuote.onclick = deleteQuote;
  } 
}

function deleteLast( event ) {
  var userInput = ""
  appendQuote( userInput );
}


function constantClick( event ) {

  var userQuoteInput = document.getElementById( "quote-text-input" );

  var userAuthorInput = document.getElementById( "author-text-input" );

  var userInput = userQuoteInput.value + ": " + userAuthorInput.value;

  constantQuote( userInput );

}

function constantQuote( userInput ) {

    var li = document.createElement( "li" );
    li.innerText = userInput;

    var ul = document.getElementById( "quote-list" )
    ul.appendChild( li )

    appendQuote( userInput );

    li.onclick = deleteQuote;
}

function handleClick( event ) {

  var userQuoteInput = document.getElementById( "quote-text-input" );

  var userAuthorInput = document.getElementById( "author-text-input" );

  var userInput = userQuoteInput.value + ": " + userAuthorInput.value;

  appendQuote( userInput );

  userQuoteInput.value = '';
  userAuthorInput.value = '';  
}

function appendQuote( userInput ) {
  var li = document.createElement( "li" );
  li.innerText = userInput;

  var ul = document.getElementById( "quote-list" )
  ul.appendChild( li )

  li.onclick = deleteQuote;
}

function deleteQuote( event ) {
  cl( event )
  event.currentTarget.style.display = "none"
}

























