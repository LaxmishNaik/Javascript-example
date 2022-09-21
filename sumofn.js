let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
  idx++;
  return data[idx - 1];
}
let n = parseInt(readLine());
let b = n*(n+1);
let sum = parseInt(b/2);
console.log(sum);


// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format