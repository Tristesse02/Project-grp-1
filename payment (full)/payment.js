// if(document.getElementsByClassName("inp").value.length ==0){
//     console.log(1);
// }
// var a = document.getElementsByClassName("inp");
// var b = document.querySelectorAll("#warn-body-content-fullName");
// console.log(a);
// function submit(){
//     var nameValue = a[0].value;
//     console.log(nameValue);
//     if(nameValue.length == 0){
//         b.innerHTML = "This space must be filled*";
//     } else {
//     alert(nameValue);
//     }
// }

var a = document.getElementsByClassName("inp");
var b = document.querySelectorAll("#warn-body-content-fullName");
console.log(a);
console.log(b);
function submit(){
    for(var i=0; i<=3; i++){
    var nameValue = a[i].value;
    if(nameValue.length == 0){
        b[i].innerHTML = "This space must be filled*";
        console.log(b);
    }
    }
    return;
}



