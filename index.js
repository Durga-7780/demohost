var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

console.log("username "+username+" password "+password);

var btn=document.getElementById("btn")[0];
btn.onclick=()=>{
    window.location.href="home.html";
}