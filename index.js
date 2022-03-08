//global scope
const fetchURL = "https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json"
const form = document.getElementById('stock-search-form')
const submitBtn = document.getElementsByName('submit')
document.addEventListener('DOMContentLoaded', ()=> {
handleSubmit()
})

//fetching data
function handleSubmit(){
fetch(fetchURL)
.then(response => response.json())
.then(data => console.log(data))
}

//render data