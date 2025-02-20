var me = 'Diego';

var nomeusuario = new URLSearchParams(window.location.search).get("user");
document.getElementById("nome-usuario").textContent = nomeusuario;

btnSend = document.getElementById("button-ev");
btnSend.addEventListener("click", function(e){
    inputMessage = document.getElementById("mensagem-input");
    sendMessage(inputMessage.value);
});

function sendMessage(message){
    arr = {user:me, msg:message}
    ws.send(JSON.stringify(arr));
}

function displayMessage(temp) {
    chat = document.getElementById("mensagens");

    className = "mensagem-enviada"

    if(temp.user == you)
    className = "mensagem-recebida"

    chat.innerHTML = chat.innerHTML + "<div class='"+className+"'>" + temp.msg + "</div>" 
}
