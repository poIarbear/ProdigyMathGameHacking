(() => {
    const cachedStuffLmao = [];
    const biggieM = hack.instance.prodigy.gameContainer.inversifyContainer._bindingDictionary._map;
    for (let item of biggieM) {
        const key = item[0];
        const value = item[1][0].cache;
        cachedStuffLmao.push([key, value])
    }
    const hackedMessages = ["Hacker!", "Natsumi", "Unexpected Will", "Arc", "Yama", "Whimpers", "Bear", "Ugh, It's Divine", "Hey whats up fucker?", "I shit in your mother.", "Mike is a retard."];
    
    cachedStuffLmao[20][1].addPhrases(hackedMessages)
})()
