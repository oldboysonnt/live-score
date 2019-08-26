import newValidator from "../utils/validator.js";
import {isEmptyObject} from "../utils/object.js";
import {newSuccessResponse,newFailureResponse,responseCode} from "./response.js";

function newAuthController(){
    const controller = {}
    controller.login = async function(loginPayload){
        const rules = {
            email:[
                {
                    rule: "notEmpty",
                    value: true 
                }
            ],
            password:[
                {
                    rule:"notEmpty",
                    value: true
                }
            ]
        };
        const validator = newValidator();
        const errors = validator.validate(loginPayload, rules);
        if(!isEmptyObject(errors)){
            return newFailureResponse(responseCode.auth.login.invalid_input, errors);
        }
        var errorsLogin = {};
        const loginResult = await firebase.auth().signInWithEmailAndPassword(loginPayload.email, loginPayload.password).catch(function(error) {
            return error;
          });
          //console.log(loginResult);
          if(Object.keys(loginResult).length === 2){
              return newFailureResponse(responseCode.auth.login.incorrect_info, loginResult);
          } else {
              return newSuccessResponse(responseCode.auth.login.success, loginResult);
          }    
    }
    // console.log(controller.register);
    return controller;
}



export default newAuthController;
