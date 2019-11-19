import  React from 'react';
import 'leaflet/dist/leaflet.css';
import { Map, Marker, Popup, TileLayer, CircleMarker } from 'react-leaflet';
import iconMarker from './iconMarker';

const position = [60.2052, 24.6522]

const mapProvider = ({
  url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}',
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  subdomains: 'abcd',
  detectRetina: true,
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
})

function MapWrapper() {
  return(
    <div className="col-sm-12 privacy-map-container">
      <Map center={position} zoom={13} zoomControl={false}>
        <TileLayer
          {...mapProvider}
        />
        {/* <CircleMarker center={position} color="red" radius={15}>

        </CircleMarker> */}

        <Marker
          position={position}
          icon={iconMarker}
        />

      </Map>
    </div>
  );
}

export default MapWrapper
