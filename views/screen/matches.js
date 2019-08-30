import {loadMatchesInRound, listMatches} from '../../Model/matches.js';
import {listRound} from '../../Model/rounds.js';
import listClub from '../../Model/rankingTable.js';



const matchScreen =
`
<br>
<br>
<br>
<div class="container" id="js-round">
    
</div>
`;


function onload() {
    for (let i = 1; i<= listRound.length; i++) {
            loadRounds(i);
    }
}

function loadRounds(index) {
    
    const rounds = document.getElementById('js-round')
    const newRound = 
    `
    <table class="table">
        <thead class="thead-dark">
        <tr>
            <th colspan="8">Vòng đấu ${index}/38</th>
        </tr>
        </thead>
        <tbody id="js-matchRound${index}">
            
        </tbody>
    </table>
    `
    rounds.insertAdjacentHTML("beforeend", newRound)
    
    let id='js-matchRound'+index
    loadMatches(id, index)

}



const matches = {
    content: matchScreen,
    onload: onload
}


const timeAttribute = ["bg-info","bg-success"]


function loadMatch(id, match) {
    const matches = document.getElementById(id)
    const newMatch =
    `
    <tr>
        <td class="bg-warning text-dark text-center"><p class ="mt-3">${match.day}</p></td>
        <td  style="text-align: right !important">
        ${match.teamHome.name}
            <img id = "js-img"
                src="${listClub.find(function (team){return team.name === match.teamHome.name}).logo}"
                alt=""
                class ="ml-5"
            />
            
        </td>
        <td><p class ="mt-3">${match.teamHome.goals}</p></td>
        <td><p class ="mt-3"> - </p></td>
        <td><p class ="mt-3">${match.teamAway.goals}</p></td>
        <td  style="text-align: left !important">
            
            <img id = "js-img"
                src="${listClub.find(function (team){return team.name === match.teamAway.name}).logo}"
                alt=""
                class ="mr-5"
            />
            ${match.teamAway.name}
        </td>
        <td class =${match.time === "finished" ? "bg-success" : "bg-info"}><p class="mt-3 text-center text-light">${match.time}</p></td>
    </tr>
    `
    matches.insertAdjacentHTML("beforeend", newMatch)
}


function loadMatches(id, index) {
    loadMatchesInRound(index)
    if (listMatches){
    for (let i = 0; i< listMatches.length; i++) {
        
        loadMatch(id, listMatches[i])
        }    
    }
    // console.log(listClub.filter(function(name) {
    //     return name === listMatches[0].teamHome
    // }))
    
}

export default matches
export {loadMatches}