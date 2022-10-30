console.log("{Working}");
ScrollReveal({ reset: true });
ScrollReveal().reveal(".headline");
var slideUp = {
    distance: '150%',
    origin: 'bottom',
    delay: 900,
    interval: 500
};
var Up = {
    distance: '150%',
    origin: 'bottom',
    delay: 900,
    interval: 500
};
var mintUp = {
    distance: '150%',
    origin: 'bottom',
    delay: 900,
    interval: 500
};
ScrollReveal().reveal(".onego", slideUp);
ScrollReveal().reveal(".oneg", Up);
ScrollReveal().reveal(".one", mintUp);




const checkdark = document.getElementById("theme");
const bg = document.getElementById("color");
const text = document.querySelector(".form-check-label");
console.log(checkdark);
console.log(checkdark.checked);
checkdark.addEventListener("change", () => {
    if (checkdark.checked === true) {
        text.innerHTML = "Dark";
        console.log(checkdark.checked);
        bg.style.background = "#00041f";
        
    }
    else {
        text.innerHTML = "Light";
        console.log(checkdark.checked);
        bg.style.background = "#bdeaff";
        //background: #bdeaff;
    }
})