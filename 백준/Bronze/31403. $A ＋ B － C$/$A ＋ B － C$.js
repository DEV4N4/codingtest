const inputs = require('fs').readFileSync(0, 'utf-8').trim().split('\n').map(String);
const [a, b, c] = inputs;

console.log(Number(a) + Number(b) - Number(c));
console.log(a + b - c);