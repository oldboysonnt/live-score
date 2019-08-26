const loginScreen = `
<div class="container">
  <div class="row">
    <div class="col-sm">
    </div>
    <div class="col-sm">
    <br />
    <br />
    <h2> Đăng nhập </h2>
    <form id = "js-formLogin">
        <br />
        <div id = "failedLogin-alert"></div>
        <div class="form-group">
            <label for="email"><strong>Email address</strong></label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email...">     
        </div>
        <div class="form-group">
            <label for="password"><strong>Mật khẩu</strong></label>
            <input type="password" class="form-control" id="password" aria-describedby="emailHelp" placeholder="Hãy nhập mật khẩu...">
        </div>
        <br />
        <br />
        <button type="submit" class="btn btn-primary btn-lg btn-block">Đăng nhập</button>
        <div id = "js-loadingToInside" class ="text-center m-5"></div>
    </form> 
    </div>
    <div class="col-sm">
 
    </div>
  </div>
</div>  
`
function onload(){

}

const login = {
    content : loginScreen,
    onload : onload
}

export default login;