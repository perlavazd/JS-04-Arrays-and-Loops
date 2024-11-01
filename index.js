//Sum of Resistors in Series

let resistencia = [-1,5,6,3];
//let resistencia = [14,3.5,6];
//let resistencia = [8,15,100];
let sumResistencia=0;
for(let i=0;i< resistencia.length; i++) {
    let numPositivo= Math.abs(resistencia[i]);
    sumResistencia= sumResistencia + numPositivo;
}
console.log(`${sumResistencia} ohms`);

//Number divided into halves

let mitadNums=[] 
let numeroDado=10;
let division=numeroDado/2;
let num0=mitadNums.push(division);
let num1=mitadNums.push(division);
console.log(mitadNums);

//Secret Society

let nombres = ["Esperanza", "Franco", "Nia"];
//let nombres = ['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel'];
//let nombres = ['Harry', 'Ron', 'Hermione'];

let nomUnidos=nombres.join('') //Metodo para unir los elementos, dando como resultado una cadena: ["EsperanzaFrancoNia"]
let nomSeparados= nomUnidos.split(""); //Metodo para separar por letras de la cadena: ['E','s','p','e','r','a','n','z','a','F','r','a','n','c','o','N','i','a']
let nomOrdenados = nomSeparados.sort(); //Metodo para ordenar alfabeticamente, como hay mayusculas las ordenara primero.['E', 'F', 'N', 'a', 'a','a', 'a', 'c', 'e', 'i','n', 'n', 'o', 'p', 'r','r', 's', 'z ]

let inicialesSecretas=[];
for (let i=0; i< nombres.length; i++){
    let inicial = nomOrdenados[i];
    let inicialG=inicialesSecretas.push(inicial);
}

console.log(inicialesSecretas.join(''))
