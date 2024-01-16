function chatOnWhatsapp() {
    let name         = $("#name").val();
    let checkindate  = $("#checkindate").val();
    let checkoutdate = $("#checkoutdate").val();
    let adultsnumber = $("#adultsnumber").val();
    console.log("1", checkindate);

    let dateObject = new Date(checkindate);
    console.log("1", dateObject);
    let options = { day: '2-digit', month: 'short'};

    checkindate = dateObject.toLocaleString('en-gb', options);

    dateObject = new Date(checkoutdate);
    checkoutdate = dateObject.toLocaleString('en-gb', options);


    let content      = "Hi, I am " + name + "!, and I am reaching out to explore room availability for " + adultsnumber + " members from " + checkindate + " to " + checkoutdate + ". Could you kindly share information on the availability and rates?";
    let whatsapp_url = "https://wa.me/919947460835?text=" + encodeURI(content);

    window.open(whatsapp_url, `_blank`);
}

$(document).ready(function() {
    var dateInput = document.getElementById('checkoutdate');
    dateInput.value = 'This is the placeholder';
    dateInput.addEventListener('input', function() {
        if (!dateInput.value || dateInput.value === 'mm/dd/yyyy') {
            dateInput.value = 'This is the placeholder';
        }
    });
})

$(window).scroll(function() {
    $(".mainheader").css("backdrop-filter", "blur(15px)");
    $(".mainheader").css("background-color", "rgba(175,175,175,0.25)");
    document.getElementById("bgm").play();
});

window.onscroll = function(){
    var B = document.body;
    var D = document.documentElement;
    D = (D.clientHeight)? D: B;
    if (D.scrollTop == 0){
        $(".mainheader").css("backdrop-filter", "blur(0px)");
        $(".mainheader").css("background-color", "transparent");
    }        
};