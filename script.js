let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

// fetch('https://dummyjson.com/quotes/1')
// .then(res => res.json())
// .then(console.log);


const url = "https://dummyjson.com/quotes/random";



function getQuote(){
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            // Check if data contains the quote information
           console.log(data);
           quote.innerText = data.quote;
           author.innerText = `-${data.author}`;
        });
}
btn.addEventListener("click",getQuote);
getQuote();

// async function getQuote(url1){
//     // const response = await fetch(url1);
//     var data = await response.json();
//     console.log(data);
// }

// getQuote(url);