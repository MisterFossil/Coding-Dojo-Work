const wordsArr = [
    ["quick","lazy"],
    ["brown","grey","red"],
    ["fluffy", "scruffy", "scraggly"],
    ["rabid","pox infected","healthy","zombie"],
    ["fox","dog","bunny","t-rex"],

]

function allCombos(words){
    const combs = [];
    function helper(sub, i){
        if (i == words.length) {
            combs.push(sub);
        }
        else {
            for (let j = 0; j < words[i].length; j++){
                if(i == 0) {
                    helper(sub + words[i][j], i + 1)
                } else {
                    helper(sub + ' ' + words[i][j], i + 1);
                }
            }
        }
    }
    helper('',0);
    return combs;
}

console.log(allCombos(wordsArr));