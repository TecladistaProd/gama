let app = new Vue({
	el: '#app',
	data:{
		teste: '',
		imagens:[],
		logo:'imagem/logo.png',
		menu:[
		{nome:'home', pagina:'Pagina Inicial', classe:''},
		{nome:'sobre', pagina:'Nossa Historia', classe:''},
		{nome:'post', pagina:'Postagens e Eventos', classe:''},
		{nome:'galeria', pagina:'Animais Salvos', classe:''},
		{nome:'doacoes', pagina:'Patrocínios', classe:''},
		{nome:'formu', pagina:'Formulario de Castração', classe:''}
    ],
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
		dropdown: 'dropdown'
	},
	mounted(){
    let n = 0
    let home = 0
    for(let x of this.menu){
      this.menu[n].classe = ''
      if(location.href.split('#')[1] === x.nome){
        this.menu[n].classe = 'is-active'
				this.pg = this.menu[n].nome
      }
      else{
        home++
      }
      n++
    }
    if(home > 5){
      this.menu[0].classe = 'is-active'
    }
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
      let n = 0
      for(let a of this.menu){
        this.menu[n].classe = ''
        if(a.nome === nome){
          this.menu[n].classe = 'is-active'
        }
        n++
      }
		},
		abrir: function (){
			window.open('https://www.facebook.com/gama.taquaritinga/?fref=ts', '_blank').focus()
		},
		ativadw: function(){
			if(this.dropdown === 'dropdown'){
				this.dropdown = 'dropdown is-active'
			} else {
				this.dropdown = 'dropdown'
			}
		}
	},
	computed:{
		filtra: function(){
			//
		}
	},
	filters:{}
})
