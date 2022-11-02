

const btnsubmit = () =>{
    var uname = document.getElementById("uname").value;
    var pwd = document.getElementById("pwd").value;


    if (uname === "anam" && pwd === "123") {
        window.location.replace("attendance.html");
        
    } else {
        alert("wrong credentials");
    }
    

}
