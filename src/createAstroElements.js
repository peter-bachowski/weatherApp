function createAstroElements () {

    const astroContainer = document.querySelector('#astro');

    const astroTitle = document.createElement('div');
    const sunriseLabel = document.createElement('label');
    const sunsetLabel = document.createElement('label');
    const moonriseLabel = document.createElement('label');
    const moonsetLabel = document.createElement('label');
    const moonPhaseLabel = document.createElement('label');

    const sunrise = document.createElement('div');
    const sunset = document.createElement('div');
    const moonrise = document.createElement('div');
    const moonset = document.createElement('div');
    const moonPhase = document.createElement('div');

    sunrise.classList.add('sunrise');
    sunset.classList.add('sunset');
    moonrise.classList.add('moonrise');
    moonset.classList.add('moonset');
    moonPhase.classList.add('moonPhase');

    astroTitle.textContent = 'Astronomical Data';
    sunriseLabel.textContent = 'Sunrise: ';
    sunsetLabel.textContent = 'Sunset: ';
    moonriseLabel.textContent = 'Moonrise: ';
    moonsetLabel.textContent = 'Moonset: ';
    moonPhaseLabel.textContent = 'Moon Phase: ';

    astroContainer.appendChild(astroTitle);
    astroContainer.appendChild(sunriseLabel);
    astroContainer.appendChild(sunrise);
    astroContainer.appendChild(sunsetLabel);
    astroContainer.appendChild(sunset);
    astroContainer.appendChild(moonriseLabel);
    astroContainer.appendChild(moonrise);
    astroContainer.appendChild(moonsetLabel);
    astroContainer.appendChild(moonset);
    astroContainer.appendChild(moonPhaseLabel);
    astroContainer.appendChild(moonPhase);

}

export default createAstroElements;