import {loadMatchesInRound, listMatches, addMatch} from '../../Model/matches.js';
import {loadListRound} from '../../Model/rounds.js';
import {loadListClub} from '../../Model/rankingTable.js';
import newRoundController from '../../Controller/roundController.js';
import newMatchController from "../../Controller/matchesController.js";
import {updateRankingTable} from "../../Model/rankingTable.js";
import {isEqualObject} from "../../utils/object.js";

const matchScreen =
`
<br>
<br>
<br>
<div class="container" id="js-round">
</div>
`
;

const listRound = loadListRound();
const listClub = loadListClub();


function onload() {
    for(let i = 0; i < (listClub.length - 1) * 2; i++){
        AddRounds(i + 1);
    } 
    for ( let i = 1; i <= (listClub.length - 1)*2 ; i++) {
        for ( let j = 1; j <= listClub.length/2 ; j++){

            $(document).ready(function(){
                $("#" +"js-form" + "Match" + j+ "Round" + i).hide();
            });
            // clear a match
            const btnClear = document.getElementById("js-btnClear" + "Match" + j + "Round" + i);
            btnClear.addEventListener("click", function (){
                clearAMatch("js-form" + "Match" + j + "Round" + i,"js-matchId" + "Match" + j + "Round" + i, i); 
                
            });

            // save a match
            const btnSave = document.getElementById("js-btnSave" + "Match" + j + "Round" + i);
            btnSave.addEventListener("click", function (){
                saveAMatch("js-form" + "Match" + j + "Round" + i, "js-matchId" + "Match" + j + "Round" + i, i);
                $("#" +"js-form" + "Match" + j+ "Round" + i).hide();
            });

            // edit a match
            const btnEdit = document.getElementById("js-btnEdit" + "Match" + j + "Round" + i);
            btnEdit.addEventListener("click", function (){
                    $("#"+"js-form" + "Match" + j+ "Round" + i).show();
            })
        }
    }
}

function clearAMatch (idForm, idMatch, roundNo) {

    const match = {
        day : document.getElementById(idMatch+'-day').innerHTML,
        teamHome : {
            name : document.getElementById(idMatch+'-teamHome').innerHTML,
            goals : document.getElementById(idMatch+'-goalsHome').innerHTML
        },
        teamAway : {
            name : document.getElementById(idMatch+'-teamAway').innerHTML,
            goals : document.getElementById(idMatch+'-goalsAway').innerHTML
        },
        time : document.getElementById(idMatch+'-time').innerHTML
    }

    
    

    const controller = newMatchController();
    controller.removeMatch(roundNo, match);
         updateRankingTable(listClub, listRound);
    // view
    document.getElementById(idForm+'-inputDay').value = "";
    document.getElementById(idForm+'-team1').value = "";
    document.getElementById(idForm+'-team2').value = "";
    document.getElementById(idForm+'-inputGoals1').value = "";
    document.getElementById(idForm+'-inputGoals2').value = "";
    document.getElementById(idForm+'-inputTime').value = "finished";
}

