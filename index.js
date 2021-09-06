let url = "https://api.nasa.gov/planetary/apod?api_key=jXsOlWB7fEPgHYhuVbn6g7bIPXJQnaI5e2Jx1avI";

function start() {
    let data = $("#dataInput").val()
    console.log(data)

    $.ajax({

        url: url + "&date=" + data, // não entendi essa linha 

        success: function(result) {
            var api = result
            console.log(api)
            return chosen(api)

        }
    })
}

function chosen(nasa) {
    $("#conteudo").html(nasa.explanation);
    $("#titulo").html(nasa.title);
    $(".texto").css("display", "none"); //nao fica invisivel
    console.log(nasa.url)

    $('body').css("background-image", `url(${nasa.url})`); // como pegar img ?
    $('body').css("background-repeat", "no-repeat");
    $('body').css("background-size", "cover");
}