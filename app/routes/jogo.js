module.exports = function(application){
    application.get('/jogo', function(request, response){
        response.render('../views/jogo.ejs'); 
    })
}