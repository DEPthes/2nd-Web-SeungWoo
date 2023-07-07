const quotes = [
    {
        quote: "The way to get started is to quit talking and begin",
        author: "Walt Disney",
    },
    {
        quote: "그냥",
        author: "저냥",
    },
    {
        quote:"아무",
        author: "말이나,
    },
    {
        quote:"이렇게",
        author: "적으면",
    },
    {
        quote:"뭔가",
        author: "조금",
    },
    {
        quote:"있어",
        author: "보인다",
    },
    {
        quote:"이것이",
        author: "진정한",
    },
    {
        quote:"명언",
        author: "이다",
    },
    {
        quote:"저자",
        author: "정승우",
    },
    {
        quote:"자고싶다.",
        author: "졸린 정승우",
    }
];

const quote = document.querySelector("#quote span:first-child"); 
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
