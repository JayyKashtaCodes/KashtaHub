window.onload = function()
{
  document.getElementById("spanYear").innerHTML = new Date().getFullYear();
}

    //Auto Locale
    $( document ).ready(function(){
      var userLang = navigator.language || navigator.userLanguage;
      if(userLang == "en"){
         window.location.href = "/KashtaHub/en/"
      }
      else {
          break;
      }
  });
  