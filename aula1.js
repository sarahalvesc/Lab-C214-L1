class Filme{
    constructor(titulo, ano, genero, duracao){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
        this.assistidos = [];
        this.avaliacao = [];
    }
        


/*class Aluno {
	constructor(nome){
		this.nome = nome;
		this.notas = [];
}*/

exibeDetalhes(){
    console.log(`O filme ${this.titulo} foi lançado em ${this.ano} sendo um filme de ${this.genero}`);
    console.log(`O filme tem ${this.duracao} minutos`);
}

marcaAssistido(assistido){
    this.assistidos.push(assistido);
    console.log(`Filme ${this.titulo} foi assistido ${assistido} vezes`)
}

addAvaliacao(nota){
    this.avaliacao.push(nota);
    console.log(`Nota ${nota} adicionada para o filme ${this.titulo}`)
}
}
/*adicionarNota(nota){
	this.notas.push(nota);
	console.log('Nota $(nota} adicionada para o aluno ${this.nome}. ');
}*/

/*calcularMedia(){
	if(this.notas.length == 0){
	console.log('O aluno nao possui notas registradas. ')
	}
	const somaNotas = this.notas.reduce((total, nota) => total + nota, 0);
	const media = somaNotas/this.notas.length;
	return media.toFixed(2);
}*/

/*verificarAprovacao(mediaMinima = 60){
	const media = this.calcularMedia();
	if (media >= mediaMinima){
		return '${this.nome} aprovado com media ${media}.';
    }
	else{
		return '$(this.nome} reprovado com media ${media}. ';
	}
}}*/

const filme1 = new Filme ('interestelar', 2014, 'ficcao',160)
const filme2 = new Filme ('o poderoso chefao', 1972, 'drama', 220)
const filme3 = new Filme ('Jurassic Park: O Parque dos Dinossauros', 1993, 'ficcao', 100)

/*const aluno1 = new Aluno ('Pedro');
const aluno2 = new Aluno ('Joana');*/

filme1.addAvaliacao(5);
filme2.addAvaliacao(4);
filme3.addAvaliacao(5);

filme1.marcaAssistido(0);
filme2.marcaAssistido(1);
filme3.marcaAssistido(3);

/*aluno1.adicionarNota(20);
aluno1.adicionarNota(80);
aluno2.adicionarNota(50);
aluno2.adicionarNota(100);*/

console.log(filme1.exibeDetalhes());
console.log(filme2.exibeDetalhes());
console.log(filme3.exibeDetalhes());
/*console.log(aluno1.verificarAprovacao());
console.log(aluno2.verificarAprovacao());*/