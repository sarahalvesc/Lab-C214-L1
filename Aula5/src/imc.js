function calcularIMC(peso, altura){
    if(altura===0){
        return 'NaN'; // retorna caso a altura seja 0, não preenchida
    }
    
    const alturaMetros =  altura/100;
    const imc = (peso / (alturaMetros * alturaMetros));

    const categoria = classificarIMC(imc);

    return {
        imc: imc.toFixed(2),
        categoria
    };

    function classificarIMC(imc) {
        if (imc < 18.5) {
            return 'Abaixo do Peso';
        } else if (imc >= 18.5 && imc < 24.9) {
            return 'Peso Normal';
        } else if (imc >= 25 && imc < 29.9) {
            return 'Sobrepeso';
        } else if (imc >= 30 && imc < 34.9) {
            return 'Obesidade Grau I';
        } else if (imc >= 35 && imc < 39.9) {
            return 'Obesidade Grau II';
        } else {
            return 'Obesidade Grau III';
        }

}

module.exports = {calcularIMC}; // Módulo responsável pela exportação da função para coleta no teste

}