function saveAMatch(idForm, idMatch, roundNo) {

    const controller = newMatchController();
    
    const previousMatch = {
        day : document.getElementById(idMatch+'-day').innerHTML,
        teamHome : {
            name : document.getElementById(idMatch+'-teamHome').innerHTML,
            goals : document.getElementById(idMatch+'-goalsHome').innerHTML
        },
        teamAway : {
            name : document.getElementById(idMatch+'-teamAway').innerHTML,
            goals : document.getElementById(idMatch+'-goalsAway').innerHTML
        },
        time : document.getElementById(idMatch+'-time').innerHTML
    }

    if (previousMatch.day === "" || previousMatch.teamHome.name === "" || previousMatch.teamHome.goals === "" || previousMatch.teamAway.name === ""
     || previousMatch.teamAway.goals === "" || previousMatch.time === "") {
         console.log("invalid input");
     }
     else {
        loadMatchesInRound(roundNo);
        console.log(listMatches);
        
        for(let i = 0;i < listMatches.length; i++){
            if (isEqualObject(listMatches[i],previousMatch)) {
                    console.log("delete : ");
                    
                 controller.removeMatch(roundNo, previousMatch);
                 break;
            }
        }
       
     }

    const match = {
        day : document.getElementById(idForm+'-inputDay').value,
        teamHome : {
            name : document.getElementById(idForm+'-team1').value,
            goals : document.getElementById(idForm+'-inputGoals1').value
        },
        teamAway : {
            name : document.getElementById(idForm+'-team2').value,
            goals : document.getElementById(idForm+'-inputGoals2').value
        },
        time : document.getElementById(idForm+'-inputTime').value
    }


    if (match.day === "" || match.teamHome.name === "" || match.teamHome.goals === "" || match.teamAway.name === ""
     || match.teamAway.goals === "" || match.time === "") {
         console.log("invalid input");
     }
     else {
    controller.addMatch(roundNo, match);
         updateRankingTable(listClub, listRound);
    }
}


