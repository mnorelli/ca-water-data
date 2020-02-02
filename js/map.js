console.log('Loaded map.js');
mapboxgl.accessToken = TOKEN; // https://docs.mapbox.com/help/tutorials/mapbox-gl-js-expressions/
var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/mnorelli/ck0q67lvd06an1ck787n6l08t', // stylesheet location
  center: [-119.98030838, 37.11287603], // starting position [lng, lat]
  zoom: 5.5 // starting zoom
});

map.on('load', function() {
  map.addLayer({
    id: 'systempoints',
    type: 'circle',
    source: {
      type: 'vector',
      url: 'mapbox://mnorelli.4vsnqboo'
    },
    'source-layer': 'inventory_map_2018-19_selecte-7444w5',
      paint: {
          'circle-radius': ["log2",['number', ['get', 'd_populati']]],
          'circle-opacity': 0.5,
          'circle-color': 'rgb(171, 72, 33)'
        }
});
});