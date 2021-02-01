//Route de jogo
module.exports = function(application){
    application.get('/jogo', function(request, response){
        console.log('Chamando controller do jogo'); 
        application.app.controllers.jogo.mostraJogo(application, request, response)
    })
}