const slides = document.getElementsByClassName("carousel-item")
let slidePosition = 0;
const totalSlides = slides.length;

function hideAllSlides(){
    for (const item of slides) {
        item.classList.remove("carousel-item-visible")
        item.classList.add("carousel-item-hidden")
    }
}

document.getElementById("carousel-button-next").addEventListener('click', function moveToTheNextSlide() {
    hideAllSlides()
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
        console.log(slidePosition)
    }
    slides[slidePosition].classList.add("carousel-item-visible")
})
document.getElementById("carousel-button-prev").addEventListener('click', function moveToThePrevSlide() {
    hideAllSlides()

    if (slidePosition === 0) {
        slidePosition = totalSlides-1;
    } else {
        slidePosition--
        console.log(slidePosition)
    }
    slides[slidePosition].classList.add("carousel-item-visible")
})

