const readline = require("readline");
const rl = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout 
});
rl.question("Masukkan angka : ", function(input){
    let angka = parseInt(input); 
    if(angka % 2 === 0){ 
        console.log("Bilangan Genap"); }
    else{ 
        console.log("Bilangan Ganjil"); } 
        rl.close(); 
    });