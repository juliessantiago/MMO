//Route do cadastro 
module.exports = function(application){ //application = objeto do servidor
    application.get('/cadastro', function(request, response){
        console.log('chamando controller de cadastro')
       application.app.controllers.cadastro.MostraCadastro(application, request, response)
    })
}