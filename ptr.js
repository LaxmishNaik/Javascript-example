let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let p = parseInt(readLine());
let t = parseInt(readLine());
let r = parseInt(readLine());
let SI = (p*t*r)/100;
console.log(SI);
// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format