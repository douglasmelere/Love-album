let h2 = document.querySelector('h2');
let button = document.querySelector('#sendLocation');
var map;

const senaiLuzernaCoords = {
    latitude: -27.1456,
    longitude: -51.4666
};

function initMap(lat, long) {
    if (map === undefined) {
        map = L.map('map').setView([lat, long], 13);
    } else {
        map.remove();
        map = L.map('map').setView([lat, long], 13);
    }

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([lat, long]).addTo(map)
        .bindPopup('Senai Luzerna')
        .openPopup();
}

function success(position) {
    const { latitude, longitude } = senaiLuzernaCoords;

    h2.innerHTML = `Latitude: ${latitude}, Longitude: ${longitude}`;

    initMap(latitude, longitude);

    function sendLocation() {
        let link = `https://share-my-location.com/location?latlong=${latitude},${longitude}`;
        alert(`O link para compartilhar a sua localização é: ${link}`);
    }

    button.addEventListener('click', sendLocation);
}

function error() {
    throw new Error('Erro ao obter a localização!');
}

success(); // For demonstration purposes, you can remove this line in the actual implementation.

// var watchID = navigator.geolocation.watchPosition(success, error, {
//     enableHighAccuracy: true,
//     timeout: 5000
// });
