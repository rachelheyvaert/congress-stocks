
//grabbing html elements global
const fetchURL = "https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json";
const searchField = document.getElementById('searchField');
const form = document.getElementById('stock-search-form');
const searchBtn = document.getElementById('search');
const congressContainer = document.getElementById('congress-container');
const ul = document.getElementById('stock-list');
let allData;

document.addEventListener('DOMContentLoaded', () => {
    handleInitialFetch();//fetches data to store for future searches
    handleUserInput();
})


//fetching data
function handleInitialFetch(){
    fetch(fetchURL) 
    .then(response => response.json())
    .then(data => {
        allData = data
        console.log(allData)}
    )} 

function handleUserInput(){
    searchField.addEventListener("input", (e) => {
        let value = e.target.value
        console.log("Filtered Data", filterData(value))
       
})
}

function filterData(input){
    //filter through to compare it to data.rep
    let info = allData.filter((data => data.representative === input))
    console.log(info)
    return renderMemberToDOM(info)
 }

     //filtering data ??
function renderMemberToDOM(data){
    data.forEach((data => createCard(data)))
    //for(const person of resul)
}

//creating format for filtered Congress member
function createCard(data){
    console.log("Create card", data)
    ul.innerHTML += `
    <p>Asset Description:  ${data.asset_description}</p>
    <p>Stock Symbol/Ticker: ${data.ticker}</p>
    <p>Amount: ${data.amount}</p>
    <p>Type:  ${data.type}</p>
    <p>Transaction Date: ${data.transaction_date}</p>
    <br>
    `
    ul.id = 'stock-cards'
    congressContainer.appendChild(ul);
}
