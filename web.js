$( document ).ready(function(){
    var userLang = navigator.language || navigator.userLanguage;
    if (userLang == "en") {
        break;
    }
    else if(userLang == "ru"){
       window.location.href = "/KashtaHub/ru/"
    }
    else {
        window.location.href = "/KashtaHub/"
    }
});