//your JS code here. If required.
 document.getElementById('quoteInput').value.addEventListener('keyDown',getQuote);

function getQuote() {
       
        fetch("http://api.quotable.io/random")
          .then(response => response.json())
          .then(data => {
            let div = document.querySelector('.quote-display');
            div.innerText = 'data';
          })
          .catch(error => console.error(error));
      }
