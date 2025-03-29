var referintaDataBase = firebase.database().ref();
var referintacluburi = referintaDataBase.child("milan");

referintacluburi.on("child_added",club => {
    console.log(club.val().goluri)

})

function afisare( club ){
    var divCard =document.createElement("div");
    var img = document.createElement("img");
    img.src = club.imagine;

    var divContext = document.createElement("div");
    var headContext = document.createElement("h5");
    var paragraphContext = document.createElement("p");
    var goalContext = document.createElement("p");

    headerContextContext.textContext = club.nume;
    paragraphContext.textContent = club.wikipedia;
    
}