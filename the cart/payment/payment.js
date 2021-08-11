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

// var c = document.getElementsByClassName("inp-sec");
// var d = document.getElementsByClassName("expiration");
// var e = document.getElementsByClassName("CV-code");
// var f = document.getElementsByClassName("amount");
// var b = document.querySelectorAll("#warn-body-content-fullName");
// console.log(c[0].value.length);
// console.log(d);
// function submit(){
//     var nameValue = c[0].value;
//     if(nameValue.length == 0){
//         b[i].innerHTML = "These space must be filled*";
//         console.log(b);
//     }
//     return;
// }
// var c = document.querySelector("#checkbox");
// console.log(c);

