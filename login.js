function login(){
    let userName = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let loginMessage = document.getElementById("login-message");
    var hash = CryptoJS.HmacSHA256(password, "i19IcCmVwVmMVz2x4hhmqbgl1KeU0WnXBgoDYFeWNgs=");
    var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
    $.post("login.php", 
    {
        user: userName,
        pass: hashInBase64
    })
    .done((response)=>{
        console.log(response);
        if(response == "Fail"){
            loginMessage.innerHTML = "Username and/or password are incorect";
            loginMessage.style.color = "red";
            setTimeout(()=>{
                loginMessage.innerHTML = "";
            }, 1500);
        }
        if(response == "Success"){
            location.reload();
        }
    })
    /*if(userName == "1w8vfurg" && hashInBase64 == "30uIfUYJO7wN9+b9Qfz/QhPzNLl68+p7z4xQYl84d3Y="){
        loginMessage.innerHTML = "You have logged";
        loginMessage.style.color = "green";
        setTimeout(()=>{
            document.getElementById("login").style.display = "none";
            document.getElementById("cover").style.display = "none";
        }, 1800);
    }else{
        loginMessage.innerHTML = "Username and/or password are incorect";
        loginMessage.style.color = "red";
    }
    setTimeout(()=>{
        loginMessage.innerHTML = "";
    }, 1500);*/
}

function bindEventListeners(){
    document.getElementById("login-button").addEventListener("click", ()=>{
        login();
    }, false)
    document.getElementById("password").addEventListener("keydown", (event)=>{
        if(event.code == "Enter"){
            login();
        }
    }, false)
}
bindEventListeners();