function solution(x) {
    const divisor = String(x).split('').map(Number).reduce((acc, cur) => acc + cur, 0);
    return x % divisor === 0
}
