import {listRound,addRound, removeRound} from "../model/rounds.js";

function newRoundController(){
    const controller = {};
    controller.addRound = function (){
        addRound(listRound.length + 1);
    }
    controller.removeRound = function () {
        removeRound(listRound.length);
    }
}