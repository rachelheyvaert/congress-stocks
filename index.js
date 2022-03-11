
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
        // if (value && value.trim().length > 0){
        // value = value.trim().toLowerCase()
        // } else {}
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
    <h3>${data.representative}</h3>
    <h4>Asset Description: </h4>
    <p>${data.asset_description}</p>
    <h4>Stock Symbol/Ticker: </h4>
    <p>${data.ticker}</p>
    <h4>Amount: </h4>
    <p>${data.amount}</p>
    <h4>Transaction Date: </h4>
    <p>${data.transaction_date}</p>
    `
    congressContainer.append(ul);
}
