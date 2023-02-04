
main(document.body)

function main(documentBody){
    const wineNameObj = documentBody.getElementsByClassName("css-1rw23u7 enp2lf70")
    const wineYearObj = documentBody.getElementsByClassName("css-qry54b enp2lf70")

    wineName = getName(wineNameObj)
    wineYear = getYear(wineYearObj)

    console.log(wineName)
    console.log(wineYear)
}

// Finds name of wine
function getName(wineNameObj) {
    return wineNameObj[0].innerText
}

// Finds year of wine
function getYear(wineYearObj) {
    return wineYearObj[0].innerText
}