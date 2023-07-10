const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=pune';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1c33e4e7e5mshb2ec0f6c41cb4dep1c8a41jsn596fb3545a39',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city ,options)
.then((response)=>response.json())
.then((response)=>{
    // changing time sunrise
    const sunriseTimestamp = response.sunrise;
const sunsetTimestamp = response.sunset;

const sunriseDate = new Date(sunriseTimestamp * 1000);
const sunsetDate = new Date(sunsetTimestamp * 1000);

const sunriseTime = sunriseDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
const sunsetTime = sunsetDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });




    // document.querySelector('cloud_pct').innerHTML = response.cloud_pct
    document.querySelector('.temp').innerHTML = response.temp
    document.querySelector('.min_temp').innerHTML = response.min_temp
    document.querySelector('.max_temp').innerHTML = response.max_temp
    document.querySelector('.feels_like').innerHTML = response.feels_like
    document.querySelector('.humidity').innerHTML = response.humidity
    document.querySelector('.wind_speed').innerHTML = response.wind_speed
    document.querySelector('.wind_degrees').innerHTML = response.wind_degrees
    document.querySelector('.sunrise').innerHTML = sunriseTime
    document.querySelector('.sunset').innerHTML = sunsetTime

    

})


}

getWeather("delhi")

const btn = document.querySelector('.btn')
const search_city = document.querySelector('.search-city')
const cityName = document.querySelector('.cityName')

btn.addEventListener('click',(e)=>{
    e.preventDefault()
    getWeather(search_city.value)
    cityName.innerHTML =search_city.value
})

var dropdownItems = document.querySelectorAll('.dropdown-item');

// Add click event listener using forEach
dropdownItems.forEach(function(item) {
  item.addEventListener('click', function(event) {
    event.preventDefault();
    let selectedCity = event.target.textContent;
    getWeather(selectedCity)
    cityName.innerHTML = selectedCity
  });
});



fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi' ,options)
.then((response)=>response.json())
.then((response)=>{
    // changing time sunrise
    const sunriseTimestamp = response.sunrise;
const sunsetTimestamp = response.sunset;

const sunriseDate = new Date(sunriseTimestamp * 1000);
const sunsetDate = new Date(sunsetTimestamp * 1000);

const sunriseTime = sunriseDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
const sunsetTime = sunsetDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });


    document.querySelector('.pct').innerHTML = response.cloud_pct
    document.querySelector('.Tempreture').innerHTML = response.temp
    document.querySelector('.min').innerHTML = response.min_temp
    document.querySelector('.max').innerHTML = response.max_temp
    document.querySelector('.feels').innerHTML = response.feels_like
    document.querySelector('.humidi').innerHTML = response.humidity
    document.querySelector('.speed').innerHTML = response.wind_speed
    document.querySelector('.degree').innerHTML = response.wind_degrees
    document.querySelector('.sunrisee').innerHTML = sunriseTime
    document.querySelector('.sunsett').innerHTML = sunsetTime
})
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Jaipur' ,options)
.then((response)=>response.json())
.then((response)=>{
    // changing time sunrise
    const sunriseTimestamp = response.sunrise;
const sunsetTimestamp = response.sunset;

const sunriseDate = new Date(sunriseTimestamp * 1000);
const sunsetDate = new Date(sunsetTimestamp * 1000);

const sunriseTime = sunriseDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
const sunsetTime = sunsetDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });


    document.querySelector('.jpct').innerHTML = response.cloud_pct
    document.querySelector('.jTempreture').innerHTML = response.temp
    document.querySelector('.jmin').innerHTML = response.min_temp
    document.querySelector('.jmax').innerHTML = response.max_temp
    document.querySelector('.jfeels').innerHTML = response.feels_like
    document.querySelector('.jhumidi').innerHTML = response.humidity
    document.querySelector('.jspeed').innerHTML = response.wind_speed
    document.querySelector('.jdegree').innerHTML = response.wind_degrees
    document.querySelector('.jsunrisee').innerHTML = sunriseTime
    document.querySelector('.jsunsett').innerHTML = sunsetTime
})
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai' ,options)
.then((response)=>response.json())
.then((response)=>{
    // changing time sunrise
    const sunriseTimestamp = response.sunrise;
const sunsetTimestamp = response.sunset;

const sunriseDate = new Date(sunriseTimestamp * 1000);
const sunsetDate = new Date(sunsetTimestamp * 1000);

const sunriseTime = sunriseDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
const sunsetTime = sunsetDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });


    document.querySelector('.mpct').innerHTML = response.cloud_pct
    document.querySelector('.mTempreture').innerHTML = response.temp
    document.querySelector('.mmin').innerHTML = response.min_temp
    document.querySelector('.mmax').innerHTML = response.max_temp
    document.querySelector('.mfeels').innerHTML = response.feels_like
    document.querySelector('.mhumidi').innerHTML = response.humidity
    document.querySelector('.mspeed').innerHTML = response.wind_speed
    document.querySelector('.mdegree').innerHTML = response.wind_degrees
    document.querySelector('.msunrisee').innerHTML = sunriseTime
    document.querySelector('.msunsett').innerHTML = sunsetTime
})
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bengaluru' ,options)
.then((response)=>response.json())
.then((response)=>{
      // changing time sunrise
      const sunriseTimestamp = response.sunrise;
      const sunsetTimestamp = response.sunset;
      
      const sunriseDate = new Date(sunriseTimestamp * 1000);
      const sunsetDate = new Date(sunsetTimestamp * 1000);
      
      const sunriseTime = sunriseDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const sunsetTime = sunsetDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      
      

    document.querySelector('.bpct').innerHTML = response.cloud_pct
    document.querySelector('.bTempreture').innerHTML = response.temp
    document.querySelector('.bmin').innerHTML = response.min_temp
    document.querySelector('.bmax').innerHTML = response.max_temp
    document.querySelector('.bfeels').innerHTML = response.feels_like
    document.querySelector('.bhumidi').innerHTML = response.humidity
    document.querySelector('.bspeed').innerHTML = response.wind_speed
    document.querySelector('.bdegree').innerHTML = response.wind_degrees
    document.querySelector('.bsunrisee').innerHTML = sunriseTime
    document.querySelector('.bsunsett').innerHTML = sunsetTime
})
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Hyderabad' ,options)
.then((response)=>response.json())
.then((response)=>{
     // changing time sunrise
     const sunriseTimestamp = response.sunrise;
     const sunsetTimestamp = response.sunset;
     
     const sunriseDate = new Date(sunriseTimestamp * 1000);
     const sunsetDate = new Date(sunsetTimestamp * 1000);
     
     const sunriseTime = sunriseDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
     const sunsetTime = sunsetDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
     
     

    document.querySelector('.hpct').innerHTML = response.cloud_pct
    document.querySelector('.hTempreture').innerHTML = response.temp
    document.querySelector('.hmin').innerHTML = response.min_temp
    document.querySelector('.hmax').innerHTML = response.max_temp
    document.querySelector('.hfeels').innerHTML = response.feels_like
    document.querySelector('.hhumidi').innerHTML = response.humidity
    document.querySelector('.hspeed').innerHTML = response.wind_speed
    document.querySelector('.hdegree').innerHTML = response.wind_degrees
    document.querySelector('.hsunrisee').innerHTML = sunriseTime
    document.querySelector('.hsunsett').innerHTML = sunsetTime
})
    