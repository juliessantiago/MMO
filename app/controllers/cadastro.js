//controller de cadastro 

module.exports.mostraCadastro = function (application, request, response){ // mostra página de cadastro
    response.render('cadastro', {validacao :{}})
    //Não é necessário colocar .EJS 
    /*estou passando aqui a variável validação porque seu conteúdo é testado na página, 
    então é necessário que ela exista*/ 
}
module.exports.cadastrar = function (application, request, response){
    let dados = request.body; 
    //BodyParser 
    
    request.assert('nome', 'Campo nome não pode ser vazio').notEmpty(); //Express Validator
    request.assert('user', 'Campo usuário não pode ser vazio').notEmpty(); 
    request.assert('senha', 'Campo senha não pode ser vazio').notEmpty(); 
    request.assert('casa', 'Você precisa escolher uma casa').notEmpty(); 

    let erros = request.validationErrors(); 
    
    if(erros){
        response.render('cadastro', {validacao : erros }) //renderiza a view cadastro enviando uma variável de erros 
        return; //evitando que processo continue 
    }else {
        response.send('Cadastrando...')
    }
}
