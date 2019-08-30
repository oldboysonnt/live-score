import {updateMatchList} from "./matches.js";
import { updateRankingTable , sortRankingTable} from "./rankingTable.js";

let listRound = [];
let listClub = [];

db.collection("matches").onSnapshot(function (snapShot) {
    const rounds = snapShot.docChanges();
    for (let i = 0; i < rounds.length; i++) {
        const round = rounds[i].doc.data();
        
        listRound.push(round) ;
    }
    rankingTableRef.onSnapshot(function (snapShot) {
        const tables = snapShot.docChanges();
        for (let i = 0; i < tables.length; i++) {
            const club = tables[i].doc.data();
            if(listClub.length < 20) {
                listClub.push(club)  ;
            }
        }
       // updateRankingTable(listClub, listRound);
    });
}); 




let rankingTableRef = db.collection("rankingTable");
let matchesRef = db.collection("matches");

export function format (c) {
    if (c < 10) return   "0" + c;
    else return c;
}

export function addRound(c) {
    db.collection("matches").doc("round_" + format(c)).set({
        matches : []
    });
}


function updateRounds(){
    for(let i = 0; i < listRound.length; i++){
        updateMatchList(listRound[i].matches);
        db.collection("matches").doc("round_" + i + 1).set({
            matches : listRound[i].matches
        });
    }
    
}


export function removeRound(c) {
    db.collection("matches").doc("round_" + format(c)).delete();
}


export function loadListRound() {
    return listRound;
}


export {listRound} ;