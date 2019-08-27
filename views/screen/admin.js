import view from "../view.js";
import match from "./matches.js";
import ranking from "./rankingTable.js";
import news from "./news.js";
import teams from "./clubs.js";
import screen from "./index.js";
import editor from "./editor.js"
// import screen from "../../views/screen/index.js";


const adminPage = `

<div>
    <div class="d-flex flex-column">
        <div class="header bg-secondary text-white text-center">         
            <div> 
            <h2 style="margin-top:10px">Premier League </h2>  
            </div>
            <div class="btn-group btn-group-lg d-flex" role="group" aria-label="...">
                <button id="js-btnMatch" type="button" class="btn btn-secondary font-weight-light">Trận đấu</button>
                <button id="js-btnNews" type="button" class="btn btn-secondary font-weight-light">Tin tức</button>
                <button id="js-btnRanking" type="button" class="btn btn-secondary font-weight-light">Bảng xếp hạng</button>
                <button id="js-btnTeam" type="button" class="btn btn-secondary font-weight-light">Câu lạc bộ</button>
                <button id="js-btnEditor" type="button" class="btn btn-secondary font-weight-light">Chỉnh sửa</button>
                <span><button id="js-btnLogOut" class="btn btn-outline-light flex-grow-1 mr-3 mb-2"> Đăng xuất </button></span> 
            </div>

        </div>   
    </div>
</div>


`;

function onload() {
    const formLogin = document.getElementById("js-formLogin");
    const btnMatch = document.getElementById('js-btnMatch');
    btnMatch.addEventListener('click', function() {
        view.setScreen(match, 'app')
    })
    const btnRanking = document.getElementById('js-btnRanking');
    btnRanking.addEventListener('click', function() {
        view.setScreen(ranking, 'app')
    })
    const btnNews = document.getElementById('js-btnNews');
    btnNews.addEventListener('click', function() {
        view.setScreen(news, 'app')
    })
    const btnTeams = document.getElementById('js-btnTeam');
    btnTeams.addEventListener('click', function() {
        view.setScreen(teams, 'app')
    })
    const btnLogOut = document.getElementById("js-btnLogOut");
    btnLogOut.addEventListener("click", function (){
        view.setScreen(screen, "header");
    })
    const btnEditor = document.getElementById("js-btnEditor");
    btnEditor.addEventListener("click", function (){
            view.setScreen(editor, "app")
    })
}



const admin = {
    content: adminPage,
    onload: onload
}

export default admin;