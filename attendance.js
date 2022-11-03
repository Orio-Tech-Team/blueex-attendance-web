
const username = localStorage.getItem('username');
console.log(username);

if(username == undefined)
{
    window.location.replace("index.html");
}

document.getElementById("loginusername").innerHTML = username;

const showmenu = () =>{
    document.getElementById("logoutpopup").style.display = "block"
}

const hidemenu = () =>{
    document.getElementById("logoutpopup").style.display = "none"
}

const logout = () =>{
    localStorage.removeItem('username');
    window.location.replace("index.html");
}