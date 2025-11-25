function solution(s, skip, index) {
    let result = '';
    skip = skip.split('').map((str) => str.charCodeAt());
    
    for(let i = 0; i < s.length; i++) {
        let code = s[i].charCodeAt();
        let skipCount = 0;
        
        let count = 0;
        while(count < index) {
            code += 1;
            
            if(code > 122) code -= 26;
            if(skip.includes(code)) continue;
            
            count += 1;
        }
        
        if(code > 122) code -= 26;
        result += String.fromCharCode(code);
    }
    
    return result;
}