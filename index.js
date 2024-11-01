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




// Positive dominance in Array

let numMatriz = [-1, -3, -5, -4, 6767];
let numPositivo=0;

for (let i=0; i <= numMatriz.length; i++){

    if (numMatriz[i]>0) {
        numPositivo=numPositivo+1;
    }
}

let numNegativo= (numMatriz.length)- numPositivo;

if (numPositivo>numNegativo){
    console.log(true)
}else if(numPositivo<numNegativo){
    console.log(false)
}else{
    console.log('Hay la misma cantidad de positivos y negativos')
}




//Online status

let users = ['mockIng99', 'J0eyPunch', 'glassedFer', 'Lola', 'Angel'];
//let users = [];
//let users = ['mockIng99']
//let users = ['mockIng99', 'J0eyPunch']
//let users = ['mockIng99', 'J0eyPunch', 'glassedFer']

let longitud = users.length;

if (longitud == 0){
    console.log("No hay usuarios");
}else if (longitud==1){
    console.log("Hay un usuario");
}else if (longitud==2){
    console.log("Hay dos usuario");
}else /*longitud>3:*/{
    console.log(`${users[0]}, ${users[1]} y ${users.length-2} más en línea`);
}
        
    


//Array of Multiples

let resultOperacion=[];
function multiplos (numIngresado,longitud) {
    for (let i=1; i <= longitud; i++ ){
          //console.log(numIngresado*i);
          resultado=numIngresado*i;
          let pushResultado=resultOperacion.push(resultado);
    };
}

let operacion= multiplos(17,6);

console.log(`Los multiplos del número ingresado son: ${resultOperacion}`)




//Antipodal Average  

let arrayNums = [1,2,3,5,22,6];
let tamanoArray = arrayNums.length/2;
let redondeoArray=Math.round(tamanoArray)-1; //Se redondeo el array y se le restó 1, para obtener la logitud del array para el caso 2.
//console.log(redondeoArray)

if (arrayNums.length%2==0){ //Cuando el array se pueda partir exactamente a la mitad se realizará esto:

    let arrayNumUno=[]; //Numeros del array 1: se hizo el array tomando los valores del array original, i será 0 y finalizará hasta el número que dio como resultado la division del array.
    for (let i=0; i < tamanoArray; i++){
        let array1=arrayNumUno.push(arrayNums[i])
    }
    //console.log(arrayNumUno)

    let arrayNumDos=[];//Numeros del array 2: se hizo el array tomando los valores del array original, tomando como i inicial el valor de la división y que termine hasta la longitud del array original.
    for (let i=tamanoArray; i < arrayNums.length; i++){
        let array2=arrayNumDos.push(arrayNums[i])
    }
    //console.log(arrayNumDos)
    let reverseArrayDos=arrayNumDos.reverse(); //Se le aplicó reverse al array dos.
    //console.log(reverseArrayDos);

    let matrizFinal=[];

    for (let i=0; i < arrayNumUno.length; i++){ //Se hizo otro ciclo para sumar y dividir los dos arrays.
        let sumDiv=(parseInt(arrayNumUno[i]) + parseInt(reverseArrayDos[i]))/2;
        let matrizF=matrizFinal.push(sumDiv);
    }
    console.log(matrizFinal)


}else{ //En este caso el array no da exacto en la división entre 2.
    let arrayNumUno=[]; // Se crea array 1: para este se toma como i=0, y longitud de este array el valor que dio en la operación del redondeo-1.
    for (let i=0; i < redondeoArray; i++){
    let array1=arrayNumUno.push(arrayNums[i])}
    //console.log(arrayNumUno)

    let arrayNumDos=[]; // Se crea array 2: se toma como i= el valor de redondeo-1 y termina en la logitud del array original.
    for (let i=redondeoArray+1; i < arrayNums.length; i++){
    let array2=arrayNumDos.push(arrayNums[i])}
    //console.log(arrayNumDos)
    let reverseArrayDos=arrayNumDos.reverse(); //Se le aplica reverse al array 2.
    //console.log(reverseArrayDos);

    let matrizFinal=[];

    for (let i=0; i < arrayNumUno.length; i++){ //Se realiza sumatoria y division de arrays.
        let sumDiv=(parseInt(arrayNumUno[i]) + parseInt(reverseArrayDos[i]))/2;
        let matrizF=matrizFinal.push(sumDiv);
    }
    console.log(matrizFinal)
}




