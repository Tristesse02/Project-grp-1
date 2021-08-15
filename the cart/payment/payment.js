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



