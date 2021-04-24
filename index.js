function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}




const fiveHeads = new Promise((resolve, reject) => { 
        let headCount = 0;
        let attempts = 0;
        while (headCount < 5) {
            attempts++;
            let result = tossCoin()
            console.log(`${result} was flipped`)
            if (result === "heads" ) {
                headCount++
            } else {
                attempts++
            }
            if (headCount === 5) {
                resolve("Coin has flipped to heads 5 times!")
            } else if (attempts > 100) {
                reject("We will sit here all day if you continue to flip this coin!")
            }
                
            
        }
        return `it took ${attempts} tries to flive five "heads" `
    })

fiveHeads
    .then(res => console.log(res))
    .catch(rej => console.log(rej))