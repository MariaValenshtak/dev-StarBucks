const burger = document.querySelector('.btn-burger');
const mobileContainer = document.querySelector('.mobile-container')

function ShowMobileContainer() {
    mobileContainer.classList.toggle('d-block')
    burger.classList.toggle('active')
}

burger.addEventListener('click', ShowMobileContainer)


const label = document.querySelectorAll('.label')

label.forEach(item => {
    item.addEventListener('mouseover', function() {
        item.classList.add('hovered')
    })

    item.addEventListener('mouseout', function(){
        item.classList.remove('hovered')
    })
})

const btn = document.querySelectorAll('.btn')

btn.forEach(item => {
    item.addEventListener('mousedown', function(){
        item.classList.add('hovered')
    })
    item.addEventListener('mouseup', function(){
        item.classList.remove('hovered')
    })
})


