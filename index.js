// code your solution here
function superbowlWin(winRecord){
    for(const winStatus of winRecord){
        if(winStatus.result === "W"){
            return winStatus.year;
        }
    }
}

record.find(superbowlWin())