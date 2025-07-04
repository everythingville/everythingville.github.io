// Non-geographic map setup
const map = L.map('map', {
    crs: L.CRS.Simple,
    //minZoom: -5
});
var  bounds = [[0,0], [1000,1000]];
var image = L.imageOverlay('assets/img/uqm_map_full.png', bounds).addTo(map);
map.fitBounds(bounds);