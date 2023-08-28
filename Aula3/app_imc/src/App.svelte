<script>
	// Variáveis de estado
	let peso = 0;
	let altura = 0;
	let imc = 0;
	let categoriaIMC = "";

	// função para calcular o imc
	function calcularIMC(){
		if(peso > 0 && altura > 0){
			imc = (peso / Math.pow(altura, 2)).toFixed(2);

			if (imc < 18.5) {
				categoriaIMC = "Abaixo do peso";
			} else if (imc >= 18.5 && imc <= 24.9) {
				categoriaIMC = "Peso ideal (parabéns)";
			} else if (imc >= 25.0 && imc <= 29.9) {
				categoriaIMC = "Levemente acima do peso";
			} else if (imc >= 30.0 && imc <= 34.9) {
				categoriaIMC = "Obesidade grau 1";
			} else if (imc >= 35.0 && imc <= 39.9) {
				categoriaIMC = "Obesidade grau 2 (severa)";
			} else {
				categoriaIMC = "Obesidade grau 3 (mórbida)";
			}
		} else {
			imc = 0;
			categoriaIMC = "";
		}
	}
</script>

<main>
	<h1>Calculadora de IMC</h1>
	<label>
	  Peso (kg): <input type="number" bind:value={peso} on:input={calcularIMC} />
	</label>
	<label>
	  Altura (m): <input type="number" bind:value={altura} on:input={calcularIMC} />
	</label>
	{#if imc > 0}
	  <p>Seu IMC é {imc}</p>
	  <p style="color: red; background-color: yellow;">Categoria: {categoriaIMC}</p>
	{/if}
</main>
  
<style>
	main {
	  font-family: sans-serif;
	  text-align: center;
	  padding: 2rem;
	}
  
	h1 {
	  font-size: 1.5rem;
	  margin-bottom: 1rem;
	}
  
	label {
	  display: block;
	  margin-bottom: 0.5rem;
	}
  
	input {
	  padding: 0.25rem;
	}
</style>