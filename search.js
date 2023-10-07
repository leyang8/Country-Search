const countries = [
    {country: "Andorra", currency: "EUR"},
    {country: "United Arab Emirates", currency: "AED"},
    {country: "Afghanistan", currency:"AFN"},
    {country: "Antigua and Barbuda", currency:"XCD"},
    {country: "Anguilla", currency:"XCD"},
    {country:"Albania", currency:"ALL"},
    {country:"Armenia", currency:"AMD"},
    {country:"Benin", currency:"XOF"},
    {country:"Saint Barthelemy", currency:"EUR"},
    {country:"Guadeloupe", currency:"EUR"},
    {country:"Brunei Darussalam", currency:"BND"},
    {country:"Bolivia", currency:"BOB"},
    {country:"Botswana", currency:"BWP"},
    {country:"Canada", currency:"CAD"},
    {country:"Cocos (Keeling) Islands", currency:"AUD"},
    {country:"Ivory Coast", currency:"XOF"},
    {country:"Cook Islands", currency:"NZD"},
    {country:"China", currency:"CNY"},
    {country:"Finland", currency:"EUR"},
    {country:"French Guiana", currency:"EUR"}
]


//20 digits and only alphabet
function nameTyping(){
    let inputValue = document.getElementById("searchingNameInput").value
    inputValue = inputValue.replace(/[^a-zA-Z]/g, '');
    if (inputValue.length > 20) {
        inputValue = inputValue.substring(0, 20);
    }
    document.getElementById("searchingNameInput").value = inputValue
    dyNameSearch(inputValue)
}

//upper case 3 digits currency letter
function currencyTyping(){
    let inputValue = document.getElementById("searchingCurrencyInput").value
    inputValue = inputValue.replace(/[^a-zA-Z]/g, '');
    inputValue = inputValue.toUpperCase()
    if (inputValue.length >= 3) {
        inputValue = inputValue.substring(0, 3);
    }
    document.getElementById("searchingCurrencyInput").value = inputValue
    dyCurrencySearch(inputValue)
}


// search name
function getNameElement(event){
    let textField = document.getElementById("searchingNameInput").value
    event.preventDefault()
    searchCountryByName(textField)
}

function searchCountryByName(name){
    let resultList = []
    for (let i = 0; i < countries.length; i++){
        if (countries[i].country.toLowerCase().includes(name.toLowerCase()) && name != '' && resultList.length < 5){
            resultList.push(countries[i])
        }
    }
    if(resultList.length > 0){
        let resultString = resultList.map(country => 
            `Country: ${country.country}, Currency: ${country.currency}`).join('\n')
        alert(resultString)
    }else{
        alert("Non result find")
    }
}

//search currency
function getCurrencyElement(event){
    let textField = document.getElementById("searchingCurrencyInput").value
    if (event.key ==='Enter') {
        event.preventDefault()
        searchCountryByCurrency(textField)
    }  
}

function curBtEventListener(event){
    let textField = document.getElementById("searchingCurrencyInput").value
    event.preventDefault()
    searchCountryByCurrency(textField)

}

function searchCountryByCurrency(currency){
    let resultList = []
    for (let i = 0; i < countries.length; i++){
        if (countries[i].currency.trim().includes(currency.trim()) && currency != '' && resultList.length < 5){
            resultList.push(countries[i])
        }
    }
    if (resultList.length > 0) {
        let resultString = resultList.map(country=> 
            `Country: ${country.country}, Currency: ${country.currency}`).join('\n')
        alert(resultString)
    } else {
        alert("Non result find")
    }
}