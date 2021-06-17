var baseUrl = 'https://fleet.securysat.com/json/'

// var getJSON = function(baseUrl, callback) {
// 	var xhr = new XMLHttpRequest();
// 	xhr.open('GET', baseUrl, true);
// 	xhr.responseType = 'json';
// 	xhr.onload = function() {
// 		var status =  xhr.status;
// 		if (status === 200) {
// 			callback(null, xhr.response);
// 		}
// 		else {
// 			callback(status, xhr.response);
// 		}
// 	};
// 	xhr.send();	
// };
//var rep = getJSON(baseUrl,
	// function(err, data){
	// 	if (err !== null) {
	// 		alert('Something went wrong: ' + err);
	// 	}
	// 	else {
	// 		console.log(data);
	// 		for (var i = 0; i < data.length; i++) {
	// 			console.log(data[i].label);
	// 		}
	// 		return data;
	// 	}
	// });

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
	//	});