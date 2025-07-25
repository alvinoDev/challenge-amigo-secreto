let friends = [];

function addFriend() {
    let friend = document.getElementById("amigo").value;
    if(friend.length > 0) {
        friends.push(friend);
        document.getElementById("amigo").value = "";
        showFriends();
    } else {
        alert("Por favor, ingresa un nombre.");
    }
}

function showFriends() {
    let list = document.getElementById("listaAmigos");
    list.innerHTML = "";
    for(let i = 0; i < friends.length; i++) {
        let li = document.createElement("li");
        li.textContent = friends[i];
        list.appendChild(li);
    }
}

function sortearAmigo() {
    if(friends.length > 1) {
        let amigo = friends[Math.floor(Math.random() * friends.length)];
        document.getElementById("resultado").textContent = "El amigo secreto es: " + amigo;
    } else {
        alert("Por favor, ingresa al menos dos nombres.");
    }
}

addEventListener("keypress", function(event) {
    if(event.key === "Enter") {
        addFriend();
    }
});