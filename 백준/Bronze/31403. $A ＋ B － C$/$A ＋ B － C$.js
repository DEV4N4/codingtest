const inputs = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const calcFn = ([a, b, c]) => a + b - c;

console.log(calcFn([...inputs].map(Number)));
console.log(calcFn([...inputs].map(String)));