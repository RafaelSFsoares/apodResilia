
// $('#procurar').click(function(events) {
//     events.preventDefault();
//     nasaApi();
    
// })




let botaoProcurar = document.querySelector('#procurar')

botaoProcurar.addEventListener('click', ()=> {
    console.log('Apertei o botão')
    nasaApi()
} 
)






async function nasaApi (){
    let chave = 'CmJdFBuZnwV1kld7tUPsqYH8uerLBeOxghDyO8iz'
    let response = await fetch (`https://api.nasa.gov/planetary/apod?api_key=${chave}`)
    console.log(response)

    let data = await response.json()
    console.log(data)
    apiData(data)
}

function apiData(data) {
    document.querySelector('#container').innerHTML += data.explanation
    document.querySelector('#container').innerHTML += `<img src = "${data.url}">`

    
}