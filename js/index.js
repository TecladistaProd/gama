
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
		postagem: [
			{titulo:'Benefícios da Castração a vida de seu Animalzinho', texto: `1 – Cadelas e gatas castradas antes do primeiro cio têm mínimas chances de desenvolverem tumores de mama quando se tornarem idosas. O tumor de mama é o câncer mais comum nesses animais. Além disso, o procedimento evita totalmente a possibilidade de tumores de ovário e útero. 2 – As fêmeas não ficam mais vulneráveis a infecções uterinas graves, já que o seu aparelho reprodutor é removido. 3 – A castração previne totalmente a incidência de tumores testiculares, diminui consideravelmente o câncer de próstata, as hérnias perineais e a hipertrofia prostática, comum em machos idosos. Essas doenças frequentemente causam infecções e outros distúrbios urinários. 4 – O animal geralmente torna-se mais comportado, diminuindo as fugas, brigas e os atropelamentos. 5 – No macho, diminuem a marcação de território através da urina e a mania de montar, no caso dos cachorros. Para o cão de guarda será ainda melhor, pois ele vai se preocupar menos com cachorras no cio, concentrando sua atenção na casa e na família. 6 – Nos gatos, reduz a incidência da AIDS felina. Os gatos podem ser portadores do FIV (vírus da imunodeficiência felina), levando a uma síndrome semelhante à humana. O vírus é transmitido pelo cruzamento e por mordidas. Vale ressaltar que a AIDS felina é específica dos gatos e não pode ser transmitida ao homem de forma alguma, nem por mordidas, arranhões, lambidas ou contato com o sangue, urina, saliva e fezes dos gatos. 7- As fêmeas não entram mais no cio, poupando os tutores de lidar com o sangramento e com possíveis cães de rua importunando. 8 – Seu animal de estimação pode ficar mais dócil, facilitando a interação e reduzindo situações problemáticas – especialmente entre os que tinham comportamento agressivo antes. 9 – Elimina a gravidez psicológica que afeta algumas fêmeas após o cio, quando acontece o inchaço das mamas e pode causar irritação. 10 – A expectativa de vida dos cães castrados é maior. Os machos castrados, em geral, vivem aproximadamente 14% a mais.`, leia: {length: 250, sufix: '...', html: 'Continue Lendo' }},
			{titulo:'Ataque a Aves Rara', texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus hic eos id illum labore illo! Odit sequi natus nemo in id accusantium officiis illum dignissimos molestias eveniet, doloribus ullam placeat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quaerat dolor, consectetur at nobis culpa pariatur repudiandae! Iure eligendi accusantium quasi doloribus commodi. Natus impedit, necessitatibus esse doloribus nihil minus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium distinctio nobis quis, debitis impedit exercitationem. Praesentium atque eaque nobis id, eos, provident quaerat cum necessitatibus ex placeat. Iste, numquam, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam ducimus voluptates aperiam eveniet tempore commodi quo at quas ipsam expedita consequatur nulla quidem pariatur nihil cum, voluptate vel id suscipit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit accusamus similique harum impedit minima unde iusto, cum ratione adipisci cumque libero voluptas sed ab? Labore atque quisquam laudantium ipsam deserunt Aliquam ducimus voluptates aperiam eveniet tempore commodi quo at quas ipsam expedita consequatur nulla quidem pariatur nihil cum, voluptate vel id suscipit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit accusamus similique harum impedit minima unde iusto, cum ratione adipisci cumque libero voluptas sed ab? Labore atque quisquam laudantium ipsam deserunt', leia: {length: 250, sufix: '...', html: 'Continue Lendo' }},
			{titulo:'Besta Quadrada', texto: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus hic eos id illum labore illo! Odit sequi natus nemo in id accusantium officiis illum dignissimos molestias eveniet, doloribus ullam placeat! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quaerat dolor, consectetur at nobis culpa pariatur repudiandae! Iure eligendi accusantium quasi doloribus commodi. Natus impedit, necessitatibus esse doloribus nihil minus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium distinctio nobis quis, debitis impedit exercitationem. Praesentium atque eaque nobis id, eos, provident quaerat cum necessitatibus ex placeat. Iste, numquam, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam ducimus voluptates aperiam eveniet tempore commodi quo at quas ipsam expedita consequatur nulla quidem pariatur nihil cum, voluptate vel id suscipit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit accusamus similique harum impedit minima unde iusto, cum ratione adipisci cumque libero voluptas sed ab? Labore atque quisquam laudantium ipsam deserunt Aliquam ducimus voluptates aperiam eveniet tempore commodi quo at quas ipsam expedita consequatur nulla quidem pariatur nihil cum, voluptate vel id suscipit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit accusamus similique harum impedit minima unde iusto, cum ratione adipisci cumque libero voluptas sed ab? Labore atque quisquam laudantium ipsam deserunt', leia: {length: 250, sufix: '...', html: 'Continue Lendo' }}
			],
			pgNm: 'GAMA - Taquaritinga',
		dropdown: 'dropdown navbar-item',
		search: ''
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
		clickpagina: function (nome, z=null){
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
		    window.scrollTo(0, window.innerHeight*2)
		    if(z !== null){
		    	this.ativadw()
		    }
		},
		abrir: function (){
			window.open('https://www.facebook.com/gama.taquaritinga/?fref=ts', '_blank').focus()
		},
		ativadw: function(){
			if(this.dropdown === 'dropdown navbar-item'){
				this.dropdown = 'dropdown navbar-item is-active'
			} else {
				this.dropdown = 'dropdown navbar-item'
			}
		},
		ler: function(e){
			if(this.filtra[e].leia.length === 250){
				this.filtra[e].leia.length = Math.pow(10, 99)
				this.filtra[e].leia.html = 'diminuir'
				this.filtra[e].leia.sufix = ''
			} else {
				this.filtra[e].leia.length = 250
				this.filtra[e].leia.sufix = '...'
				this.filtra[e].leia.html = 'Continue Lendo'
				
			}
		}
	},
	computed:{
		filtra: function(){
			return this.postagem.filter((pst) =>{
				let teste1 = pst.titulo.toLowerCase().match(this.search.toLowerCase())
				let teste2 =  pst.texto.toLowerCase().match(this.search.toLowerCase())
				if(teste1 || teste2){
					return pst.titulo
				}
			})
		}
	},
	filters:{
		leiaMais: function(text, length, suffix){
			return text.substring(0, length) + suffix
		}
	}
})