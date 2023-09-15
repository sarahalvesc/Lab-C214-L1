const { expect } = require('chai');
const { calcularIMC } = require('../src/imc');

describe('Calculadora de IMC', () => {
    it('Calculadora deve rodar tranquilo', () => {
        const peso = 80;
        const altura = 180;

        const IMEsperado = (peso / Math.pow(altura / 100, 2)).toFixed(2);
        const IMCCalculado = calcularIMC(peso, altura);

        expect(IMCCalculado).to.equal(IMEsperado);
    });

    it('altura = 0, entrada inadequada', () => {
        const peso = 70;
        const altura = 0;

        const IMCCalculado = calcularIMC(peso,altura);
        
        expect(IMCCalculado).to.equal('NaN');
    });

    it('IMC abaixo do peso', () => {
        const peso = 50;
        const altura = 160;
    
        const resultado = calcularIMC(peso, altura);
    
        expect(resultado.imc).to.equal('19.53');
        expect(resultado.categoria).to.equal('Abaixo do Peso');
    });
    
    it('IMC obesidade grau II', () => {
        const peso = 120;
        const altura = 170;
    
        const resultado = calcularIMC(peso, altura);
    
        expect(resultado.imc).to.equal('41.52');
        expect(resultado.categoria).to.equal('Obesidade Grau II');
    });
});