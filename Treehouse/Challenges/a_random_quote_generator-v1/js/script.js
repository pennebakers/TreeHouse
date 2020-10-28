
var quotes = [
  {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      source: "Nelson Mandela"
  },
  {
      quote: "The way to get started is to quit talking and begin doing.",
      source: "Walt Disney"
  },
  {
      quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
      source: "Steve Jobs"
  },
  {
      quote: "If life were predictable it would cease to be life, and be without flavor.",
      source: "Eleanor Roosevelt"
  },
  {
      quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
      source: "Oprah Winfrey"
  }
];


var colors = [
  {
      background: "#ff2e63", //pink
      button: "#252a34"
  },
  {
      background: "#00adb5", //teal
      button: "#393e46"
  },
  {
      background: "#f38181", //salmon
      button: "#625772"
  },
  {
      background: "#6639a6", //purple
      button: "#521262"
  },
  {
      background: "#3f72af", //blue
      button: "#112d4e"
  },
  {
      background: "#f95959", //orange
      button: "#455d7a"
  },
  {
      background: "#a3de83", //lt green
      button: "#2eb872"
  },
  {
      background: "#118df0", //bright blue
      button: "#0e2f56"
  },
  {
      background: "#ff5722", //bright orange
      button: "#393e46"
  },
  {
      background: "#3fc1c9", //aqua
      button: "#fc5185"
  }
];


let timer;


function getRandomQuote() {
  let randomQuote = Math.floor(Math.random() * quotes.length);

  return quotes[randomQuote];
}

function getRandomColor() {
  let randomColor = Math.floor(Math.random() * colors.length);

  return colors[randomColor];
}

function startTimer() {
  timer = setInterval(printQuote, 1000);
}

function clearTimer() {
  clearInterval(timer);
}

function printQuote() {
  let currentQuote = getRandomQuote();
  let currentColor = getRandomColor();
  let html = "<p class='quote'> " + currentQuote.quote + "</p>";
  html += "<p class='source'> " + currentQuote.source;
  
  document.getElementById("quote-box").innerHTML = html;
  document.body.style.background = currentColor.background;
  document.getElementById("loadQuote").style.background = currentColor.button;

  clearTimer();
  startTimer();
}


printQuote();


document.getElementById('loadQuote').addEventListener("click", printQuote, false);