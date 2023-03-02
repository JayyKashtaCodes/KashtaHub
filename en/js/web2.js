/* Adding the script tag to the head as suggested before */
/// <reference path="jquery.js" />
var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = "https://code.jquery.com/jquery-2.2.1.min.js";

// Then bind the event to the callback function.
// There are several events for cross browser compatibility.
script.onreadystatechange = handler;
script.onload = handler;

// Fire the loading
head.appendChild(script);

function handler(){
   console.log('jquery added :)');
}


window.onload = function()
{
  document.getElementById("spanYear").innerHTML = new Date().getFullYear();
}

document.fonts.ready().then(function() {
  var content = document.getElementById("content");
  content.style.visibility = "visible";
});

/**
* Live updating API JS client side class
* @author Tim Davies
*/
function LiveupdatingClient (container)
{
	/**
	* Set up, include handlebars and setup template
	*/
	var endpoint = 'liveupdating.php';
	var self = this;
	var handlebarsInclude = document.createElement('script');
	handlebarsInclude.src = 'handlebars.js';
	document.getElementsByTagName('head')[0].appendChild(handlebarsInclude);


	/**
	* Send a request to the endpoint for additional
	* data
	*/
	this.request = function(method)
	{
		var result = "";
		var request = new XMLHttpRequest();
		request.open("POST", endpoint, true);
		request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		request.send("passkey=098f6bcd4621d373cade4e832627b4f6&method="+method);
		(function(){(request.readyState == 4)? self.layout(JSON.parse(request.responseText)):setTimeout(arguments.callee,40);})();				
	}	


	/**
	* Layout data using handlebars js and template
	*/
	this.layout = function (arr)
	{
		/* Create new row */
		var row = document.createElement('div');
		row.className = 'liveupdate-row';
		
		/* Compile handlebars source */
		var source = "<p>Hello, my name is {{FullName}}</p>";
		var template = Handlebars.compile(source);

		for(map in arr)
			row.innerHTML += template(arr[map]);
			
		document.getElementById(container).appendChild(row);
	}
}

/* Let's wait for the page to load */
document.addEventListener('DOMContentLoaded', function () {	
	var api = new LiveupdatingClient('live');
	api.request('setup');
	
	(function(){api.request('update'); setTimeout(arguments.callee,4000);})();	
});