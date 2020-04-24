// This is a piece of an RPG engine I've wanted to build for a while, where the player gets a "card" with a score for the group, and a score for themselves. 
// Normally (but not always) these two scores are to some extent in competition.
// console logs just for keeping an eye on which bits were and weren't working as I was building.


var groupTotal = 0;
var personalTotal = 0;

document.getElementById("currentGroupScore").innerHTML = groupTotal;
document.getElementById("currentPersonalScore").innerHTML = personalTotal;

// console.log("Group score is " + groupTotal);
// console.log("Personal score is " + personalTotal);

function drawACard() {
    let groupScore = Math.round((Math.random()*10)-5);
        // console.log("groupScore is " + groupScore); 

    let slide = Math.round((Math.random()*8)-4); 
        // console.log("slide is " + slide);
        
    let personalScore = ((groupScore*-1) + slide);
        if(personalScore>5 || personalScore<-5) {
            personalScore = Math.round(personalScore/2.5)
    };
        // console.log("personalScore is " + personalScore);

        document.getElementById("groupScore").innerHTML = groupScore;
        document.getElementById("personalScore").innerHTML = personalScore;

  
    groupTotal = groupTotal+groupScore;
    personalTotal = personalTotal+personalScore;
    // console.log("NEW GROUP SCORE IS " + groupTotal);
    // console.log("NEW PERSONAL SCORE IS " + personalTotal);
    document.getElementById("currentGroupScore").innerHTML = groupTotal;
    document.getElementById("currentPersonalScore").innerHTML = personalTotal;

    if(personalTotal <= -20) {
        alert("You died!");
        personalTotal = 0;
    } else if(groupTotal >= 20) {
        alert("You won!");
        groupTotal = 0;
    } else if (personalTotal >= 20) {
        alert("You grew as a person!")
        personalTotal = 0;
    } else if(groupTotal <= -20) {
        alert("You lost!");
        groupTotal = 0;
    }
}





