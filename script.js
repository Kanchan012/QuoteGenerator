const themeToggle = document.getElementById('toggle-theme');
themeToggle.onchange = () => {
    document.body.classList.toggle("dark");
};
 
//quotes
let selectedCategory = "success";
let index = 0;

function getCurrentQuotes() {
    return quotes[selectedCategory];  
}

function showQuotes() {
    const list = getCurrentQuotes();

    document.getElementById("quote-text").textContent = "“" + list[index].text + "”";
    document.getElementById("quote-author").textContent = "- " + list[index].author;
    document.getElementById("quote-count").textContent = `# ${index + 1} of ${list.length}`;
}

showQuotes();


document.getElementById("category").onchange = function() {
    selectedCategory = this.value;
    index = 0;
    showQuotes();
};


document.getElementById("previous").onclick = () => {
    const list = getCurrentQuotes();
    index = (index - 1 + list.length) % list.length;
    showQuotes();
};


document.getElementById("random").onclick = () => {
    const list = getCurrentQuotes();
    index = Math.floor(Math.random() * list.length);
    showQuotes();
};


document.getElementById("next").onclick = () => {
    const list = getCurrentQuotes();
    index = (index + 1) % list.length;
    showQuotes();
};

let currentFontSize = 20;
const minFontSize = 14;
const maxFontSize = 32;

const quoteText = document.getElementById("quote-text");

document.getElementById("font-large").onclick = () => {
  if (currentFontSize < maxFontSize) {
    currentFontSize += 2;
  }
  quoteText.style.fontSize = currentFontSize + "px";
};

document.getElementById("font-normal").onclick = () => {
  currentFontSize = 18;
  quoteText.style.fontSize = currentFontSize + "px";
};

document.getElementById("font-small").onclick = () => {
  if (currentFontSize > minFontSize) {
    currentFontSize -= 2;
  }
  quoteText.style.fontSize = currentFontSize + "px";
};





