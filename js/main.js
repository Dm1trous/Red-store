var MenuItems = document.getElementById('MenuItems');
MenuItems.style.maxHeight = "0px";
function menutoggle() {
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "300px";
    } else {
        MenuItems.style.maxHeight = "0px";
    }
}

var LoginForm = document.getElementById('LoginForm');
var RegForm = document.getElementById('RegForm');

function register() {
    LoginForm.style.transform = "translateX(0px)";
    RegForm.style.transform = "translateX(0px)";
}

function login() {
    LoginForm.style.transform = "translateX(350px)";
    RegForm.style.transform = "translateX(350px)";
}