self.addEventListener('install', evt => { console.log ('Service worker foi instalado.');
});

self.addEventListener('activate', evt => { console.log ('Service worker foi ativado.');
}); 

self.addEventListener('fecht', evt => { console.log ('Service worker capturou');
}); 
