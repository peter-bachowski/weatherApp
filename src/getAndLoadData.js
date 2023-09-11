async function getAndLoadData (input) {
    const loading = document.querySelector('#loading');

    try {
        loading.classList.add('display');

        const responseCurrent = await fetch('https://api.weatherapi.com/v1/current.json?key=5a1eb9a178084db081553850230709&q=' + input, {mode: 'cors'});
        const responseAstronomy = await fetch('https://api.weatherapi.com/v1/astronomy.json?key=5a1eb9a178084db081553850230709&q=' + input, {mode: 'cors'});
        const responseForecast = await fetch('https://api.weatherapi.com/v1/forecast.json?key=5a1eb9a178084db081553850230709&q=' + input, {mode: 'cors'});

        window.currentData = await responseCurrent.json();
        const astronomyData = await responseAstronomy.json();
        const forecastData = await responseForecast.json();
    
        console.log(currentData);
        console.log(astronomyData);
        console.log(forecastData);
    
        document.querySelector('.cityName').textContent = currentData.location.name;
        document.querySelector('.country').textContent = currentData.location.country;
        document.querySelector('.humidity').textContent = currentData.current.humidity +  '%';
        document.querySelector('.windKph').textContent = currentData.current.wind_kph;
    
        document.querySelector('.tempDiv').textContent = currentData.current.temp_c + '° C';
    
        document.querySelector('.sunrise').textContent = astronomyData.astronomy.astro.sunrise;
        document.querySelector('.sunset').textContent = astronomyData.astronomy.astro.sunset;
        document.querySelector('.moonrise').textContent = astronomyData.astronomy.astro.moonrise;
        document.querySelector('.moonset').textContent = astronomyData.astronomy.astro.moonset;
        document.querySelector('.moonPhase').textContent = astronomyData.astronomy.astro.moon_phase;
    
        loading.classList.remove('display');
    
    }
    catch {
        loading.classList.remove('display');
        alert('The location you entered does not exist.');
    }


}

export default getAndLoadData;