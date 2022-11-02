

const btnsubmit = () =>{
    var uname = document.getElementById("uname").value;
    var pwd = document.getElementById("pwd").value;
    const loginErrorMsg = document.getElementById("login-error-msg");

    if (uname === "anam" && pwd === "anam123") {
        window.location.replace("attendance.html");
        
    } else {
        loginErrorMsg.style.opacity = 1;
        // alert("wrong credentials");
    }
    

}
