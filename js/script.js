// 1 тапсырма //
let ailar = prompt("1-ден 12-ге дейн сан енгизиниз:")

switch (true) {
    case (ailar>2 && ailar <6):
        alert("Spring")
        break;
    case (ailar>5 && ailar <9):
            alert("Summer")
        break;
    case (ailar>8 && ailar <12):
            alert("autumn")
        break;
    case (ailar>11 && ailar <13 && ailar>0 && ailar<3):
            alert("Winter")
        break;
    default:
        alert("Сиз талапка сай енгизбединиз")
        break;
}


// 2 тапсырма //


let san1 = +prompt("Биринши санды енгизиниз:")
let san2 = +prompt("Екинши санды енгизиниз:")

if(san1 > san2){
    alert("1 ши сан 2 шисинен улкен")
}else if(san1 < san2){
    alert("1 ши сан 2 шисинен киши")
}
else{
    alert("1 ши сан мен 2 ши сан тен болса")
}
alert("Еки саннын ортасы:" +(san1+san2)/2)

// 3 тапсырма //

var a = prompt("1 санды енгиз")
var b = prompt("2 санды енгиз")
var c = prompt("3 санды енгиз")

var min, max;

if (a>b && c>a && c<b) {
    min = b;
    max = a;
    max = c
}