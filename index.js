

const btnsubmit = () =>{
    var uname = document.getElementById("uname").value;
    var pwd = document.getElementById("pwd").value;
    const loginErrorMsg = document.getElementById("login-error-msg");

    if (uname === "anam" && pwd === "anam123") {
        localStorage.setItem('username', uname);
        window.location.replace("attendance.html");
        
    } else {
        loginErrorMsg.style.opacity = 1;
    }
    

}

const username = localStorage.getItem('username');
if(username != undefined)
{
    window.location.replace("attendance.html");
}