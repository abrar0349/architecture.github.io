// navbar functionality of toggle 

let nav = document.getElementsByClassName('navSecond')[0];
let crossBtn = document.querySelector('.fa-x')
let barBtn = document.querySelector('.fa-bars')

  // console.log(crossBtn,nav)

crossBtn.addEventListener('click', () => {
    nav.classList.toggle('showClass')
    barBtn.classList.toggle('hideClass')
    crossBtn.classList.toggle('hideClass')
})

barBtn.addEventListener('click', () => {
    nav.classList.toggle('showClass')
    barBtn.classList.toggle('hideClass')
    crossBtn.classList.toggle('hideClass')
})