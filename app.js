let bayans = document.querySelectorAll('.bayan__items')
let header = document.querySelector('.header')

let links = document.querySelectorAll('.header__link')
let height = document.querySelector('.intro').offsetHeight
console.log(height)

function scrollEvent(){
	let scrollPos = window.scrollY
	console.log(scrollPos)

	if (scrollPos > height){
		header.classList.add('fixed')
	}
	else{
		header.classList.remove('fixed')
	}
} 



for (let link of links){
	link.addEventListener('click', (event)=>{
		event.preventDefault()
		let element = link.text.toLowerCase()
		element = document.querySelector(`#${element}`)
		element.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})

	})
}


window.addEventListener('DOMContentLoaded', ()=>{
	scrollEvent()
})

window.addEventListener('scroll', ()=>{
	scrollEvent()
})


for(let bayan of bayans){
	bayan.addEventListener('click', function(){
		if( ! bayan.classList.contains('active'))
			bayan.classList.toggle('active')
			
		else{
			bayan.classList.toggle('active')
		}
		
})}

let burger = document.querySelector('.nav__toggle')
let burgerMenu = document.querySelector('.header__menu')

burger.addEventListener('click', ()=>{

	if(!burger.classList.contains('active')){
		burger.classList.add('active')
		burgerMenu.style.display = 'block'
	}
	else{
		burger.classList.remove('active')
		burgerMenu.style.display = 'none'

	}
})


$('.one-time').slick({
  // dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  arrows: false
  // slickPrev: none,
  // slickNext: none
});