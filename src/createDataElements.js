function createDataElements () {

    const mainBody = document.querySelector('.mainBody');

    const currentContainer = document.createElement('div'); 
    const tempContainer = document.createElement('div');    
    const astroContainer = document.createElement('div');   

    const cityLabel = document.createElement('label');
    const countryLabel = document.createElement('label');
    const humidityLabel = document.createElement('label');
    const windKphLabel = document.createElement('label');
    const tempDiv = document.createElement('div');

    const cityName = document.createElement('div');
    const country = document.createElement('div');
    const humidity = document.createElement('div');
    const windKph = document.createElement('div');

    const frhtLabel = document.createElement('label');
    const celLabel = document.createElement('label');
    const toggleContainer = document.createElement('div');
    const toggleLabel = document.createElement('label');
    const tempToggleBtn = document.createElement('input');
    const toggleSpan = document.createElement('span');
    toggleContainer.appendChild(celLabel);
    toggleContainer.appendChild(toggleLabel);
    toggleContainer.appendChild(frhtLabel);
    toggleLabel.appendChild(tempToggleBtn);
    toggleLabel.appendChild(toggleSpan);

    toggleContainer.classList.add('toggleContainer');
    toggleLabel.classList.add('switch');
    toggleSpan.classList.add('slider');
    tempToggleBtn.type = 'checkbox';

    frhtLabel.textContent = 'F';
    celLabel.textContent = 'C';
    cityLabel.textContent = 'City: ';
    countryLabel.textContent = 'Country: ';
    humidityLabel.textContent = 'Humidity: ';
    windKphLabel.textContent = 'Wind Kph: ';

    tempDiv.classList.add('tempDiv');
    cityName.classList.add('cityName');
    country.classList.add('country');
    humidity.classList.add('humidity');
    windKph.classList.add('windKph');
    currentContainer.classList.add('dataContainer');
    tempContainer.classList.add('dataContainer');
    astroContainer.classList.add('dataContainer');

    tempToggleBtn.id = 'tempToggleBtn';
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

    mainBody.appendChild(tempContainer);
    mainBody.appendChild(currentContainer);
    mainBody.appendChild(astroContainer);

    tempContainer.appendChild(tempDiv);
    tempContainer.appendChild(toggleContainer);

    tempToggleBtn.addEventListener('click', () => {
        if (tempToggleBtn.checked === true) {
            tempDiv.textContent = currentData.current.temp_f + '° F';
        }
        else {
            tempDiv.textContent = currentData.current.temp_c + '° C';
        }
    });

}

export default createDataElements;