function AddRounds(index) {
    
    const rounds = document.getElementById('js-round')
    const newRound = 
    `
    <table class="table mt-5">
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
    
    
    let id='js-matchRound'+index;
    let idx = "js-btnSave" + index;

    addMatches(id, index);
    // const roundController = newRoundController();
    // roundController.addRound(index);
}

const editorMatches = {
    content: matchScreen,
    onload: onload
}


const timeAttribute = ["bg-info","bg-success"]


function addFormMatch(id, indexMatch, indexRound , match) { 
    const matches = document.getElementById(id);
    const formId = "js-form" + "Match" + indexMatch + "Round" + indexRound; 
    const btnEditId = "js-btnEdit" + "Match" +indexMatch + "Round" + indexRound; 
    const btnClearId = "js-btnClear" + "Match" + indexMatch + "Round" + indexRound;
    const btnSaveId = "js-btnSave" + "Match" + indexMatch + "Round" + indexRound;
    const matchId = "js-matchId" + "Match" + indexMatch + "Round" + indexRound;
    
    const newformInputMatch = `
    <div>
    <form >
        <span class = "mt-4 mr-5 font-weight-bold">${indexMatch}</span>
        <div class="btn-group ml-5 mt-4 mb-4" role="group" aria-label="Basic example">
                <button id = ${btnClearId} type="button" class="btn btn-danger mt-3 mb-2" >Clear</button>
                <button id = ${btnEditId} type="button" class="btn btn-secondary mt-3 mb-2">Edit</button>
        </div>
        
        <div id = ${formId} class="form-row">
            
            <div class="form-group col-md-1">
                <label for="inputDay">Ngày</label>
                <input type="text" name="day" class="form-control" id="${formId}-inputDay">
            </div>
            <div class="form-group col-md-3">
            <label for="team1"> Team Home</label>
            <select id="${formId}-team1" name ="team1" class="form-control">
                <option>${listClub[0].name}</option>
                <option>${listClub[1].name}</option>
                <option>${listClub[2].name}</option>
                <option>${listClub[3].name}</option>
                <option>${listClub[4].name}</option>
                <option>${listClub[5].name}</option>
                <option>${listClub[6].name}</option>
                <option>${listClub[7].name}</option>
                <option>${listClub[8].name}</option>
                <option>${listClub[9].name}</option>
                <option>${listClub[10].name}</option>
                <option>${listClub[11].name}</option>
                <option>${listClub[12].name}</option>
                <option>${listClub[13].name}</option>
                <option>${listClub[14].name}</option>
                <option>${listClub[15].name}</option>
                <option>${listClub[16].name}</option>
                <option>${listClub[17].name}</option>
                <option>${listClub[18].name}</option>
                <option>${listClub[19].name}</option>
            </select>
            </div>
            <div class="form-group col-md-1">
            <label for="inputGoals1">Goals 1</label>
            <input type="text" name="inputGoals1" class="form-control" id="${formId}-inputGoals1">
            </div>
            <div class="form-group col-md-1">
            <label for="inputGoals2">Goals 2</label>
            <input type="text" name="inputGoals2" class="form-control" id="${formId}-inputGoals2">
            </div>
            <div class="form-group col-md-3">
            <label for="team2">Team Away</label>
            <select id="${formId}-team2" name="team2" class="form-control">
                <option>${listClub[0].name}</option>
                <option>${listClub[1].name}</option>
                <option>${listClub[2].name}</option>
                <option>${listClub[3].name}</option>
                <option>${listClub[4].name}</option>
                <option>${listClub[5].name}</option>
                <option>${listClub[6].name}</option>
                <option>${listClub[7].name}</option>
                <option>${listClub[8].name}</option>
                <option>${listClub[9].name}</option>
                <option>${listClub[10].name}</option>
                <option>${listClub[11].name}</option>
                <option>${listClub[12].name}</option>
                <option>${listClub[13].name}</option>
                <option>${listClub[14].name}</option>
                <option>${listClub[15].name}</option>
                <option>${listClub[16].name}</option>
                <option>${listClub[17].name}</option>
                <option>${listClub[18].name}</option>
                <option>${listClub[19].name}</option>
            </select>
            </div>
            <div class="form-group col-md-2">
            <label for="inputTime">Thời gian</label>
            <input type="text" name="inputTime" value = "finished" class="form-control" id="${formId}-inputTime">
            </div>
            <div class="btn-group ml-5 mt-4 mb-4" role="group" aria-label="Basic example">
                <button id = ${btnSaveId} type="button" class="btn btn-success">Save</button>
            </div>
        </div>
        
    </form>
    <div>
        <div id = ${matchId} class="form-row">
            <div class = "form-row">
                <label for="day">Ngày:  </label>
                <div name = "day" id = "${matchId}-day" class ="ml-5 mr-5 text-info font-weight-bold">${match !== undefined? match.day : ""}</div>
            </div>
            <div class = "form-row">
                <label for="teamHome">Team Home:    </label>
                <div name="teamHome" id = "${matchId}-teamHome" class ="ml-5 mr-5 text-info font-weight-bold">${match !== undefined ? match.teamHome.name : ""}</div>
            </div>
            <div class = "form-row">
                <label for="goalsHome">Goals 1:  </label>
                <div name="goalsHome" id ="${matchId}-goalsHome" class ="ml-5 mr-5 text-info font-weight-bold">${match !== undefined? match.teamHome.goals:""}</div>
            </div>
            <div class = "form-row">
                <label for="goalsAway">Goals 2: </label>
                <div name="goalsAway" id ="${matchId}-goalsAway" class ="ml-5 mr-5 text-info font-weight-bold" >${match!==undefined?match.teamAway.goals:""}</div>
            </div>
            <div class = "form-row">
                <label for="teamAway">Team Away:</label>
                <div name="teamAway" id="${matchId}-teamAway" class ="ml-5 mr-5 text-info font-weight-bold" >${match!==undefined?match.teamAway.name:""}</div>
            </div>
            <div class = "form-row">
                <label for="time">Thời gian:</label>
                <div name="time" id ="${matchId}-time" class ="ml-5 mr-5 text-info font-weight-bold">${match!==undefined?match.time:""}</div>
            </div>
        </div>
    </div>
    </div>
    `;
    matches.insertAdjacentHTML("beforeend", newformInputMatch);
}

function loadMatch(id, match) {
    const matches = document.getElementById(id)
    
}

function loadMatches(id, index) {
    loadMatchesInRound(index)
    
    for (let i = 0; i< listMatches.length; i++) {
        loadMatch(id, listMatches[i])
    }    
}

function addMatches(id, indexRound) {
    loadMatchesInRound(indexRound);
    
    
    for(let i = 1; i <= 10;i++){
        addFormMatch(id, i, indexRound, listMatches[i-1]);  
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

export default editorMatches;
export {loadMatches}