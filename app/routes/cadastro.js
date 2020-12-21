//Route do cadastro 
module.exports = function(application){
    application.get('/cadastro', function(request, response){
        response.render('../views/cadastro.ejs'); 
    })
}