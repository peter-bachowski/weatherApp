function createLoadingIcon () {
    const loadingIcon = document.createElement('div');
    loadingIcon.id = 'loading';
    document.querySelector('.header').appendChild(loadingIcon);
}

export default createLoadingIcon;