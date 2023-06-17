// **********variables

let selectArea = document.querySelector(".form-select")
let cardArea = document.getElementById("card__area")


// ********functions
function createOption (val, name){
    let optionE = document.createElement("option")
    optionE.setAttribute("value", val)
    optionE.innerText = name
    selectArea.appendChild(optionE)
}

function createCard (imgage, name, currencies, link){
    let cardDiv = document.createElement("div")
    cardDiv.className = "card mt-5 mb-5"

    let cardDiv1 = document.createElement("div")
    cardDiv1.className = "card-body"

    let img = document.createElement("img")
    img.setAttribute("src", imgage)
    img.className = "card-img-top"

    let ul = document.createElement("ul")
    ul.className = "list-group list-group-flush"

    let liName = document.createElement("li")
    liName.className = "list-group-item"
    liName.innerText = name

    let liCurr = document.createElement("li")
    liCurr.className = "list-group-item"
    liCurr.innerText = currencies

    let liLink = document.createElement("li")
    liLink.className = "list-group-item"

    let anchor = document.createElement("a")
    anchor.className = "card-link"
    anchor.setAttribute("href",link)
    anchor.setAttribute("target","_blank")
    anchor.innerText = name

    liLink.appendChild(anchor)
    ul.appendChild(liName)
    ul.appendChild(liCurr)
    ul.appendChild(liLink)
    cardDiv1.appendChild(img)
    cardDiv1.appendChild(ul)
    cardDiv.appendChild(cardDiv1)
    cardArea.appendChild(cardDiv)
}



fetch("https://restcountries.com/v3.1/all")
.then(res => 
    res.json()
)
.then(data => {
    console.log(data);
    data.forEach(element => {
        // console.log(element.name.official)
        // console.log(element.name.common)
        createOption (element.cioc, element.name.common)
    });
})


selectArea.addEventListener("change", (e) => {
    fetch(`https://restcountries.com/v3.1/alpha/${e.target.value}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        createCard(data[0].flags.png, data[0].name.common, data[0].continents[0], data[0].maps.googleMaps )
        // createCard (imgage, name, currencies, link)
    })

    console.log(e.target.value);
})