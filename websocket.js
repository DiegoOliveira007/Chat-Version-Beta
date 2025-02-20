var wsUrl = null;
var ws = null;

window.onload = function(){
wsUrl = 'ws://127.0.0.1:50000';

ws = new WebSocket(wsUrl);
connected = false;

ws.onopen = function(event) {
    console.log("Conectado!");
    arr = {user:"", msg:"Oi estou disponível!"};
    ws.send(JSON.stringify(arr));
};

ws.onmessage = function(event) {
    try{
        var temp = JSON.parse(event.data);

        if(temp.msg == "Oi, estou disponível"){
            connected = true;
        you = temp.user;
        }

        if(connected) {
            displayMessage(temp);
        }
    }catch(e){
        console.log("Ocorreu um erro!")
    }
}
    ws.onclose = function(event){
        console.log("Conexão fechada!")
    }
};