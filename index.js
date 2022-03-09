//grabbing html elements in global scope
const fetchURL = "https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json"
const form = document.getElementById('stock-search-form')
const searchBtn = document.getElementById('searchBtn')
const congressContainer = document.getElementById('congress-container')
const ul = document.getElementById('stock-list')


document.addEventListener('DOMContentLoaded', ()=> {
handleInitialFetch() //want to store data so it doesn't all fetch upon event listener,possible?
const searchField = document.getElementById('searchField')
searchField.onkeyup = ()=>{
    console.log(searchField)
}  
})

//submit button-filters fetched data to return only the matching input by name
submitBtn.addEventListener('click', ()=>{
   
}
);

//fetching data
function handleInitialFetch(){
fetch(`fetchURL?=${}`) 
.then(response => response.json())
.then(data => console.log(data))}

//creating format for filtered Congress member
function createCard(data){
ul.innerHTML = `
<h1>${data.representative}</h1>
<h3>Asset Description: </h3>
<p>${data.asset_description}</p>
<h3>Stock Symbol/Ticker: </h3>
<p>${data.ticker}</p>
<h3>Amount: </h3>
<p>${data.amount}</p>
<h3>Transaction Date: </h3>
<p>${data.transaction_date}</p>
`}

//filtering data process
function renderMemberToDOM(data){
    let info = data.map((stock)=> createCard(stock)).join('');
    congressContainer.innerHTML = info
}
//Unsure how to incorporate user input text to connect to submit button
searchField.addEventListener('submit', handleSearch)

//function to handle the search
function handleSearch(e){
    fetch(`fetchURL${data.name}`)
const value = e.target.value.toLowerCase();
}




// // const repNameH2 = document.createElement('h2')
// // const ownerP = document.createElement('p')
// // const assetDescription = document.createElement('p')
// // const amountP = document.createElement('p')
// // ul.innerHTML = ''
// // repNameH2.textContent = person.representative
// // ownerP.textContent = person.owner
// // assetDescription.textContent = person.asset_description
// // amountP.textContent = person.amount
// // ul.append(repNameH2, assetDescription, amountP, ownerP)
// }





//display Member