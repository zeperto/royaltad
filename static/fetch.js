fetch('https://httpbin.org/post', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	},
	mode: 'cors',
	//mode: 'no-cors'
	body:JSON.stringify({
		message: 'Does this work?'
	})
}).then(function(response){
	console.log(response);
	return response.json();
}).then(function(data){
	console.log(data);
}).catch(function(err){
	return err;
});
