var guest = {
    name: "Zhang",
    date: " Oct 17, 2025",
    member: "diamond",
    otherguest : [ "Mike" , "Cindy" , "Sally"],
};

function reservation() {
    var guest ={
        name: document.getElementById('guestname').ariaValueMax,
        checkin: document.getElementById('checkin').ariaValueMax,
        roomtype: document.getElementById('room').value
    };
    guestgroup.push(guest);
    console.log(guestgroup);
};