

let listClub = [];

let rankingTableRef = db.collection("rankingTable");
let matchesRef = db.collection("matches");



rankingTableRef.onSnapshot(function (snapShot) {
    const tables = snapShot.docChanges();

    for (let i = 0; i < tables.length; i++) {
        const club = tables[i].doc.data();
        if(listClub.length < 20) {
            listClub.push(club)  ;
        }
    }
});



export function updateRankingTable( listClub, listRound ){

    // update ranking table
    for(let i = 0;i < listClub.length; i ++){
        listClub[i].points = 0;
        listClub[i].offset = 0;
        listClub[i].numberOfMatchesPlayed = 0;
        for(let j = 0;j < listRound.length; j++){
            for(let k = 0; k < listRound[j].matches.length; k ++){
                if(listRound[j].matches[k].status === "finished"){
                    if ( listClub[i].name === listRound[j].matches[k].teamAway.name ){
                            if( listRound[j].matches[k].teamAway.goals > listRound[j].matches[k].teamHome.goals ) {
                                listClub[i].points += 3;
                            }
                            else if ( listRound[j].matches[k].teamAway.goals === listRound[j].matches[k].teamHome.goals ) {
                                listClub[i].points += 1;
                            }
                            listClub[i].offset += listRound[j].matches[k].teamAway.goals - listRound[j].matches[k].teamHome.goals;
                            listClub[i].numberOfMatchesPlayed++;
                    } 
                    else if ( listClub[i].name === listRound[j].matches[k].teamHome.name ){
                            if( listRound[j].matches[k].teamAway.goals < listRound[j].matches[k].teamHome.goals ) {
                                listClub[i].points += 3;
                            }
                            else if ( listRound[j].matches[k].teamAway.goals === listRound[j].matches[k].teamHome.goals ) {
                                listClub[i].points += 1;
                            }
                            listClub[i].offset += listRound[j].matches[k].teamHome.goals - listRound[j].matches[k].teamAway.goals;
                            listClub[i].numberOfMatchesPlayed++;
                    }
                }
            }
        }     
        // save to firebase
        
        rankingTableRef.doc(listClub[i].name).set (
            listClub[i]
        );
    }
}

export function sortRankingTable(table) {
    table.sort(function(a,b){
        if(a.points > b.points) { return -1;}
        else if(a.points < b.points){return 1;}
        if(a.points === b.points) {
            if(a.offset > b.offset ) return -1;
            else if (a.offset < b.offset) {
                return 1;
            }
        }
    });
    return table;
}



export default listClub;



