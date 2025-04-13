function bill() {
    var Idli=parseInt(document.getElementById("Idli").value)*30;
    var Vada=parseInt(document.getElementById("Vada").value)*15;
    var Dosa=parseInt(document.getElementById("Dosa").value)*50;
    var Bisibelebath=parseInt(document.getElementById("Bisibelebath").value)*40;
    var Mosaranna=parseInt(document.getElementById("Mosaranna").value)*30;
    var Omlet=parseInt(document.getElementById("Omlet").value)*30;
    var total= Idli + Dosa + Vada + Bisibelebath + Mosaranna + Omlet;

    var bill = document.getElementById("total");
   bill.innerHTML = ("Total bill is: " + total + " Rs");
}