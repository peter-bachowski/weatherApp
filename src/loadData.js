function loadData () {

    

    const cityName = document.querySelector('.cityName');
    const country = document.querySelector('.country');
    const tempC = document.querySelector('.tempC');
    const tempF = document.querySelector('.tempF');
    const humidity = document.querySelector('.humidity');
    const windKph = document.querySelector('.windKph');

    fetch('https://api.weatherapi.com/v1/current.json?key=5a1eb9a178084db081553850230709&q=surakarta', {mode: 'cors'})
        .then(function(response) {
        return response.json();
        })
        .then(function(response) {
        console.log(response);
        cityName.textContent = 'City: ' + response.location.name;
        country.textContent = 'Country: ' + response.location.country;
        tempC.textContent = 'Temp C: ' + response.current.temp_c;
        tempF.textContent = 'Temp F: ' + response.current.temp_f;
        humidity.textContent = 'Humidity: ' + response.current.humidity;
        windKph.textContent = 'Wind Kph: ' + response.current.wind_kph;

        });
}

export default loadData;


