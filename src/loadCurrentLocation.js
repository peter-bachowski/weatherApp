import getAndLoadData from "./getAndLoadData";

async function loadCurrentLocation () {

    const responseIp = await fetch('https://api.weatherapi.com/v1/ip.json?key=5a1eb9a178084db081553850230709&q=auto:ip', {mode: 'cors'});
    const ipData = await responseIp.json();
    console.log(ipData);

    getAndLoadData(ipData.city)

}

export default loadCurrentLocation;