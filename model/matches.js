
import {listRound,format} from "./rounds.js";
import listClub from "./rankingTable.js";   


let listMatches=[];

function loadMatchesInRound(index) {
    listMatches = listRound[index-1].matches;
}



export function addMatch (roundNo, match) {
    db.collection("matches").doc("round_" + format(roundNo)).update(
        {
            matches : firebase.firestore.FieldValue.arrayUnion(match)
        }
    )
}

const match = {
    day  : "10/08",
    time : "finished",
    teamHome : {
        name : "Man. City",
        goals : "6"
    },
    teamAway : {
        name :"Man. United",
        goals : "1"
    }
}


export function removeMatch(roundNo,match) {
    db.collection("matches").doc("round_" + format(roundNo)).update(
        {
            matches : firebase.firestore.FieldValue.arrayRemove(match)
        }
    )
}


export function updateMatchList(matchList){
    for(let i = 0;i < matchList.length; i++) {
        updateMatch(matchList[i]);
    }
}

export {loadMatchesInRound, listMatches}
