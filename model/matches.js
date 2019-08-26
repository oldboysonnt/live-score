
import {listRound} from "./rounds.js";
    


let listMatches=[];

function loadMatchesInRound(index) {
    listMatches = listRound[index-1].matches;
}



export function addMatch (roundNo, match) {
    db.collection("matches").doc("round_" + roundNo).update(
        {
            matches : firebase.firestore.FieldValue.arrayUnion(match)
        }
    )
}

export function removeMatch(roundNo,match) {
    db.collection("matches").doc("round_" + roundNo).update(
        {
            matches : firebase.firestore.FieldValue.arrayRemove(match)
        }
    )
}

function updateMatch(match){
    if (match.status === "finished") {
        if (match.teamAway.goals > match.teamHome.goals) {
            match.teamAway.points = 3;
            match.teamHome.points = 0;
        }
        else if (match.teamHome.goals > match.teamAway.goals) {
            match.teamAway.points = 0;
            match.teamHome.points = 3;
        }
        else {
            match.teamAway.points = 1;
            match.teamHome.points = 1;
        }
    }
}
export function updateMatchList(matchList){
    for(let i = 0;i < matchList.length; i++) {
        updateMatch(matchList[i]);
    }
}

export {loadMatchesInRound, listMatches}
