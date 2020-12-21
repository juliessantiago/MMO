/* Importa configurações do servidor */
var app = require('./config/server');

/* Define porta de escuta */
app.listen(5000, function(){
	console.log('Servidor online');
}) 