import view from "./views/view.js";
import screen from "./views/screen/index.js";
import match from "./views/screen/matches.js";
import "./model/rankingTable.js";
import "./model/matches.js";
import "./model/rounds.js";

window.onload = function() {
    view.setScreen(screen, "header");
    const btnMatch = document.getElementById('js-btnMatch');
    btnMatch.classList.remove("btn-secondary");
    btnMatch.classList.add("btn-light");
    view.setScreen(match, "app");
}