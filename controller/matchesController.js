import {removeMatch, addMatch} from "../model/matches.js";


function newMatchController() {
    const controller = {};
    controller.addMatch = function (roundNo, match) {
        addMatch(roundNo, match);
    }
    controller.removeMatch = function (roundNo) {
        removeMatch(roundNo, match);
    }
}

export default newMatchController;