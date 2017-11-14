const logo = document.querySelector('#logo')
const menusite = document.querySelector('#menusite')
const paginas = document.querySelectorAll('.container .is-fluid')
let x = window.innerWidth + 'px', a = 0
logo.style.width = x
menusite.style.width = x
for(let xy of paginas){
	xy.style.width = window.innerWidth - 64 + 'px'
}
window.onresize = () => {
	x = window.innerWidth + 'px'
	logo.style.width = x
	menusite.style.width = x
	for(let xy of paginas){
		xy.style.width = window.innerWidth - 64 + 'px'
	}
}
minha()
 function minha (){
	let z = location.href.split(/#/)[1], w = document.querySelectorAll('#menusite li')
	for(let y of document.querySelectorAll('#menusite li')){
		y.className = ''
	}
	if(z === 'home'){
		w[0].className = 'ativado'
	}
	else if(z === 'sobre'){
		w[1].className = 'ativado'
	}
	else if(z === 'post'){
		w[2].className = 'ativado'
	}
	else if(z === 'galeria'){
		w[3].className = 'ativado'
	}
	else if(z === 'doacoes'){
		w[4].className = 'ativado'
	}
	else if(z === 'formu'){
		w[5].className = 'ativado'
	}
	else{
		w[0].className = 'ativado'
	}
}
for(let y of document.querySelectorAll('#menusite li a')){
	y.addEventListener('click', e=>{
		minha()
	})
}
document.addEventListener('scroll', e=>{
	let sct = document.querySelector('body').scrollTop
	console.log('sct')
	if(sct < 100){
		document.querySelector('#menusite').style.top = 100-sct+'px'
		document.querySelector('#menucelular').style.top = 100-sct+'px'
	}
	else{
		document.querySelector('#menusite').style.top = 0
		document.querySelector('#menucelular').style.top = 0
	}
})