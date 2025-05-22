    // const triger = document.querySelector('#triger')
// const modal = document.querySelector('.modal')
// const close = document.querySelector('.btn-close')
// const body = document.querySelector('body')

// function showModal(){
//     modal.classList.add('d-flex')
//     body.classList.add('overflow-hidden')
// }

// function closeModal() {
//     modal.classList.remove('d-flex')
//     body.classList.remove('overflow-hidden')
// }

// triger.addEventListener('click', showModal)
// close.addEventListener('click', closeModal)

const trigers = document.querySelectorAll('[data-modal]')
const body = document.querySelector('body')
const closeTrigers = document.querySelectorAll('[data-close-modal]')

function showModal(modal) {
    modal.classList.add('d-flex')
    body.classList.add('overflow-hidden')
}

function closeModal(event) {
event.preventDefault()
console.log(event.target);

if (event.target.hasAttribute('data-close-modal')) {
    event.target.closest('.modal').classList.remove('d-flex')
    body.classList.remove('overflow-hidden')
} 
}


trigers.forEach(
    function(element) {
        const modalId = element.getAttribute('data-modal')
        element.addEventListener('click', function(event){
            event.preventDefault()
            const modal = document.getElementById(modalId) 
            showModal(modal)
        })
    }
)

closeTrigers.forEach(function(element){
    element.addEventListener('click', function(event){
        event.preventDefault()
        closeModal(event)
    })
})
