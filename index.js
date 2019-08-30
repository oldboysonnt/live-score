import view from "./views/view.js";
import screen from "./views/screen/index.js";
import match from "./views/screen/matches.js";
import editorScreen from "./views/editorScreen/editorIndex.js";
import "./model/rankingTable.js";
import "./model/matches.js";
import "./model/rounds.js";

window.onload = function() {
    // view.setScreen(screen, "header");
    view.setScreen(editorScreen,"header");
}