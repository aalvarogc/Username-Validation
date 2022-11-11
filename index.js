validations = document.getElementsByTagName("li");

oneLowercase = new RegExp(".*[a-z].*");
oneUppercase = new RegExp(".*[A-Z].*");
minimunChars = new RegExp("^.{6,}$")

function checkUsername(e){
    if(oneLowercase.test(e.value)){
        validations[0].style.color = "green";
    }else{
        validations[0].style.color = "white";
    }

    if(oneUppercase.test(e.value)){
        validations[1].style.color = "green";
    }else{
        validations[1].style.color = "white";
    }
    
    if(minimunChars.test(e.value)){
        validations[2].style.color = "green";
    }else{
        validations[2].style.color = "white";
    }
}

window.onload = ()=>{
    username = document.getElementById("username");
    username.addEventListener("keyup", ()=>{checkUsername(username)});
}