var btn=document.getElementById('btn');
var ip=document.getElementsByTagName('input');
var message=document.getElementById('message');
console.log(ip);
const data=[
    {
        manager: 'hien',
        hotel_name: 'abcxyz',
        address: 'hanoi',
        room_type_1: 'single',
        room_type_2: 'suite',
        price_type_1: 200,
        price_type_2: 300,
    }
];

function page_redirect(destination_file){
    window.location=destination_file;
}

function verify(){
    let manager=ip[0].value;
    let hotel=ip[1].value;
    let mana_stat=data.findIndex(function(item){return data.manager==manager});
    let hotel_stat=data.find(function(item){return data.hotel==hotel});
    if (mana_stat!='' && hotel_stat!=''){
        page_redirect('info_layout.html')
    }
    else{
        message.style.display='box';
    }
}

btn.addEventListener('click',verify());
