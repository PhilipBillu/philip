const game = [ "STONE", "PAPER", "SCISSOR" ];
console.log("\tSTONE PAPER SCISSORS GAME");
var one = 1;
while (one == 1) {
    var ch = prompt("YOUR CHOICE   : ");
    var yes = 0;
    for (i = 0; i < game.length; i++) {
        if (ch.toUpperCase()==(game[i])) {
            yes=1;
            break;
        }
    }
    if (yes == 1) {
        var sch = Math.floor(Math.random()*3);
        console.log("SYSTEM CHOICE : " + game[sch]);
        if (ch.toUpperCase()==("STONE") && game[sch]==("PAPER")) {
            console.log("\t\"System WINS\"");
        } else if (ch.toUpperCase()==("STONE") && game[sch]==("SCISSOR")) {
            console.log("\t\"YOU WIN\"");
        } else if (ch.toUpperCase()==("SCISSOR") && game[sch]==("STONE")) {
            console.log("\t\"System WINS\"");
        } else if (ch.toUpperCase()==("SCISSOR") && game[sch]==("PAPER")) {
            console.log("\t\"YOU WIN\"");
        } else if (ch.toUpperCase()==("PAPER") && game[sch]==("SCISSOR")) {
            console.log("\t\"System WINS\"");
        } else if (ch.toUpperCase()==("PAPER") && game[sch]==("STONE")) {
            console.log("\t\"YOU WIN\"");
        } else if (ch.toUpperCase()==(game[sch])) {
            console.log("\tDraw");
        }
    } else {
        console.log("\tInvalid input");
    }
    one = prompt("ARE YOU READY[press 1] (or) EXIT[press 2] : ");
}