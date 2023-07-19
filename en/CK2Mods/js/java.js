//--JQuery--\\
// Anonymous "self-invoking" function
(function() {
    var startingTime = new Date().getTime();
    // Load the script
    var script = document.createElement("SCRIPT");
    script.src = 'https://code.jquery.com/jquery-3.6.4.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName("head")[0].appendChild(script);

    // Poll for jQuery to come into existence
    var checkReady = function(callback) {
        if (window.jQuery) {
            callback(jQuery);
        }
        else {
            window.setTimeout(function() { checkReady(callback); }, 20);
        }
    };
})();

    // Start polling...
   // checkReady(function($) {
   //     $(function() {
   //         var endingTime = new Date().getTime();
   //        var tookTime = endingTime - startingTime;
    //        window.alert("jQuery is loaded, after " + tookTime + " milliseconds!");
   //     });
   // });
// })();
//----------------------------------------------------------\\