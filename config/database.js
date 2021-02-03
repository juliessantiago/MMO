//configurações do banco de dados (Mongo) através do mongoose 
var mongo = require('mongodb')

var conexao = function(){ //aqui ao invés de retornar direto a função, coloca-se dentro de 
    //uma variável para que seja possível chamá-la apenas quando desejado
    //e não sempre que o Consign fizer o autoload do módulo (criando várias conexões sem necessidade) 
    var db = new mongo.Db(
        'mmo', 
        new mongo.Server(
            'localhost', 
            27017, 
            {}
        ), 
        {}
    )
    
    return db; 
    console.log('Entrou na função de conexão'); 
}
module.exports = function(){
   return conexao; 
}
