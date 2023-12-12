// const loginButton = loginForm.querySelector("#login-form button");
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); //브라우저 기본동작 멈추기 (새로고침)
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    // greeting.innerText = "Hello " + username; 
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}


function paintGreetings(username) {
    greeting.classList.remove("hidden");
    greeting.innerText = `Hello ${username}`; 

}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    //show the form
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //show the greetings
    paintGreetings(savedUsername);
}
