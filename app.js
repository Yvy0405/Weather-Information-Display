$('.btn-get-weather').on("click", function() {
	// let apiKey = "c3a14b64fd3eb5f994230183700f79d1";
	// fetch("https://api.openweathermap.org/data/2.5/weather?lat=43.653225&lon=-79.383186&appid=c3a14b64fd3eb5f994230183700f79d1")
	// .then((res) => {
	// 	console.log(res);
	// })
	// .then((data) => {
	// 	console.log(data);
	// })
	$('.spinner').css('display', 'flex')
	$.ajax({
		type: 'GET',
		dataType:"jsonp",
		url: 'https://api.openweathermap.org/data/2.5/weather?lat=43.653225&lon=-79.383186&appid=c3a14b64fd3eb5f994230183700f79d1',
		headers:{         
			'Content-Type':'application/json'
		},
		success: function (data, status, xhr) {
		  $('.location h2').html(data.name);
		  let temperature = data.main.temp;
		  let fomartedTemp = temperature - 273.15;
		  $('.temperature h3').html(fomartedTemp.toFixed(2) + '°C')
		  $('.condition p').html(data.weather[0].main);
		  let icon = data.weather[0].icon;
		  $('.icon').attr("src", `https://openweathermap.org/img/wn/${icon}.png`)
		  $('.spinner').css('display', 'none')
		}
	  });
})