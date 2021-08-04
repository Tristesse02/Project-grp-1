var btn=document.getElementById('btn');
var message=document.getElementById('message');

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

btn.addEventListener('click',function(){
    let ip_name=document.getElementById('ip_name').value;
    let ip_hotel=document.getElementById('ip_hotel').value;
    let name_stat=data.findIndex(function(item){return item.manager==ip_name});
    let hotel_stat=data.findIndex(function(item){return item.hotel_name==ip_hotel});
    console.log(name_stat);
    console.log(hotel_stat)
    if (name_stat==hotel_stat && name_stat!=-1 && hotel_stat!=-1){
        page_redirect('info_layout.html');
        console.log('abc')
    }
    else{
        message.style.display='block';
        console.log('xyz')
    }
});
