//Route da index 
module.exports = function(application){
	application.get('/', function(request, response){
		response.render('../views/index.ejs');
	});
}