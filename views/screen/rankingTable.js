import newRankingTableController from "../../controller/rankingTableController.js";
import listClub from "../../Model/rankingTable.js";
import {listRound} from "../../model/rounds.js";
import {sortRankingTable} from "../../model/rankingTable.js";


const rankingScreen =
`
<div class="flex-grow-1">
    <div class="container">
    <div class="a alert alert-secondary" role="alert">
        Mùa giải 19-20
    </div>
    <table class="table text-center">
        <thead>
        <tr style="background-color: #cecae9">
            <th scope="col">Vị trí</th>
            <th scope="col" style="text-align: left" >Đội tuyển</th>
            <th scope="col">Số trận</th>
            <th scope="col">Điểm</th>
            <th scope="col">Hiệu số</th>
        </tr>
        </thead>
        <tbody id="js-rankingTable">
            
        </tbody>
    </table>
    </div>
</div>
`;


function onload() {
    const rankingTableController = newRankingTableController();
    sortRankingTable(listClub);
    loadTable();
}

function loadTeam(team, i) {
    const rankingTable = document.getElementById('js-rankingTable')
    
    const newTeam = 
    `
    <tr>
        <th class="align-middle"  scope="row">${i}</th>
        <td  style="text-align: left !important">
            <img id = "js-img"
                src=${team.logo}
                alt=""
            />
            ${team.name}
        </td>
        <td class="align-middle" >${team.numberOfMatchesPlayed}</td>
        <td class="align-middle">${team.points}</td>
        <td class="align-middle">${team.offset}</td>
    </tr>
    `
    rankingTable.insertAdjacentHTML("beforeend", newTeam)
    
    // const imgDiv = document.getElementById("js-img");
    // imgDiv.setAttribute("src",team.logo);
}

function loadTable() {
    for (let i = 0; i< listClub.length; i++) {
        loadTeam(listClub[i], i+1)
    }
}

const ranking = {
    content: rankingScreen,
    onload: onload,
}

export default ranking