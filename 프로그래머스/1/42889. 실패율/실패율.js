function solution(N, stages) {
    const failRates = [];
    
    for(let i = 1; i <= N; i++) {
        const users = stages.filter((userLevel) => userLevel >= i);
        const clearedUsers = stages.filter((userLevel) => userLevel > i);        
        const failRate = (users.length - clearedUsers.length) / users.length;
        failRates.push([i, failRate]);
    }
    
    return failRates.sort((arr1, arr2) => arr2[1] - arr1[1]).map((arr) => arr[0])
}