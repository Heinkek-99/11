var baseUrl = "https://fleet.securysat.com/json/";
var markers;
var applicationKey ="92ZU-JSN4-28PX-XAFZ" ;
// var username ="DouanecamerounWS";
// var password ="Dounecameroune2019!";

$(document).ready(function () {
    $('#web_service_url').val(baseUrl),
    $("#applicationKey").val(applicationKey);

    //Suppression du sessionId après chaque rafraichissement
    if(sessionStorage.getItem("securysat_sessionId")) sessionStorage.removeItem("securysat_sessionId");

    //Appel de la fonction login après pression sur Entrée pendant le remplissage du formulaire
    $(document).keypress(function(e) {
        if((e.which == 13) && ($("#name").is(":focus") || $("#password").is(":focus"))) {
            login();
        }
    });

    Prism.highlightAll();
});

function login() {
    var url = baseUrl;
    var applicationKey = $("#applicationKey").val();
    var username = $("#name").val();
    var password = $("#password").val();

        $.ajax({
           
            url: url + "login",
            type: 'POST',
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
              },
            data: JSON.stringify({'login': username, 'password': password, 'appKey': applicationKey}),
            contentType: 'application/json',
            
            success: function (data) {
                if (data.sessionId) {
                    console.log("Success login");
                    console.log(data); 
                    sessionStorage.setItem("securysat_sessionId", data.sessionId);
 
             }
                else {
                    console.log("Bad login / password");
                    console.log(data);
                    
                }
            },
            error: function (data) {
                console.log("Error login");
                console.log(data);
             }
        });
    }


function logout() {
  
    $.ajax({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          },
        url: baseUrl + "logout",
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({'sessionId': sessionStorage.getItem("securysat_sessionId")}),
        dataType: 'json',
        success: function (data) {
            sessionStorage.removeItem("securysat_sessionId");
            console.log("Success logout");
        },
        error: function (data) {
            console.log("Logout error");
            console.log(data);
        }
    });
}

function getVehicles() {
    sessionId = sessionStorage.getItem("securysat_sessionId");
        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
              },
            url: baseUrl + "getVehicles",
            type: 'POST',
            data: JSON.stringify({'sessionId': sessionStorage.getItem("securysat_sessionId")}),
            contentType: 'application/json',
            dataType: 'json',
            success: function (data) {
                console.log("Success getVehicles");
                console.log(data);
                $.each(data.vehicles, function (i, item) {

                    html += "<tr><td>" + item.id + "</td><td>" + item.name + "</td><td>" + item.brand + "</td><td>"
                        + item.model + "</td></tr>";
                    return i < 10;
                });
                $("#vehicles_tab tbody").append($(html));
            },
            error: function (data) {
                console.log("Error getVehicles");
            console.log(data);
            }
        });
    
}


function getMarkers() {
       sessionId = sessionStorage.getItem("securysat_sessionId");
        $.ajax({
            url: baseUrl + "getMarkers",
            type: 'POST',
            data: JSON.stringify({'sessionId': sessionStorage.getItem("securysat_sessionId")}),
            contentType: 'application/json',
            dataType: 'json',
            success: function (data) {
                console.log("Success getMarkers");
                console.log(data);
               
                var markers = data.markers;
                markers.sort(function (a, b) {
                    return (a.id < b.id) ? 1 : -1;
                });
                $.each(markers, function (i, item) {
                    if (item.invisible === true)item.invisible = "<i class=\"glyphicon glyphicon-ok\"></i>";
                    else item.invisible = "<i class=\"glyphicon glyphicon-remove\"></i>";
                    if (item.replaceMarkerWithAddress === true)item.replaceMarkerWithAddress = "<i class=\"glyphicon glyphicon-ok\"></i>";
                    else item.replaceMarkerWithAddress = "<i class=\"glyphicon glyphicon-remove\"></i>";
                    var R = parseInt(item.colour) % 256;
                    var G = parseInt((parseInt(item.colour) / 256) % 256);
                    var B = parseInt((parseInt(item.colour) / 65536) % 256);

                    html += "<tr><td>" + item.id + "</td><td>" + item.label + "</td><td>" + item.invisible + "</td><td>"
                        + item.replaceMarkerWithAddress + "</td><td style=\"background-color: rgb(" + R + "," + G + "," + B + ")\"></td><td>"
                        + item.active + "</td></tr>";
                    return i < 10;
                });

                $("#markers_tab tbody").append($(html));
            },
            error: function (data) {
                console.log("Error getMarkers");
                console.log(data);
            }
        });
  
}

