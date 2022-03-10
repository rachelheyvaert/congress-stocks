const testData =[
    {
        "disclosure_year": 2021,
        "disclosure_date": "10/04/2021",
        "transaction_date": "2021-09-27",
        "owner": "joint",
        "ticker": "BP",
        "asset_description": "BP plc",
        "type": "purchase",
        "amount": "$1,001 - $15,000",
        "representative": "Hon. Virginia Foxx",
        "district": "NC05",
        "ptr_link": "https://disclosures-clerk.house.gov/public_disc/ptr-pdfs/2021/20019557.pdf",
        "cap_gains_over_200_usd": false
    },
    {
        "disclosure_year": 2021,
        "disclosure_date": "10/04/2021",
        "transaction_date": "2021-09-13",
        "owner": "joint",
        "ticker": "XOM",
        "asset_description": "Exxon Mobil Corporation",
        "type": "purchase",
        "amount": "$1,001 - $15,000",
        "representative": "Hon. Virginia Foxx",
        "district": "NC05",
        "ptr_link": "https://disclosures-clerk.house.gov/public_disc/ptr-pdfs/2021/20019557.pdf",
        "cap_gains_over_200_usd": false
    },
    {
        "disclosure_year": 2021,
        "disclosure_date": "10/04/2021",
        "transaction_date": "2021-09-10",
        "owner": "joint",
        "ticker": "ILPT",
        "asset_description": "Industrial Logistics Properties Trust - Common Shares of Beneficial Interest",
        "type": "purchase",
        "amount": "$15,001 - $50,000",
        "representative": "Hon. Virginia Foxx",
        "district": "NC05",
        "ptr_link": "https://disclosures-clerk.house.gov/public_disc/ptr-pdfs/2021/20019557.pdf",
        "cap_gains_over_200_usd": false
    }
    ]


//grabbing html elements in global scope
const fetchURL = "https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json"
const form = document.getElementById('stock-search-form')
const searchBtn = document.getElementById('searchBtn')
const congressContainer = document.getElementById('congress-container')
const ul = document.getElementById('stock-list')
let allData

document.addEventListener('DOMContentLoaded', ()=> {
handleInitialFetch()}) //want to store data so it doesn't all fetch upon event listener,possible?
const searchField = document.getElementById('searchField')
searchField.addEventListener("input", (e) => {
    // inside, we will need to achieve a few things:
    // 1. declare and assign the value of the event's target to a variable AKA whatever is typed in the search bar
    let value = e.target.value
console.log(filterData(value))
})

//fetching data
function handleInitialFetch(){
    fetch(fetchURL) 
    .then(response => response.json())
    .then(data => allData = data)
}   

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

function filterData(input){
    //find/filter to map through to compare it to data.rep
     return allData.filter(data => data.representative === input)
}
