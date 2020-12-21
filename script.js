var deck = [2,3,4,5,6,7,8,9,10,10,10,10,11,
            2,3,4,5,6,7,8,9,10,10,10,10,11,
            2,3,4,5,6,7,8,9,10,10,10,10,11,
            2,3,4,5,6,7,8,9,10,10,10,10,11];
var playerHand = [];
var dealerHand = [];

function drawRandomCard(deck)
{
    var randomIndex = Math.floor(deck.length * Math.random());
    return deck[randomIndex];
}

function startGame()
{
    playerHand = [drawRandomCard(deck), drawRandomCard(deck)];
    dealerHand = [drawRandomCard(deck), drawRandomCard(deck)];
}

function getHandValue(hand)
{
    var sum = 0;
    for(var i = 0; i < hand.length; i++)
    {
        sum += hand[i];
    }
    return sum;
}
startGame();

console.log('Player hand: ' + playerHand);
console.log('Player hand value: ' + getHandValue(playerHand));
console.log('Dealer hand: ' + dealerHand);
console.log('Dealer hand value: ' + getHandValue(dealerHand));

function hit()
{
    playerHand.push(drawRandomCard(deck));
    console.log('More!');
    console.log('New stack: ' + playerHand);
    console.log('New hand value: ' + getHandValue(playerHand));
    document.getElementById("player-hand-value").innerHTML = getHandValue(playerHand);
    document.getElementById("player-hand").innerHTML = playerHand;
if (getHandValue(playerHand) > 21)
{
    document.getElementById("player-hand").innerHTML = playerHand;
    document.getElementById("player-hand-value").innerHTML = getHandValue(playerHand);
    document.getElementById("game-status").innerHTML = "<b>See ya in our defichento's casino next time!</b>";
}
}
function stand()
{   
if (getHandValue(playerHand) > getHandValue(dealerHand))
{
    document.getElementById("player-hand").innerHTML = playerHand;
    document.getElementById("player-hand-value").innerHTML = getHandValue(playerHand);
    document.write("<strong>Congratulations you played yourself</strong>");
}


else
{
    document.getElementById("player-hand").innerHTML = playerHand;
    document.getElementById("player-hand-value").innerHTML = getHandValue(playerHand);
    document.write("<strong>See ya in our defichento's casino next time!</strong>");
}

}
document.getElementById("player-hand").innerHTML = playerHand;
document.getElementById("player-hand-value").innerHTML = getHandValue(playerHand);
document.getElementById("dealer-hand").innerHTML = dealerHand;
document.getElementById("dealer-hand-value").innerHTML = getHandValue(dealerHand);

for(var i = 0; i < 10; i++ )
{
    if (getHandValue(dealerHand) < 17)  
    {
        dealerHand.push(drawRandomCard(deck));
        document.getElementById("dealer-hand").innerHTML = dealerHand;
        document.getElementById("dealer-hand-value").innerHTML = getHandValue(dealerHand);
    }
}

if (getHandValue(playerHand) > getHandValue(dealerHand))
{
    document.write("<strong>U WIN!!!!</strong>");
}
if (getHandValue(dealerHand)>21)
{
    document.write("<strong>U WIN!!!!</strong>");
}
