var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var latlngs = [];
var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
var newpath = []

window.onload = function(){ 
    

    document.getElementById('btn-finish').setAttribute("disabled","disabled");

    document.getElementById('btn-start').onclick = function(){
        latlngs.push(newpath);
        document.getElementById('btn-start').setAttribute("disabled","disabled");
        document.getElementById('btn-finish').removeAttribute("disabled");
    }
    document.getElementById('btn-finish').onclick = function(){
        newpath = []
        document.getElementById('btn-start').removeAttribute("disabled");
        document.getElementById('btn-finish').setAttribute("disabled","disabled");
    }
    
};

map.on('click', function(ev) {
    if(document.getElementById('btn-start').getAttribute("disabled")){
        var _newpoint = [ev.latlng.lat,ev.latlng.lng];
        newpath.push(_newpoint);
    }
    L.polyline(latlngs, {color: 'red'}).addTo(map);
     // ev is an event object (MouseEvent in this case)
});