 // Replace with your WeatherAPI key
 const apiKey = '01a3c2cbeb3344fca10132701250802';
 // Change this to the city you want to search
 const city = 'Cebu'; 

 function callAPI() {
     const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

     fetch(url)
     .then(response => response.json())
     .then(data => {
         console.log(data);

         document.querySelector("#weather_city").textContent = data.location.name || 'N/A';
         document.querySelector("#weather_temperature").textContent = `${data.current.temp_c}°C` || 'N/A';
         document.querySelector("#weather_condition").textContent = data.current.condition.text || 'N/A';
     });
 }