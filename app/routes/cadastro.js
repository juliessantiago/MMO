//Route do cadastro 
//recebe as URLs
module.exports = function(application){ //application = objeto do servidor
    application.get('/cadastro', function(request, response){ //chama a página de cadastro
        console.log('chamando controller de cadastro')
       application.app.controllers.cadastro.mostraCadastro(application, request, response)
    })

    application.post('/cadastrar', function(request, response){ //recupera dados do formulário de cadastro
        application.app.controllers.cadastro.cadastrar(application, request, response)
    })
}
