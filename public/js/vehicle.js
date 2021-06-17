var baseUrl = "https://fleet.securysat.com/json/"; 

$(document).ready(  
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
    );