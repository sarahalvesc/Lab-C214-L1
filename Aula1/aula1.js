class Filme{
    constructor(titulo, ano, genero, duracao){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
        this.assistidos = 'nao';
        this.avaliacao = null;
    }


exibeInfo(nome){
    console.log(`O filme ${this.titulo} foi lançado em ${this.ano} sendo um filme de ${this.genero}`);
    console.log(`O filme tem ${this.duracao} minutos`);
	console.log(`O filme foi assistido ${this.assistido} vez(es) e sua avaliação é ${this.avaliacao}`)
}

assistir(){
    this.assistido = 'Sim';
    console.log(`Filme ${this.titulo} foi assistido`)
}

avaliar(nota){
    if (nota >= 0 && nota <= 10){
		this.avaliacao = nota;
		console.log(`Nota adicionada para o filme ${this.titulo}`);
	} else {
		console.log("Avaliação inválida, deve ser de 0 a 10.")
	}
}
}

	const listaFilmes = []; 

    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

function exibirMenu() { 
	console.log("--------------------------------");
	console.log(`[1] - Adicionar um novo filme à lista.`);
	console.log(`[2] - Marcar um filme da lista como assistido.`);
	console.log(`[3] - Avaliar um filme da lista.`);
	console.log(`[4] - Exibir a lista de filmes.`);
	console.log(`[5] - Sair do programa`);
	}	

function adicionarFilme(){
	rl.question('titulo: ', (titulo) => {
		rl.question('ano de lançamento: ', (ano) => {
			rl.question('genero: ', (genero) => {
				rl.question('duração: ', (duracao) => {
					const filme = new Filme(titulo, ano, genero, duracao);
					listaFilmes.push(filme);
					console.log('filme adicionado');
					exibirMenu(); 
				});
			  });
			});
		});  
	}
	
function marcarAssistido() {
	for (let i = 0; i < listaFilmes.length; i++) {
		console.log(`${i+1} - ${listaFilmes[i].titulo}`);
	}
	rl.question('filme que deseja marcar como assistido: ', (numero) => {
		const index = parseInt(numero) - 1;
		if (index >= 0 && index < listaFilmes.length) {
		listaFilmes[index].assistir();
		} 
		else {
			console.log('numero de filme invalido.');
		}
		exibirMenu();
		});
		
	  }

function avaliarFilme() { 
	for (let i = 0; i < listaFilmes.length; i++) {
		console.log(`${i+1} - ${listaFilmes[i].titulo}`);
	}
	rl.question('Digite o número do filme que deseja avaliar: ', (numero) => {
		const index = parseInt(numero) - 1;
			if (index >= 0 && index < listaFilmes.length) {
				rl.question('Digite a sua avaliação (de 1 a 10): ', (avaliacao) => {
				const nota = parseInt(avaliacao);
				listaFilmes[index].avaliar(nota); // Utilizando o método da classe Filme
				console.log('');
				iniciarMenu();
			});
			} else {
				console.log('Número de filme inválido.');
				console.log('');
				iniciarMenu();
			}
			
	});
		
}

function listarFilmes() { // exibe a lista de filmes
	console.log('Lista de Filmes:');
	for (let i = 0; i < listaFilmes.length; i++) {
		listaFilmes[i].exibirInfo();
	}
	exibirMenu();
	}
	
	function encerrarPrograma() { 
		console.log('Programa Finalizado!.');
		rl.close();
	}
	
	function exibirMenu() {
		exibirMenu();
		rl.question('Digite a opção desejada: ', (opcao) => {
		  switch (opcao) {
			case '1':
			  adicionarFilme();
			  break;
			case '2':
			  assistido();
			  break;
			case '3':
			  avaliarFilme();
			  break;
			case '4':
			  listarFilmes();
			  break;
			case '5':
			  encerrarPrograma();
			  break;
			default:
			  console.log('Opção inválida.');
			  console.log('');
			  exibirMenu();
		  }
		});
	}
	  
	exibirMenu();


/*class Aluno {
	constructor(nome){
		this.nome = nome;
		this.notas = [];
}
adicionarNota(nota){
	this.notas.push(nota);
	console.log('Nota $(nota} adicionada para o aluno ${this.nome}. ');
}

calcularMedia(){
	if(this.notas.length == 0){
	console.log('O aluno nao possui notas registradas. ')
	}
	const somaNotas = this.notas.reduce((total, nota) => total + nota, 0);
	const media = somaNotas/this.notas.length;
	return media.toFixed(2);
}

verificarAprovacao(mediaMinima = 60){
	const media = this.calcularMedia();
	if (media >= mediaMinima){
		return '${this.nome} aprovado com media ${media}.';
    }
	else{
		return '$(this.nome} reprovado com media ${media}. ';
	}
}}

const filme1 = new Filme ('interestelar', 2014, 'ficcao',160)
const filme2 = new Filme ('o poderoso chefao', 1972, 'drama', 220)
const filme3 = new Filme ('Jurassic Park: O Parque dos Dinossauros', 1993, 'ficcao', 100)

const aluno1 = new Aluno ('Pedro');
const aluno2 = new Aluno ('Joana');

filme1.addAvaliacao(5);
filme2.addAvaliacao(4);
filme3.addAvaliacao(5);

filme1.marcaAssistido(0);
filme2.marcaAssistido(1);
filme3.marcaAssistido(3);

aluno1.adicionarNota(20);
aluno1.adicionarNota(80);
aluno2.adicionarNota(50);
aluno2.adicionarNota(100);

console.log(filme1.exibeDetalhes());
console.log(filme2.exibeDetalhes());
console.log(filme3.exibeDetalhes());
console.log(aluno1.verificarAprovacao());
console.log(aluno2.verificarAprovacao());*/