let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
// let l = parseInt(readLine());
// let b = parseInt(readLine());
// let area = parseInt(l*b); 
// if(l&&b > 0){
//     console.log(area);
// }
// else {
//     console.log(0);
// }
// ------------------------
let l = parseInt(readLine());
let b = parseInt(readLine());
let area = l * b; 
if(l > 0 && b > 0 ){
    console.log(area);
}
else {
    console.log(0);
}   


// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format