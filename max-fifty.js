function getDogImages(value) {

    fetch(`https://dog.ceo/api/breeds/image/random/${value}`)
    .then(response => response.json())
    .then(responseJson =>
        displayResults(responseJson))
    .catch(error => console.error(error))
}

function displayResults(json) {
    console.log(json.message[0])
    for (let i=0; i<json.message.length; i++) {
        generateHTML(json.message[i])
    }
}

function generateHTML(imgUrl) {
    $('.results').append(`<img src="${imgUrl}" alt="placeholder">`)
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault()
        let value = $('#breed').val()
        console.log(value)
        $('.results').empty()
        getDogImages(value)
    })
}


function main() {
    watchForm()

}

$(main)
