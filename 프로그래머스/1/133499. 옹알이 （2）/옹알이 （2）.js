function solution(babbling) {
    let fail = 0;
    
    for(let i = 0; i < babbling.length; i++) {
        let word = babbling[i];
        let duplication = ['ayaaya', 'yeye', 'woowoo', 'mama'].find((dupWord) => word.includes(dupWord));
        if (duplication) {
            fail += 1;
            continue;
        }
        
        while(word.length > 0) {
            if(['ye', 'ma'].includes(word.slice(0, 2))) {
                word = word.slice(2)
            } else if (['aya', 'woo'].includes(word.slice(0, 3))) {
                word = word.slice(3)
            } else {
                fail += 1;
                break;
            }   
        }
    }
    
    return babbling.length - fail;
}