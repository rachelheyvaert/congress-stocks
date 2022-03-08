//grabbing html elements in global scope
const fetchURL = "https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json"
const senateURL = "https://senate-stock-watcher-data.s3-us-west-2.amazonaws.com/aggregate/all_transactions.json"
const form = document.getElementById('stock-search-form')
const submitBtn = document.getElementsByName('submit')
const conContainer = document.getElementById('congress-container')
const ul = document.getElementById('stock-list')
let memberInfo; 

document.addEventListener('DOMContentLoaded', ()=> {
getCongressData()
})

//fetching data
function getCongressData(){
fetch(fetchURL) 
.then(response => response.json())
.then(data => console.log(data))}
//forEach Render

function displayConMember(e) {
    console.log(typeOf(e.target.id))
    ul.innerHTML = ""
    const member = member.find(m => m.id === parseInt(e.target.id))
    console.log(member)
    ul.innerHTML = `
    <h1>${member.representative}</h1>
    <h3>Asset Description: </h3>
    <p>${member.asset_description}</p>
    <h3>Stock Symbol/Ticker: </h3>
    <p>${member.ticker}</p>
    <h3>Amount: </h3>
    <p>${member.amount}</p>
    <h3>Transaction Date: </h3>
    <p>${member.transaction_date}</p>
    
    
    `
// const repNameH2 = document.createElement('h2')
// const ownerP = document.createElement('p')
// const assetDescription = document.createElement('p')
// const amountP = document.createElement('p')
// ul.innerHTML = ''
// repNameH2.textContent = person.representative
// ownerP.textContent = person.owner
// assetDescription.textContent = person.asset_description
// amountP.textContent = person.amount
// ul.append(repNameH2, assetDescription, amountP, ownerP)
}





//display Member