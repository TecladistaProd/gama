Vue.component('galeria', {
	template:`
		<span>
			<figure class="image is-128x128 mao" @click="modal = modal + ' ' + 'is-active'">
				<img :src="imagem.src"/>
			</figure>
			<div :class="modal">
				<div class="modal-background"></div>
				<div class="modal-card">
					<header class="modal-card-head">
						<p class="modal-card-title" v-text="imagem.nome"></p>
						<button class="delete" @click="modal = 'modal'"></button>
					</header>
					<section class="modal-card-body">
	      				<p class="image is-3by2">
	    					<img :src="imagem.src" alt="imagem.nome"/>
	   					</p>
	   					{{imagem.hist}}
	   				</section>
	   			</div>
			</div>
		</span>
	`,
	props:{
		imagem:{
			required:true,
			type:Object
		},
		modal:{
			required:true,
			type:String
		}
	}
})
Vue.component('pagina', {
	template:`
		<div class="container is-fluid" v-show="pg[0] === pg[1]" :id="pg[1]">
			<br/>
			<slot></slot>
		</div>
	`,
	props:{
		pg:{
			required:true,
			type:Array
		}
	}
})
Vue.component('carousel', {
	template: ` 
		<div class="box">
			<span v-for="item in imagens">
				<div v-show="item.ativado">
					<img :src="item.src" :alt="item.title" class="carouselitem image"/>
					<h1 class="subtitle is-4">{{item.title}}</h1>
				</div>
			</span>
			<nav class="pagination">
				<a class="button" @click.prevent="ant">Anterior</a>
            	<a class="button" @click.prevent="prox">Próxima</a>
			</nav>
		</div>
	`,
	props:{
		imagens:{
			type:Array,
			required:true
		}
	},
	methods:{
		ant: function (){
			let x = 0
			let z = this.imagens.length - 1
			for(let y of this.imagens){
				if(y.ativado === true){
					this.imagens[x].ativado = false
					if(x === 0){
						return this.imagens[z].ativado = true
					}
					else{
						return this.imagens[x-1].ativado = true
					}
				}
				x++
			}
		},
		prox: function (){
			let x = 0
			let z = this.imagens.length - 1
			for(let y of this.imagens){
				if(y.ativado === true){
					this.imagens[x].ativado = false
					if(x === z){
						return this.imagens[0].ativado = true
					}
					else{
						return this.imagens[x+1].ativado = true
					}
				}
				x++
			}
		}
	}
})
let app = new Vue({
	el: '#app',
	data:{
		teste: '',
		imagens:[],
		logo:'imagem/logo.png',
		menu:[
		{nome:'home', pagina:'Pagina Inicial'},
		{nome:'sobre', pagina:'Nossa Historia'},
		{nome:'post', pagina:'Postagens e Eventos'},
		{nome:'galeria', pagina:'Animais Salvos'},
		{nome:'doacoes', pagina:'Patrocínios'},
		{nome:'formu', pagina:'Formulario de Castração'}
		],
		menucell: 'esconde',
		carouselimg:[
		{src:'imagem/item-1.jpg', title:'imagem 1', ativado:true},
		{src:'imagem/item-2.jpg', title:'imagem 2', ativado:false},
		{src:'imagem/item-3.jpg', title:'imagem 3', ativado:false}
		],
		pg:'home',
		galeria:[
		{nome:'Ivo', src:'imgal/Ivo.jpg', hist:'Ivo foi encontrado  filhote em uma movimentada avenida da cidade. Como tinha coleira quem o encontrou pediu a  amiga que o abrigasse até achar seu tutor, Ivo tremia muito e se arrastava, não conseguia ficar em pé e na consulta foi constatado problemas neurológicos. Seu antigo “tutor” não apareceu. Ivo foi adotado, apesar da sua dificuldade de locomoção vive e harmonia numa família com sete “irmãos”'},
		{nome:'Pluto', src:'imgal/Pluto.jpg', hist:'Pluto é um cão idoso,era feliz com seu dono até os 10 anos,o tutor morreu e os vizinhos o alimentavam.Foi agredido,então 4 amigas pegaram a tutela.Após 3 anos foi adotado,e depois resgatado de novo por maus tratos,desnutrido e debilitado,hoje vive feliz e tranquilo com sua amiga e tutora.Nunca abandone um cão idoso.'}
		],
		meuinput:''
	},
	async mounted(){
		let x = location.href.split(/#/)[1]
		if(x === 'home') this.pg = 'home'
		else if(x === 'sobre') this.pg = 'sobre'
		else if(x === 'post') this.pg = 'post'
		else if(x === 'galeria') this.pg = 'galeria'
		else if(x === 'doacoes') this.pg = 'doacoes'
		else if(x === 'formu') this.pg = 'formu'
	},
	methods:{
		tooglemenu: function (){
			if(this.menucell === 'menucell')
				this.menucell = 'esconde'
			else
				this.menucell = 'menucell'
		},
		clickpagina: function (nome){
			this.pg = nome
			let x = location.href.split(/#/)[0]
			location.href = x + '#' + nome
		}
	},
	computed:{
		abrir: function (){
			window.open('https://www.facebook.com/gama.taquaritinga/?fref=ts')
		}
	},
	filters:{}
})