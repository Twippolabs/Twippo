function revealFrombottom() {
    var reveal = document.querySelectorAll(".revealFrombottom");
    for (var i = 0; i < reveal.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveal[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveal[i].classList.add("active");
        } else {
            reveal[i].classList.remove("active");
        }
    }
};
window.addEventListener("scroll", revealFrombottom);

function revealFromtop() {
    var reveal = document.querySelectorAll(".revealFromtop");
    for (var i = 0; i < reveal.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveal[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveal[i].classList.add("active");
        } else {
            reveal[i].classList.remove("active");
        }
    }
};
window.addEventListener("scroll", revealFrombottom);

function revealFade() {
    var reveal = document.querySelectorAll(".revealFade");
    for (var i = 0; i < reveal.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveal[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveal[i].classList.add("active");
        } else {
            reveal[i].classList.remove("active");
        }
    }
};
window.addEventListener("scroll", revealFade)
