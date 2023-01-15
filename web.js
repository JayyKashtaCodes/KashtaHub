    //Auto Locale
$( document ).ready(function(){
    var userLang = navigator.language || navigator.userLanguage;
    if (userLang == "en") {
         window.location.href = "/KashtaHub/"
    }
    else if(userLang == "ru"){
       window.location.href = "/KashtaHub/ru/"
    }
    else {
        window.location.href = "/KashtaHub/"
    }
});

// Cache

var solutions = [
    function () { history.go(0); },
    function () { location.href = location.href; },
    function () { location.href = location.pathname; },
    function () { location.replace(location.pathname); },
    function () { location.reload(forceGet); },
];

$("[data-func]").on("click", function () {
    solutions[parseInt($(this).attr("data-func"))]();
});


 // $('#something').click(function() {
 //   location.reload(true);
 // });


 // button stuff
 var methods = [
    "#",
    "#"
  ];
  
var $body = $("body");
for (var i = 0; i < methods.length; ++i) {
  (function(cMethod) {
    $body.append($("<button>", {
      text: cMethod
    }).on("click", function() {
      eval(cMethod); // don't blame me for using eval
    }));
  })(methods[i]);
}
