
const username = localStorage.getItem('username');
console.log(username);

if(username == undefined)
{
    window.location.replace("index.html");
}

document.getElementById("loginusername").innerHTML = username;