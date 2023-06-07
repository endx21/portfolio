const nav = document.getElementById("nav");

const form = document.getElementById("contact-form")
const nameContact = document.getElementById("name-contact");
const emailContact = document.getElementById("email-contact");
const messageContact = document.getElementById("message-contact");




// SHOW AND HIDE THE RESPONSIVE MENU
function showAndHideMenu() {
    if(nav.classList==""){
        nav.classList="responsive";
    }else{
        nav.classList="";
    }
}
// HIDE RESPONSIVE MENU WHEN SELECTING AN OPTION
function select() {
    nav.classList.remove("responsive");
}

function processForm(e) {
    if (e.preventDefault) e.preventDefault();
    console.log(`${emailContact.value}${nameContact.value}${messageContact.value}`);
    return false;
}

if (form.attachEvent) {
    form.attachEvent("submit", processForm);
} else {
    form.addEventListener("submit", processForm);
}