import {removeMatch, addMatch} from "../model/matches.js";


function newMatchController() {
    const controller = {};
    controller.addMatch = function (roundNo, match) {
        addMatch(roundNo, match);
    }
    controller.removeMatch = function (roundNo, match) {
        removeMatch(roundNo, match);
    }
    return controller;
}

export default newMatchController;