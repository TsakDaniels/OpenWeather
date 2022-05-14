// 665fd430be98265a17fbf8370b6d4c50&fbclid=IwAR2hJBQzf4Ayb0F2tgWMHiIobv0lFMiTvKXC5i5o1rmstAqZVlNakMQJdoE

//city
//https://api.openweathermap.org/data/2.5/weather?q=London,uk

/*
function weatherBalloon() {
  let cityID = document.getElementById("cityID").value;
    var key = '665fd430be98265a17fbf8370b6d4c50&fbclid=IwAR2hJBQzf4Ayb0F2tgWMHiIobv0lFMiTvKXC5i5o1rmstAqZVlNakMQJdoE';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      console.log(weatherBalloon());
    })
    .catch(function() {
      // catch any errors
    });
  }
  
  window.onload = function() {
    weatherBalloon(264371);
    2988507
    
  }
*/
 

  function drawWeather( d ) {
	var celcius = Math.round(parseFloat(d.main.temp)-273.15); 
	
	document.getElementById('description').innerHTML = d.weather[0].description;
	document.getElementById('temp').innerHTML = celcius + '&deg;';
	document.getElementById('location').innerHTML = d.name;

    if( description.indexOf('rain') > 0 ) {
        document.body.className = 'rainy';
    } else if( description.indexOf('cloud') > 0 ) {
        document.body.className = 'cloudy';
    } else if( description.indexOf('sunny') > 0 ) {
        document.body.className = 'sunny';
    }
  
}


function weatherBalloon() {
  let cityID = document.getElementById("cityID").value;
	var key = '665fd430be98265a17fbf8370b6d4c50&fbclid=IwAR2hJBQzf4Ayb0F2tgWMHiIobv0lFMiTvKXC5i5o1rmstAqZVlNakMQJdoE';
	fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
	.then(function(resp) { return resp.json() }) // Convert data to json
	.then(function(data) {
		drawWeather(data); // Call drawWeather
	})
	.catch(function() {
		// catch any errors
	});
}


