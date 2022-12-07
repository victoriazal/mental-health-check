const slides = document.getElementsByClassName("carousel-item")
let slidePosition = 0;
const totalSlides = slides.length;

function hideAllSlides(){
    for (const item of slides) {
        item.classList.remove("carousel-item-visible")
        item.classList.add("carousel-item-hidden")
    }
}

// document.getElementById("carousel-button-next").addEventListener('click', function moveToTheNextSlide() {
//     hideAllSlides()
//     if (slidePosition === totalSlides - 1) {
//         slidePosition = 0;
//     } else {
//         slidePosition++;
//         console.log(slidePosition)
//     }
//     slides[slidePosition].classList.add("carousel-item-visible")
// })
// document.getElementById("carousel-button-prev").addEventListener('click', function moveToThePrevSlide() {
//     hideAllSlides()

//     if (slidePosition === 0) {
//         slidePosition = totalSlides-1;
//     } else {
//         slidePosition--
//         console.log(slidePosition)
//     }
//     slides[slidePosition].classList.add("carousel-item-visible")
// })


// create a safe space after breathing exercise
let container = document.getElementById("container")
let moveOnBtn = document.getElementById("moveOnBtn")
    moveOnBtn.addEventListener('click', function(){
        container.innerHTML = `
        <p class="supportive-text">
        You are now being the strongest you have ver been, even if it doesn't feel like it
        and I am really proud of you
      </p>
        `
        moveOnBtn.innerHTML = 'I am strong'
        if( moveOnBtn.innerHTML = 'I am strong'){
            moveOnBtn.addEventListener("click", function(){
                container.innerHTML = `
                <p class="supportive-text">
                YES YOU ARE!
              </p>
               `})
        }
    })

