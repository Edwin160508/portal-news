// loads analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-61051-6']);
_gaq.push(['_trackPageview']);

(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = 'http://www.google-analytics.com/' + (location.hostname == 'localhost' || location.hostname.indexOf('192.168') >= 0? 'u/ga_debug.js' : 'ga.js');
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

// helper
function $(query) {
	// busca todos os elementos
	var elements = document.querySelectorAll(query);

	return {
		// atacha callbacks de forma simples
		on: function(eventName, callback) {
			for (var i = 0; i < elements.length; i++) {
				elements[i].addEventListener(eventName, callback, false);
			}
		}
	};
}

function log(message) {
	document.getElementById('log').innerHTML += message + '<br>';
}


// linka pro arquivo específico
document.getElementById('link-source').href += location.pathname.replace(/.*\//,'');

// qrcode
document.getElementById('qrcode').innerHTML = '<img src="https://chart.googleapis.com/chart?chs=210x210&cht=qr&chl=http://sergiolopes.org'+location.pathname+'&choe=UTF-8">'