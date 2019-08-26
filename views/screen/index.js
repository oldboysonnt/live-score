import view from "../view.js";
import match from "./matches.js";
import ranking from "./rankingTable.js";
import news from "./news.js";
import teams from "./clubs.js";
import messages from "../messages.js";
import newAuthController from "../../controller/authController.js";
import { responseCode } from '../../controller/response.js';
import editorScreen from "./editorIndex.js";

const screenPage = `

<div>
    <div class="d-flex flex-column">
        <div class="header bg-secondary text-white text-center">         
                <h2 style="margin-top:10px">Premier League </h2>
            <div class="btn-group btn-group-lg d-flex ml-5" role="group" aria-label="...">
                <button id="js-btnMatch" type="button" class="btn btn-secondary font-weight-light">Trận đấu</button>
                <button id="js-btnNews" type="button" class="btn btn-secondary font-weight-light">Tin tức</button>
                <button id="js-btnRanking" type="button" class="btn btn-secondary font-weight-light">Bảng xếp hạng</button>
                <button id="js-btnTeam" type="button" class="btn btn-secondary font-weight-light">Câu lạc bộ</button>
                <span><button id="js-btnLogin" class="btn btn-outline-light ml-5 mr-3 mb-2" data-toggle="modal" data-target="#modal_login"> Đăng nhập</button></span>
                
            </div>
            <div id = "modal_login" class="modal" tabindex="-1" role="dialog">
               <div class="modal-dialog" role="document">
                  <div class="modal-content">
                     <div class="modal-body">
                        <div id = "js-failedLoginAlert"></div>
                        <form id = "js-formLogin">
                           <div class="form-group">
                                <label for="email"><strong>Email address</strong></label>
                                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Nhập email...">     
                           </div>
                           <div class="form-group">
                                <label for="password"><strong>Mật khẩu</strong></label>
                                <input type="password" class="form-control" id="password" aria-describedby="emailHelp" placeholder="Hãy nhập mật khẩu...">
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal"> Đóng </button>
                                <button type="submit" class="btn btn-primary"> Đăng nhập </button>
                            </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
        </div>   
    </div>
</div>
`;

function onload() {
    const formLogin = document.getElementById("js-formLogin");
    const btnMatch = document.getElementById('js-btnMatch');
    btnMatch.addEventListener('click', function() {
        removeLightUpTabs();
        btnMatch.classList.remove("btn-secondary");
        btnMatch.classList.add("btn-light");
        view.setScreen(match, 'app')
    })
    const btnRanking = document.getElementById('js-btnRanking');
    btnRanking.addEventListener('click', function() {
        removeLightUpTabs();
        btnRanking.classList.remove("btn-secondary");
        btnRanking.classList.add("btn-light");
        view.setScreen(ranking, 'app')
    })
    const btnNews = document.getElementById('js-btnNews');
    btnNews.addEventListener('click', function() {
        removeLightUpTabs();
        btnNews.classList.remove("btn-secondary");
        btnNews.classList.add("btn-light");
        view.setScreen(news, 'app')
    })
    const btnTeams = document.getElementById('js-btnTeam');
    btnTeams.addEventListener('click', function() {
        removeLightUpTabs();
        btnTeams.classList.remove("btn-secondary");
        btnTeams.classList.add("btn-light");
        view.setScreen(teams, 'app')
    })
    const btnLogin = document.getElementById("js-btnLogin");
    btnLogin.addEventListener("click", function (){
        formLogin.addEventListener("submit",async function (event){
            
            event.preventDefault();
            const loginPayload = {
                email: formLogin.email.value,
                password: formLogin.password.value
            };
            clearErrors();
            const authController = newAuthController();
            const response = await authController.login(loginPayload);
            if(response.type === 'failure'){
                switch(response.code){
                    case responseCode.auth.login.invalid_input:
                        showErrors(response.data);
                        break;
                    case responseCode.auth.login.incorrect_info:
                        showInvalidMessage(response.data);
                        break;
                }
            } else {
                switch(response.code){
                    case responseCode.auth.login.success:
                        $('#modal_login').modal('hide')
                        view.setScreen(editorScreen, "header");             
                        break;
                }
            }
        })
    })
}

function removeLightUpTabs() {
    const lightUpTabs = document.getElementsByClassName("btn-light");
   while (lightUpTabs.length > 0){
        lightUpTabs[0].classList.remove("btn-light");
    }
}

function showErrors(errors){
    const fields = Object.keys(errors);
    for(let i = 0;i < fields.length; i++){
        const field = fields[i];
        const input = document.getElementById(field);
        input.classList.add("is-invalid");
        
        const inputParent = input.parentElement;
        for(let j = 0; j < errors[field].length;j++){
            const error = errors[field][j];
            const errorFeedback = document.createElement("div");
            errorFeedback.setAttribute("class", "invalid-feedback");
            errorFeedback.innerHTML = messages.errorsLogin[field][error.message];
            inputParent.appendChild(errorFeedback);
        }
    }
}

function showInvalidMessage(invalid_message){
    if(invalid_message.code === "auth/user-not-found"){
        const alertContent = `
    <div class="alert alert-danger" role="alert">
           Tài khoản không tồn tại. 
    </div>
    `;
    document.getElementById("js-failedLoginAlert").innerHTML = alertContent;
    } else {
        const alertContent = `
        <div class="alert alert-danger" role="alert">
               Mật khẩu không chính xác.
        </div>
        `;
    document.getElementById("js-failedLoginAlert").innerHTML = alertContent;
    }
}



function clearErrors(){
    const errorFeedbacks = document.getElementsByClassName("invalid-feedback");
    while(errorFeedbacks.length > 0){
        errorFeedbacks[0].remove();
    }
    const inputs = document.getElementsByClassName("is-invalid");
    while(inputs.length > 0){
        inputs[0].classList.remove("is-invalid");
    }
}

const screen = {
    content: screenPage,
    onload: onload
}

export default screen;