document.addEventListener("DOMContentLoaded", function () {

    const showRandomQuote = [
        {text:"You only live once, but if you do it right, once is enough.", category:"Motivation"},
        {text:"It is better to be hated for what you are than to be loved for what you are not.", category:"Inspiration"},
        {text:"Without music, life would be a mistake.", category:"Happiness"},
        {text:"If you tell the truth, you don't have to remember anything.", category:"Wellness"},
    ]

    const newQuotes = document.getElementById("newQuote");

    newQuotes.addEventListener("click", () => {
        const createAddQuoteForm= document.forms["add-quotes"]
        const p = document.createElement("p");
        p.textContent = showRandomQuote

        p.appendChild

    })


})