var cf_btn=document.getElementById('cf_btn')
var ip=document.getElementsByTagName('input')
var room_type=document.getElementById('room_type')
var add=document.getElementById('+')
var data=JSON.parse(localStorage.getItem('data'));
console.log(data)
if(data==null){
    data=[];
}
console.log(data)
add.addEventListener('click',function(){
    room_type.innerHTML+=`<span class="ip_title">Room type:</span><br>
    <input type="text" placeholder="Room type" required><br>
    <span class="ip_title">Room price:</span>
    <input type="number" placeholder="The price in VND" required><br>
    <span class="ip_title">Amenities:</span><br>
    <span id='note'>Note: Please seperate your amenities by comma(s).</span>
    <input type="text" placeholder="This price includes:" required><br>`


//     var text = document.create(`<span class="ip_title">Room type:</span><br>
// <input type="text" placeholder="Room type" required><br>
// <span class="ip_title">Room price:</span>
// <input type="number" placeholder="The price in VND" required><br>
// <span class="ip_title">Amenities:</span><br>
// <span id='note'>Note: Please seperate your amenities by comma(s).</span>
// <input type="text" placeholder="This price includes:" required><br>`);
//     var div = document.createElement('div');
//     div.appendChild(text);
//     room_type.appendChild(div)
});

function page_redirect(destination_file){
    window.location=destination_file;
}

cf_btn.addEventListener('click', function(){
    let len_ip=ip.length;
    cf_room=[];
    for(let i=3;i<len_ip;i+=3){
        cf_room.push({type:ip[i].value,
            price:ip[i+1].value,
            include:ip[i+2].value.split(',')}
            )
    };
    let new_hotel={
        hotel_name:ip[0].value,
        manager:ip[1].value,
        address:ip[2].value,
        room: cf_room,
    };
    data.push(new_hotel);
    localStorage.setItem('data',JSON.stringify(data));
    page_redirect('cf_layout.html')
})

