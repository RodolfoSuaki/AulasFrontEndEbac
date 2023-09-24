<script setup>
import { reactive } from 'vue';

const estado = reactive({
  num1: 0,
  num2: 0,
  filtro: 'Soma',
});

const operacaoAritmetica = () => {
  const filtro = estado.filtro;
  const num1 = parseFloat(estado.num1); // Converter num1 para número
  const num2 = parseFloat(estado.num2); // Converter num2 para número

  switch (filtro) {
    case 'Soma':
      return num1 + num2;
    case 'Subtração':
      return num1 - num2;
    case 'Multiplicação':
      return num1 * num2;
    case 'Divisão':
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        return "Divisão por zero não é permitida";
      }
    default:
      return 0;
  }
};
</script>

<template>
  <div class="container-sm p-5 mb-4 mt-4 bg-light">
    <header class="text-center">
      <h1>Calculadora Aritmética</h1>
      <p class="pt-5">Favor inserir os números abaixo e selecionar a operação aritmética: </p>
    </header>
    <body class="bg-light">
      <div class="container text-center">
        <div class="row">
          <input @change="evento => estado.num1 = evento.target.value" class="col text-center" required type="number" placeholder="Digite um número"  name="" id="">
          <input @change="evento => estado.num2 = evento.target.value" class="col text-center" required type="number" placeholder="Digite um número"  name="" id="">
          <div class="col-2">
            <select @change="evento => estado.filtro = evento.target.value" class="form-control">
              <option value="Soma">Soma</option>
              <option value="Subtração">Subtração</option>
              <option value="Multiplicação">Multiplicação</option>
              <option value="Divisão">Divisão</option>
            </select>
          </div>
        </div>
        <div class="row mt-5">
          <h4>SEU RESULTADO É:</h4>
        </div>
        <div class="row mt-5">
          <h4 class="result col-4 text-center container">{{ operacaoAritmetica() }}</h4>
        </div>
      </div>
    </body>
  </div>
</template>

<style scoped>
  .result{
    height: 100px;
  }
  input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
</style>
