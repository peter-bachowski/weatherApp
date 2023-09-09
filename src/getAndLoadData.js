async function getAndLoadData (input) {

    const responseCurrent = await fetch('https://api.weatherapi.com/v1/current.json?key=5a1eb9a178084db081553850230709&q=' + input, {mode: 'cors'});
    const responseAstronomy = await fetch('https://api.weatherapi.com/v1/astronomy.json?key=5a1eb9a178084db081553850230709&q=' + input, {mode: 'cors'});

    const currentData = await responseCurrent.json();
    const astronomyData = await responseAstronomy.json();

    console.log(currentData);
    console.log(astronomyData);

    document.querySelector('.cityName').textContent = currentData.location.name;
    document.querySelector('.country').textContent = currentData.location.country;
    document.querySelector('.humidity').textContent = currentData.current.humidity;
    document.querySelector('.windKph').textContent = currentData.current.wind_kph;

    document.querySelector('#temp').textContent = currentData.current.temp_c + ' C';

    document.querySelector('.sunrise').textContent = astronomyData.astronomy.astro.sunrise;
    document.querySelector('.sunset').textContent = astronomyData.astronomy.astro.sunset;
    document.querySelector('.moonrise').textContent = astronomyData.astronomy.astro.moonrise;
    document.querySelector('.moonset').textContent = astronomyData.astronomy.astro.moonset;
    document.querySelector('.moonPhase').textContent = astronomyData.astronomy.astro.moon_phase;

}

export default getAndLoadData;