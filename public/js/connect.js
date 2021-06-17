var username ="DouanecamerounWS";
var password ="Dounecameroune2019!";

$(document).ready( 
function () {
         
    //Removes the sessionId from the session storage at each refresh
    if(sessionStorage.getItem("securysat_sessionId")) sessionStorage.removeItem("securysat_sessionId");

    //Change all the "source code" tabs at once when you switch language
    $('.nav-tabs li a').click(function (e) {
      e.preventDefault();
      $(".nav-tabs li").find('a:contains('+$(this).html()+')').tab("show");
    });

    //To call login function on "Enter" key press when the user is on the login form
    $(document).keypress(function(e) {
        if((e.which == 13) && ($(username).is(":focus") || $(password).is(":focus"))) {
            login();
        }
    });

    Prism.highlightAll();
});

function create_alert(place, type, message, extra_message) {
    $('#alert_' + place + '_placeholder').html('');
    if (!extra_message)
        $('#alert_' + place + '_placeholder').html('<div class="alert alert-' + type + ' fade in"><button type="button" class="close" data-dismiss="alert">x</button><div class="' + message + '"></div></div>');
    else
        $('#alert_' + place + '_placeholder').html('<div class="alert alert-' + type + ' fade in"><button type="button" class="close" data-dismiss="alert">x</button><div class="' + message + '"></div>' + extra_message + '</div>');
    $.get('resources/languages.xml', function (xml) {
        $(message, xml).each(function () {
            var text = $(this).find(language).text();
            $("." + $(this).get(0).tagName).html(text);
        });
    });
}

