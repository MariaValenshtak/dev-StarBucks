const burger = document.querySelector('.btn-burger');
const mobileContainer = document.querySelector('.mobile-container')


function ShowMobileContainer() {
    mobileContainer.classList.toggle('d-block')
    burger.classList.toggle('active')
}

burger.addEventListener('click', ShowMobileContainer)


const swiper = new Swiper('.swiper-product', {
   slidesPerView: 4,
  loop: true,
  speed: 400,
  spaceBetween: 48,


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

   breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerView: 1,
      spaceBetween: 48,
    },
    // when window width is >= 480px
    651: {
      slidesPerView: 2,
      spaceBetween: 48,
    },

    1025: {
      slidesPerView: 3,
      spaceBetween: 48,
    },
    // when window width is >= 640px
    1500: {
      slidesPerView: 4,
      spaceBetween: 48,
    }
  }

});

// const label = document.querySelectorAll('.label')

// label.forEach(item => {
//     item.addEventListener('mouseover', function() {
//         item.classList.add('hovered')
//     })

//     item.addEventListener('mouseout', function(){
//         item.classList.remove('hovered')
//     })
// })

// const btn = document.querySelectorAll('.btn')

// btn.forEach(item => {
//     item.addEventListener('mousedown', function(){
//         item.classList.add('hovered')
//     })
//     item.addEventListener('mouseup', function(){
//         item.classList.remove('hovered')
//     })
// })


