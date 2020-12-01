function getDogImages(value) {
    fetch(`https://dog.ceo/api/breed/${value}/images/random`)
    .then(response => response.json())
    .then(responseJson =>
        displayResults(responseJson))
    .catch(error => console.error(error))
}

function displayResults(json) {
    console.log(json.code)
    if (json.code === 404) {
        generateError()
    }
    else {
    generateHTML(json.message)
    }
}

function generateHTML(imgUrl) {
    $('.results').append(`<img src="${imgUrl}" alt="placeholder">`)
}

function generateError() {
    $('.results').append(`<h3>Oops! Looks like that breed of dog doesn't exist! Try entering a valid breed!</h3>`)
}




function watchForm() {
    $('form').submit(event => {
        event.preventDefault()
        let value = $('#breed').val()
        $('.results').empty()
        getDogImages(value)
    })
}


function main() {
    watchForm()

}

$(main)
