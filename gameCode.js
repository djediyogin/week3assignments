function playCraps(){
    //playCraps() is a function used to simulate a craps game
    //use for the week 3 assignment*/
     console.log("playCraps() started");
    //roll the dice, display the result
    var die1 = 1 + Math.floor(6 * Math.random());
    console.log(die1);
    document.getElementById("die1Res").innerHTML = die1;
    var die2 = Math.ceil(6 * Math.random());
    console.log(die2);
    document.getElementById("die2Res").innerHTML = die2;
        if (die1 < 1 || die1 > 6) {
            console.log("fails test, figure it out!!!!!!!!!!!!!!!")
        }
    //find sum of the two dice, display the result
    var sum = die1 + die2;
    console.log(sum);
    document.getElementById("sumRes").innerHTML = sum;


    //if sum equals 7 or 11, they lose
        if(sum == 7 || sum == 11){
            document.getElementById("finRes").innerHTML = "you lose! shoot again";

        } else if(die1 == die2 && die1%2 == 0){
        document.getElementById("finRes").innerHTML = "you win! the force is with you today";
        //otherwise, they draw
    }else{document.getElementById("finRes").innerHTML = "you have a draw. try again.";}

    
}