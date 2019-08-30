import {addRound, removeRound} from "../model/rounds.js";

function newRoundController(){
    const controller = {};
    controller.addRound = function (c){
        addRound(c);
    }
    controller.removeRound = function (c) {
        removeRound(c);
    }
    return controller;
}

export default newRoundController;