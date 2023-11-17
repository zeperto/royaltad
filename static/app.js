var deferredPrompt;

if('serviceWorker' in navigator){
	navigator.serviceWorker
	.register('sw.js')
	.then(function(){
		console.log('SERVICE WORKER REGISTERED...');
	});
}

window.addEventListener('beforeinstallprompt', function(event){
	event.preventDefault();
	deferredPrompt = event;
	return false;
});

//this is sample code which enables banner and show it by clicking on the sample button
/*
$('#sample').click(function(){
	if(deferredPrompt){
		deferredPrompt.prompt();
		deferredPrompt.userChoice.then(function(choiceResult){
			console.log(choiceResult.outcome);
			if(choiceResult.outcome === 'dismissed'){
				console.log('User cancelled installation');
			}
			else{
				console.log('User added to home screen');
			}
		});
		deferredPrompt = null; 
	}
});
*/