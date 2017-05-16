var time, guests; // Variabler //


// Reserveringsbekräftelse 
function DoBook() {
    //variablernas värden tas från reserveringen i html
    time = document.getElementsByName("time")[0].value;
    guests = document.getElementsByName("people")[0].value;
    confirm("Confirm Reservation at " + time + " for " + guests + " people?");
}


//Menyhantering, justerar vilken del av menyn som visas
(function ($) {
    $('#Container').mixItUp();

    $(".sidenav a").on('click', function(event) {
        event.preventDefault();
        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900, function(){
            window.location.hash = hash;
        });
    });
    
})

(jQuery);