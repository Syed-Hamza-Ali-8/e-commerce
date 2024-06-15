function athletes() {
    let enterPage = document.getElementById("enter-page")
    enterPage.style.display = "none"
    let name = document.getElementById("my-name")
    name.style.display = "none"
    let square1 = document.getElementById("square-1")
    square1.classList.add("hide")
    let square2 = document.getElementById("square-2")
    square2.classList.add("hide")
    let square3 = document.getElementById("square-3")
    square3.classList.add("hide")
    let square4 = document.getElementById("square-4")
    square4.classList.add("hide")
    let backgroundImage = document.getElementById("background-image")
    backgroundImage.classList.add("hide")
    let athletesSection = document.getElementById("athletes-section")
    athletesSection.classList.remove("hide")
    let hideH4 = document.querySelector("h4")
    hideH4.classList.add("hide")
}

function login() {
    let loginUser = document.getElementById("fieldset")
    loginUser.classList.remove("hide")
    let backgroundHide = document.getElementById("background")
    backgroundHide.classList.add("hide")
    let buttonHide = document.getElementById("shop")
    buttonHide.classList.add("hide")
    let families = document.getElementById("families")
    families.classList.add("hide")
    let athletes = document.getElementById("athletes")
    athletes.classList.add("hide")
    let navName = document.getElementById("nav-name")
    navName.classList.add("hide")
    let search = document.getElementById("search")
    search.classList.add("hide")
    let subscribe = document.getElementById("subscribe")
    subscribe.classList.add("hide")
    let login = document.getElementById("log-in")
    login.classList.add("hide")
    let bag = document.getElementById("bag")
    bag.classList.add("hide")
    let navbar = document.getElementById("navbar")
    navbar.style.border = "none"
    let products = document.getElementById("products")
    products.style.opacity = "0"
    let footer = document.getElementById("footer-section")
    footer.style.opacity = "0"
}

function getResponse(cb) {
    const xReq = new XMLHttpRequest();
    xReq.onreadystatechange = function () {
        console.log(this.readyState);
        const requestState = this.readyState;
        if (requestState === 4) {
            console.log(this.responseText, this.status, "===response Text");
            data = JSON.parse(this.responseText);
            cb(data);
            console.log(data, "===data");
        }
    };
    xReq.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
    xReq.send();

    console.log(xReq);
}
