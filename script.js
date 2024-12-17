const ratingButtons = document.querySelectorAll('.rating-btn')
const submitBtn = document.querySelector('#SubmitBtn')
const ratingPage  = document.querySelector('#rating-page')
const thankYouPage = document.querySelector('#thankPage')
let selectedRating = null


ratingButtons.forEach(button => {
    button.addEventListener('click',() =>{
        button.classList.toggle('active')
    })
})

submitBtn.addEventListener('click',() =>{
    const activeButton = document.querySelector('.rating-btn.active')
    if(activeButton){
        ratingPage.style.display = 'none'
        thankYouPage.style.display = 'block'
    }
    else{
        alert('Please select rating before submitting!')
    }
})

