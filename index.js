//adds text to card
document.addEventListener("DOMContentLoaded", function() {
    const textbox = document.getElementById('textbox');
    const card = document.getElementById('card');

    textbox.addEventListener('input', function(event) {
        card.innerText = textbox.value;
        card.style.fontFamily = 'Fantasy';
    });

    textbox.addEventListener('keydown', function(event) {
        if (event.key === 13) {
            card.innerText += '\n'; 
        }
    });
});
//adds stickers
document.addEventListener("DOMContentLoaded", function() {
  const card = document.getElementById("card");
  const emojis = document.querySelectorAll('.emojis li');
  let selectedEmoji = emojis[0].textContent; 

  emojis.forEach(function(emoji) {
    emoji.addEventListener("click", function(event) {
      selectedEmoji = event.target.textContent;
    });
  });

  card.addEventListener("click", function(event) {
    displayEmoji(selectedEmoji, event.clientX, event.clientY);
  });
  

  function displayEmoji(emoji, offsetX, offsetY) {
    const emojiElement = document.createElement("span");
    emojiElement.textContent = emoji; 
    emojiElement.classList.add("emoji");
    emojiElement.style.position = "absolute";
    emojiElement.style.left = offsetX -100 + "px"; 
    emojiElement.style.top = offsetY -50 + "px"; 
    emojiElement.style.fontSize = "2em"; 
    card.appendChild(emojiElement); 
    
  }
});

   
//adds theme to card depending on which is clicked
const theme = document.getElementById('theme');
    theme.addEventListener("click", function(event) {
        if (event.target.id === "hearts") {
            card.style.background = "red";
        } else if (event.target.id === "dogs") {
            card.style.background = "blue";
        } else if (event.target.id === "clouds") {
            card.style.background = "white";
        }
    });
   
//clear button removes all text
function clear() {
  const textbox = document.getElementById('textbox');
  const card = document.getElementById('card');
  textbox.value="";
  card.innerText="";
}
const clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", clear);

//clear button removes stickers

function clearStickers() {
  const card = document.getElementById("card");
  const stickers = card.querySelectorAll('.emoji');
  stickers.forEach(function(sticker) {
    sticker.remove();
  });
}

const clearStickerButton = document.getElementById("clearStickerButton");
clearStickerButton.addEventListener("click", clearStickers);

//print
  function PrintElem(elem) {
    var mywindow = window.open('', 'PRINT', 'height=400,width=600');

    mywindow.document.write('<html><head><title>' + document.title  + '</title>');
    mywindow.document.write('</head><body >');
    mywindow.document.write('<style>body{font-family: Fantasy;}</style>');
    mywindow.document.write('<style>body{background-color:' + card.style.background + ';}</style>');
    mywindow.document.write(document.getElementById(elem).innerHTML);
    mywindow.document.write('</body></html>');

    mywindow.document.close(); 
    mywindow.focus(); 

    mywindow.print();
    mywindow.close();

    return true;
}
