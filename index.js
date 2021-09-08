
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

// $('button').on('click', async function (event) {
//     event.preventDefault();
//     $('#inicio').css("display", "none");
//     let valueData = $('#date').val();
//     let url = `https://api.nasa.gov/planetary/apod?api_key=QRaDd5HWwVtjNo83M6DhwSdhxw9M2Ibxj798RL5w&date=${valueData}`;
//     let api = await fetch(url).then(response => response.json());
//     $('body').css("background-image", `url(${api.url})`);
//     $('body').css("background-repeat", "no-repeat");
//     $('body').css("background-size", "cover");
//     $('#corpo').css('display', 'block');
//     $('#titulo').html(`${api.title}`);
//     $('#titulo').html(`${api.title}`);
//     $('#texto').html(`(${api.explanation})`);
//     console.log(event)
//     console.log(apiResponse)
//     console.log(inputDate)
// });