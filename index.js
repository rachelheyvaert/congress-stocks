//grabbing html elements in global scope
const fetchURL = "https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json"
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

function displayConMember() {
//create elements
}

//renderData

//display Member