
//Variables
const quotes = ["Yes", "No", "Hopefully", "Never", "You bet", "Ask Again", "Nope", "You Wish", "Don't Make Me Laugh", "Hahaha!", "That is not going to happen", "Dream On", "100%", "True"]
const oneMore = document.querySelector(".again")

//Random Number
const randomNumber = Math.floor(Math.random() * 14)


//EventLisner
const questionSub = document.querySelector("button")

questionSub.addEventListener('click', Answer)
oneMore.addEventListener('click', () => {
    location.reload()
})

//Function
function Answer() {
    document.querySelector(".miniballanswer").innerHTML = quotes[randomNumber];
    event.preventDefault();
}


//Toggle
const checkbox = document.getElementById('checkbox');
const navbar = document.querySelector("nav")

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    document.body.firstChild.classList.toggle('dark');

});


navbar.addEventListener('change', () => {
    classList.toggle('dark');

});
