if('seviceWorker' in navigator){
	navigator.serviceWorker.register('../ws.js')
	. then((reg) => console.log('Service Worker registrado'))
	.catch((err) => console.log('Service Worker não registrado',err));
}
