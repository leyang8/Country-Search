// create the container
let dyContainer = document.createElement('div')
dyContainer.id = "dynamicSearchingBox"

//position the container
let searchingForm = document.getElementById("searchForm")
searchingForm.parentNode.insertBefore(dyContainer, searchingForm.nextSibling)
dyContainer.style.color = "green"


//Create a new list (any list) inside this block
let newList = document.createElement('ul')
dyContainer.appendChild(newList)

/*Retrieve all list items in lab1 and make a copy for later use
(not doing so will directly move the elements from original list)*/
let countryList = document.getElementsByTagName('li')
let copyList = Array.from(countryList).map(li => li.cloneNode(true));

//get this newly created list
let nl = dyContainer.firstElementChild

function dyNameSearch(name){
    /**
     * regulate it is only allowed one type of searching at a time
     */
    let currencyInput = document.getElementById('searchingCurrencyInput')
    if (currencyInput.value != '') {
        alert("Please only make one search at a time!")
        document.getElementById('searchingNameInput') = ''
        currencyInput.focus()
        return
    }
    if (name == '') {
        while (nl.firstChild) {
            nl.removeChild(nl.firstChild)
        }
    }
    /**append method */
    for (let i = 0; i < copyList.length; i++){
        if (copyList[i].querySelector('.country_name').textContent.toLowerCase().includes(name.toLowerCase()) && name != '') {
            nl.appendChild(copyList[i])
        }
    }
    /**remove method */
    let dyList = nl.childNodes
    for(let i = dyList.length-1; i >= 0; i--){ 
    /*have to be reverse order because this will compare every node in the list. 
    Removing one from the list will cause the shorter length so if going forward, the index will go out of bond*/
        if (!dyList[i].querySelector('.country_name').textContent.toLowerCase().includes(name.toLowerCase())) {
            nl.removeChild(dyList[i])
        }
    }
}

function dyCurrencySearch(name) {
    /**
     * regulate it is only allowed one type of searching at a time
     */
    let nameInput = document.getElementById('searchingNameInput')
    if (nameInput.value != '') {
        alert("Please only make one search at a time!")
        document.getElementById('searchingCurrencyInput').value = ''
        nameInput.focus()
        return
    }
    if (name == '') {
        while (nl.firstChild) {
            nl.removeChild(nl.firstChild)
        }
    }
    /**append method */
    for (let i = 0; i < copyList.length; i++){
        if (copyList[i].querySelector('.currency').textContent.toLowerCase().includes(name.toLowerCase()) && name != '') {
            nl.appendChild(copyList[i])
        }
    }
    /**remove method */
    let dyList = nl.childNodes
    for(let i = dyList.length-1; i >= 0; i--){ 
        if (!dyList[i].querySelector('.currency').textContent.toLowerCase().includes(name.toLowerCase())) {
            nl.removeChild(dyList[i])
        }
    }
}


