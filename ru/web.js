    //Auto Locale
 $( document ).ready(function(){
    var userLang = navigator.language || navigator.userLanguage;
    if(userLang == "en"){
       window.location.href = "/KashtaHub/"
    }
    else {
        break;
    }
});
