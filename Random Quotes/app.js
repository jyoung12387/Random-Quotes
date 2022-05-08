// data
data = [
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall. ",
    source: "Nelson Mandela",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    source: "Walt Disney",
  },
  {
    quote:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma, which is living with the results of other people's thinking.",
    source: "Steve Jobs",
  },
  {
    quote:
      "If life were predictable it would cease to be life, and be without flavor.",
    source: "Eleanor Roosevelt",
  },
  {
    quote:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    source: "Oprah Winfrey",
  },
  {
    quote:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. ",
    source: "James Cameron",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    source: "John Lennon",
  },
  {
    quote: "When you reach the end of your rope, tie a knot in it and hang on.",
    source: "Franklin D. Roosevelt",
  },
  {
    quote:
      "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    source: "Benjamin Franklin",
  },
  {
    quote: "Life is really simple, but we insist on making it complicated.",
    source: "Confucius",
  },
  {
    quote:
      "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    source: "Dr. Seuss",
  },
  {
    quote:
      "Many of life's failures are people who did not realize how close they were to success when they gave up. ",
    source: "Thomas A. Edison",
  },
  {
    quote: "The secret of success is to do the common thing uncommonly well.",
    source: "John D. Rockefeller Jr.",
  },
  {
    quote:
      "Success usually comes to those who are too busy to be looking for it.",
    source: "Henry David Thoreau",
  },
  {
    quote:
      "Things work out best for those who make the best of how things work out.",
    source: "John Wooden",
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    source: "Wayne Gretzky",
  },
  {
    quote: "Whether you think you can or you think you can't, you're right.",
    source: "Henry Ford",
  },
  {
    quote:
      "The question isn't who is going to let me; it's who is going to stop me.",
    source: "Ayn Rand",
  },
  {
    quote: "Believe you can and you're halfway there.",
    source: "Theodore Roosevelt",
  },
  {
    quote: "An unexamined life is not worth living.",
    source: "Socrates",
  },
];

// dom elements
const quote = document.getElementById("quote-body-element");
const source = document.getElementById("quote-source-element");
const newQuoteBtn = document.querySelector(".next-quote-btn");

// global variables
let dataIndex = 0;
let timer;
let timerValue = 8000;

// click event listener
newQuoteBtn.addEventListener("click", function () {
  updateContent();
  clearInterval(timer);
  timer = setInterval(updateContent, timerValue);
});

// gets random index for the data
function getRandomIndex() {
  // get a new random index. if it's the same as the previous index
  // run the function again.
  let newIndex = Math.floor(Math.random() * data.length);
  if (newIndex === dataIndex) {
    getRandomIndex();
    return;
  }
  dataIndex = newIndex;
}

// function to update the page with a new random quote
function updateContent() {
  getRandomIndex();
  quote.innerText = data[dataIndex].quote;
  source.innerText = data[dataIndex].source;
}

// runs when page is first loaded
window.addEventListener("DOMContentLoaded", function () {
  updateContent();
  timer = setInterval(updateContent, timerValue);
});
