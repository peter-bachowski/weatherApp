import createLoadingIcon from "./createLoadingIcon";
import getAndLoadData from "./getAndLoadData";

function formatHeader () {
    const header = document.querySelector('.header');

    const logo = document.createElement('div');
    const title = document.createElement('label');

    const searchBar = document.createElement('input');
    const searchBtn = document.createElement('button');
    const searchBarContainer = document.createElement('div')

    searchBarContainer.classList.add('searchBarContainer');
    logo.classList.add('logo');

    title.textContent = 'Weather App';
    searchBar.type = 'text';
    searchBtn.textContent = 'Search';
    searchBar.placeholder = 'Seattle, WA';

    header.appendChild(logo);
    header.appendChild(title);
    header.appendChild(searchBarContainer);
    searchBarContainer.appendChild(searchBar);
    searchBarContainer.appendChild(searchBtn);

    createLoadingIcon();

    searchBtn.addEventListener('click', () => {
        getAndLoadData(searchBar.value);
    });

    searchBtn.addEventListener('keypress', (event) => {
        if (event.key === 'Enter'){
            getAndLoadData(searchBar.value);
        }
    });
}

export default formatHeader;