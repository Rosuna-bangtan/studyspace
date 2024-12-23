const quoteDisplay = document.getElementById('quote-display');
const fetchQuoteButton = document.getElementById('fetch-quote');

const fetchQuote = async () => {
    try {
        const response = await fetch('https://quotes-api-self.vercel.app/quote');
        const data = await response.json();
        quoteDisplay.textContent = `"${data.quote}" — ${data.author}`;
    } catch (error) {
        quoteDisplay.textContent = "Failed to fetch a quote.";
        console.error("Error fetching quote:", error);
    }
};
// Fetch a quote on page load
fetchQuote();

// Fetch a new quote when the button is clicked
fetchQuoteButton.addEventListener('click', fetchQuote); 


//Make the DIV element draggagle:
dragElement(document.getElementById("quote"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}