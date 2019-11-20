import L from 'leaflet';

const iconMarker = new L.Icon({
    iconUrl: require('./marker.svg'),
    iconRetinaUrl: require('./marker.svg'),
    iconAnchor: [30, 75],
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
});

export default iconMarker;

