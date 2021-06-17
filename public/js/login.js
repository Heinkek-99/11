var baseUrl = "https://fleet.securysat.com/json/"; 
var applicationKey ="92ZU-JSN4-28PX-XAFZ" ;


$(document).ready(
    // $('#web_service_url').val(baseUrl),
    // $("#applicationKey").val(applicationKey),
         function login() {
        var url = baseUrl;
        var applicationKey = applicationKey;
        var username = $("#name").val();
        var password = $("#password").val();
    
            $.ajax({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                  },
                url: url + "login",
                type: 'POST',
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
    );
    

    

   