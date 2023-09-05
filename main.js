//Classe = País: Brasil
//Instância = Dados do IBGE (Regiões: Sudeste, Nordeste, Sul, Norte e Centro-Oeste)



function regioesDoBrasil (regiao, numeroDeHabitantes, numeroDeCidades, area){
    this.regiao = regiao;
    this.numeroDeHabitantes = numeroDeHabitantes;
    this.numeroDeCidades = numeroDeCidades;
    this.area = area;
}

const sul = new regioesDoBrasil("sul", "29,97 milhões", 1191, "576 mil km2");
const sudeste = new regioesDoBrasil("sudeste","84,84 milhões", 1668, "924 mil km2");
const nordeste = new regioesDoBrasil("nordeste", "54,65 milhões", 1794, "1576 mil km2");


console.log(sul);
console.log(sudeste);
console.log(nordeste);