function solution(arr){
    const answer = [];
    
    arr.forEach((num, idx) => {
        if(idx === 0) {
            answer.push(num)
        } else {
            if(arr[idx - 1] !== arr[idx]) answer.push(num);   
        }
    })
    
    return answer;
}