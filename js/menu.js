document.querySelector('.menu-abrir').onclick = function(){
	document.documentElement.classList.add('menu-ativo');
};

document.querySelector('.menu-fechar').onclick = function(){	
	document.documentElement.classList.remove('menu-ativo');	
};

document.documentElement.onclick = function(event){
	if(event.target === document.documentElement) {
		document.documentElement.classList.remove('menu-ativo');
	}
};
/*Op3nDNS!@#
Op3nDNS!@#
Op3nDNS!@#
208.67.222.222 and 208.67.220.220
/*$('.menu-abrir').on('click', function(){
	$('html').addClass('menu-ativo');
});
$('.menu-fechar').on('click', function(){
	$('html').removeClass('menu-ativo');
});*/