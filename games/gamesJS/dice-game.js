function rollDice() {
    let goldCoins = 0;
    for (i=0; i<10; i++) {
        const roll = Math.floor(Math.random()*6)+1;
        alert("Roll #"+(i+1)+": "+roll+"\n\nTotal Gold Coins: "+goldCoins);
        if (roll === 1) {
            alert("You rolled a 1. Game over, no more rolls!");
            break;
        } 
        else if (roll<4) {
            alert(`You rolled a ${roll}. You win nothing. Roll again.`)
        }
        else if (roll===4) {
            if (goldCoins>0) {
                goldCoins=goldCoins-1;
                alert("Rolled a 4, lose a gold coin. Roll again.")
            }
            
        }
        else if (roll===5) {
            goldCoins=goldCoins+5;
            alert("Congratulations, you win 5 gold coins! Roll again.");
        }
        else {
            goldCoins=goldCoins+6;
            alert("Congratulations, you win 6 gold coins! Roll again.");
        }
    }
    alert ("Congrats you won "+goldCoins+" gold coins total.");
}