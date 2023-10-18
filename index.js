// Notes relating to differences from other tutorials:
// 1 - Renamed "Map, Map, Map" to "myMapID, gMap, map"

var gMap;

// initMap is a callback function that is initiated as part of the Google Maps API call at the bottom
// of the HTML file
function initMap() {
    // Create a new map and assign it to gMap
    gMap = new google.maps.Map(document.getElementById('myMapID'), {
        center: {lat: 41.878, lng: 10}, zoom: 3})
}

function initApplication() {
    console.log('Map Mania Lite - Starting!')
}