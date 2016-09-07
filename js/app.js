$(function () {

    var row = $('.radio-station').find('.row');
    var footer = $('.footer').find('#on');
    var display_title = $('.footer').find('.play-station');

    //    console.log(row);
    //    console.log(footer);
    //    console.log(display_title);



    /* PSEUDO CLASS WITH RADIO PLAYBACK */

    var play = $('<div class="play"><div class="minus"></div><div class="logo"></div><div class="plus"></div></div>');



    /* OTHER BUTTONS EVENTS 

    var arrowBtn = $('.arrow');
    var powerOffBtn = $('.switch');
    var minusBtn = $('.minus');
    var plusBtn = $('.plus');           
                                    */


    
    /* ON STATION CLICK FUNCTIONS */


    row.on('click', function (e) {

        /* FOOTER STATION DISPLAY */

        var station_name = $(this).find('.name').text();
        //    console.log(station_name);
        var station_on = display_title.text();

        footer.removeClass('hide');
        display_title.text(station_name);

        $(this).parent().prepend(play);

        var play_active = $(this).parent().find('.play');


        /*    STATION ON / OFF    */

        play_active.on('click', function () {

            play_active.remove();
            footer.addClass('hide');
            display_title.text('');


        });

    });

}); /* End of global function */