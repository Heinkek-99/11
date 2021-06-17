var baseUrl = "https://fleet.securysat.com/json/"; 
var markers;

$(document).ready(  
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
                        //  if (item.invisible === true)item.invisible = "<i class=\"glyphicon glyphicon-ok\"></i>";
                        //  else item.invisible = "<i class=\"glyphicon glyphicon-remove\"></i>";
                        //  if (item.replaceMarkerWithAddress === true)item.replaceMarkerWithAddress = "<i class=\"glyphicon glyphicon-ok\"></i>";
                        //  else item.replaceMarkerWithAddress = "<i class=\"glyphicon glyphicon-remove\"></i>";
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
    );