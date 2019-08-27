

let listClub = [];

let rankingTableRef = db.collection("rankingTablePL");
let matchesRef = db.collection("matches");



rankingTableRef.onSnapshot(function (snapShot) {
    const tables = snapShot.docChanges();
    const table = tables[0].doc.data();
    let listClubName = Object.keys(table);
        
    for (let i = 0; i < listClubName.length; i++) {
        const club = table[listClubName[i]];
        if(listClub.length < 20) {
            listClub.push(club)  ;
        }
    }
    
    // db.collection("rankingTablePL").doc("Q0LMSDb53FFAfO4YwkDa").set(
    //     {
    //     Arsenal : listClub.find(function (team) { return team.name === "Arsenal"}),
    //     Liverpool : listClub.find(function(team){ return team.name === "Liverpool"}),
    //     Man_City : listClub.find(function(team){ return team.name === "Man. City"}),
    //     Leicester_City :  listClub.find(function(team){ return team.name === "Leicester City"}),
    //     Man_United : listClub.find(function(team){ return team.name === "Man. United"}),
    //     Burnley_FC : listClub.find(function(team){ return team.name === "Burnley FC"}),
    //     Tottenham : listClub.find(function(team){ return team.name === "Tottenham"}),
    //     Brighton : listClub.find(function(team){ return team.name === "Brighton"}),
    //     Sheff_Utd : listClub.find(function(team){ return team.name === "Sheff Utd"}),
    //     Crystal_Palace : listClub.find(function(team){ return team.name === "Crystal Palace"}),
    //     Bournemouth : listClub.find(function(team){ return team.name === "Bournemouth"}),
    //     Everton : listClub.find(function(team){ return team.name === "Everton"}),
    //     Chelsea : listClub.find(function(team){ return team.name === "Chelsea"}),   
    //     West_Ham : listClub.find(function(team){ return team.name === "West Ham"}),
    //     Wolves : listClub.find(function(team){ return team.name === "Wolves"}),
    //     Aston_Villa : listClub.find(function(team){ return team.name === "Aston Villa"}),
    //     Norwich_City : listClub.find(function(team){ return team.name === "Norwich City"}),
    //     Southampton : listClub.find(function(team){ return team.name === "Southampton"}),
    //     Newcastle : listClub.find(function(team){ return team.name === "Newcastle"}),
    //     Watford : listClub.find(function(team){ return team.name === "Watford"}),
    //     }
    // );
});



export function  updateRankingTable( listClub, listRound ){

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
    }

    // save to firebase
    rankingTableRef.doc("Q0LMSDb53FFAfO4YwkDa").set (
        {
        Arsenal : listClub.find(function (team) { return team.name === "Arsenal"}),
        Liverpool : listClub.find(function(team){ return team.name === "Liverpool"}),
        Man_City : listClub.find(function(team){ return team.name === "Man. City"}),
        Leicester_City :  listClub.find(function(team){ return team.name === "Leicester City"}),
        Man_United : listClub.find(function(team){ return team.name === "Man. United"}),
        Burnley_FC : listClub.find(function(team){ return team.name === "Burnley FC"}),
        Tottenham : listClub.find(function(team){ return team.name === "Tottenham"}),
        Brighton : listClub.find(function(team){ return team.name === "Brighton"}),
        Sheff_Utd : listClub.find(function(team){ return team.name === "Sheff Utd"}),
        Crystal_Palace : listClub.find(function(team){ return team.name === "Crystal Palace"}),
        Bournemouth : listClub.find(function(team){ return team.name === "Bournemouth"}),
        Everton : listClub.find(function(team){ return team.name === "Everton"}),
        Chelsea : listClub.find(function(team){ return team.name === "Chelsea"}),   
        West_Ham : listClub.find(function(team){ return team.name === "West Ham"}),
        Wolves : listClub.find(function(team){ return team.name === "Wolves"}),
        Aston_Villa : listClub.find(function(team){ return team.name === "Aston Villa"}),
        Norwich_City : listClub.find(function(team){ return team.name === "Norwich City"}),
        Southampton : listClub.find(function(team){ return team.name === "Southampton"}),
        Newcastle : listClub.find(function(team){ return team.name === "Newcastle"}),
        Watford : listClub.find(function(team){ return team.name === "Watford"}),
        }
    );
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



