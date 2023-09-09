function createDataElements () {

    const mainBody = document.querySelector('.mainBody');

    const currentContainer = document.createElement('div'); 
    const tempContainer = document.createElement('div');    
    const astroContainer = document.createElement('div');   

    const cityLabel = document.createElement('label');
    const countryLabel = document.createElement('label');
    const humidityLabel = document.createElement('label');
    const windKphLabel = document.createElement('label');

    const cityName = document.createElement('div');
    const country = document.createElement('div');
    const humidity = document.createElement('div');
    const windKph = document.createElement('div');

    cityLabel.textContent = 'City: ';
    countryLabel.textContent = 'Country: ';
    humidityLabel.textContent = 'Humidity: ';
    windKphLabel.textContent = 'Wind Kph: ';

    cityName.classList.add('cityName');
    country.classList.add('country');
    humidity.classList.add('humidity');
    windKph.classList.add('windKph');
    currentContainer.classList.add('dataContainer');
    tempContainer.classList.add('dataContainer');
    astroContainer.classList.add('dataContainer');

    currentContainer.id = 'current';
    tempContainer.id = 'temp';
    astroContainer.id = 'astro';

    currentContainer.appendChild(cityLabel);
    currentContainer.appendChild(cityName);
    currentContainer.appendChild(countryLabel);
    currentContainer.appendChild(country);
    currentContainer.appendChild(humidityLabel);
    currentContainer.appendChild(humidity);
    currentContainer.appendChild(windKphLabel);
    currentContainer.appendChild(windKph);

    mainBody.appendChild(currentContainer);
    mainBody.appendChild(tempContainer);
    mainBody.appendChild(astroContainer);


}

export default createDataElements;


