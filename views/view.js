const view = {}

view.setScreen = function(screen, id){
    document.getElementById(id).innerHTML = screen.content;
    screen.onload();
}

export default view;