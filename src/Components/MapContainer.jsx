import  React from 'react';
import { Map, Marker, Popup, TileLayer, CircleMarker } from 'react-leaflet';
import { connect } from 'react-redux';

import iconMarker from './iconMarker';
import coords from '../Data/coordArray';

import 'leaflet/dist/leaflet.css';

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

function LocationMarker({pos}) {
  return (
    <Marker
      position={position}
      icon={iconMarker}
    />
  );
}

function MapWrapper({connectedServices}) {
  return(
    <div className="col-sm-12 privacy-map-container">
      <Map center={position} zoom={13} zoomControl={false}>
        <TileLayer
          {...mapProvider}
        />
        {/* <CircleMarker center={position} color="red" radius={15}>

        </CircleMarker> */}
        {connectedServices.map(service => service.positions.map(pos =>
          <Marker
            position={pos}
            icon={iconMarker}
          />
        ))}
      </Map>
    </div>
  );
}

const mapStateToProps = state => ({
  connectedServices: state.connectedServices
})

export default connect(mapStateToProps)(MapWrapper);
