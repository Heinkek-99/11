var url = "https://fleet.securysat.com/json/login/sessionId";
var getJSON2 = function(url) {
    return new Promise(function (data,err){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    console.log(xhr);
    xhr.onload = function() {
    var status = xhr.status;
    if (status === 200) {
    data(xhr.response);
    } else {
    err(status, xhr.response);
    }
    }
    xhr.send();
    });
    };

    const identifierId = function(data){
        console.log(data);
        var i = 0;
        var amount = 0;
        data.forEach(identifier => {
            document.getElementById("identifier" + i).textContent = identifier.name;
            document.getElementById("label" + i).innerHTML += identifier.label;
            document.getElementById("invisible" + i).innerHTML += identifier.invisibile;
            document.getElementById("marker" + i).innerHTML += identifier.marker;
            document.getElementById("color" + i).innerHTML += identifier.color;
            document.getElementById("active" + i).innerHTML += identifier.active;

            editElement(i, identifier);
            i++;
        });
    }

    function getMarkers(sessionId) {
        var baseUrl = "https://fleet.securysat.com/json/"
        //Do not forget to import jquery in order for this function to work
        //To do so, place the tag below between the <head></head> tags
        //<script src="http://code.jquery.com/jquery-2.0.3.min.js"></script>  
        $.ajax({
            url: baseUrl+"getMarkers",
            type: 'POST',
            data: JSON.stringify({'sessionId': sessionId}),
            contentType: 'application/json',
            dataType: 'json',
            success: function(data) {
                console.log("Success getMarkers");
                console.log(data);
            },
            error: function(data) {
                console.log("Error getMarkers");
                console.log(data);
            }
        });
   
        }
  
    getJSON2("https://fleet.securysat.com/json/").then(identifierId);
