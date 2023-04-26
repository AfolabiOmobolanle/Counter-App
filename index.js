
document.title = "SHOW PASSWORD";

const passwordInput = document.getElementById("password");
const click = document.getElementById("click");

const togglePassword = () => {
    console.log(passwordInput);
    if (passwordInput.type === "password") {
        passwordInput.type = "text"
        click.innerText = "SHOW"

        
    }
    else{
        passwordInput.type = "password";
        click.innerText = "HIDE"
    }
}