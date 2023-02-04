
main(document.body)

function main(documentBody){
    wineName = getName(documentBody)
    wineYear = getYear(documentBody)

    console.log(wineName)
    console.log(wineYear)
}

// Finds name of wine
function getName(documentBody) {
    return documentBody.getElementsByClassName("css-1rw23u7 enp2lf70")[0].innerText
}

// Finds year of wine
function getYear(documentBody) {
    return documentBody.getElementsByClassName("css-qry54b enp2lf70")[0].innerText
}