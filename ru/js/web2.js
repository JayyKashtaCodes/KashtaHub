window.onload = function()
{
  document.getElementById("spanYear").innerHTML = new Date().getFullYear();
}

document.fonts.ready().then(function() {
  var content = document.getElementById("content");
  content.style.visibility = "visible";
});