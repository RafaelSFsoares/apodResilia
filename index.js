
$('#procurar').click(function(events) {
    events.preventDefault();
    nasaApi();
    
})


async function nasaApi (){
    
    let chave = 'CmJdFBuZnwV1kld7tUPsqYH8uerLBeOxghDyO8iz'
    let pesquisar = $('#pesquisar').val();
    let response = await fetch (`https://api.nasa.gov/planetary/apod?api_key=${chave}&date=${pesquisar}`);
    console.log(response)

    let data = await response.json()
    console.log(data)
    apiData(data)
}

function apiData(data) {
        
    $('body').css("background-repeat", "no-repeat");
    $('body').css("background-size", "cover");
    $('body').css('background-image', `url(${data.url})`);
    
    

    document.querySelector('#texto').innerHTML += data.explanation
    

    
}

// melhorar código