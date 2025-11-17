// 문제 해결에 걸린 시간은 10분, 17번과 35번에서 시간 초과 발생

function solution(n, m, section) {
    let cnt = 0;
    
    for (let i = 1; i <= n; i++) {
        if(section.length === 0) break;
        if(!section.includes(i)) continue;
        
        // section = section.filter((num) => num > i + (m - 1));
        const paintArea = section.filter((num) => num <= i + (m - 1));
        const endPoint = section.findIndex((num) => num === paintArea[paintArea.length - 1]);
        section = section.slice(endPoint + 1);

        cnt += 1;
    }
    
    return cnt;
}