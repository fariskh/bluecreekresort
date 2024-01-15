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
    let whatsapp_url = "https://wa.me/918592897844?text=" + encodeURI(content);

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

