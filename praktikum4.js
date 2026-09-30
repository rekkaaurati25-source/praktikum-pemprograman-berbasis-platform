const readline = require("readline"); 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout 
}); 

rl.question("20: ", function(umur)
{ 
    let umurBaru = parseInt(umur); 
    console.log("20:", umurBaru); 
    console.log("25 :", umurBaru + 5);
     rl.close();
 });