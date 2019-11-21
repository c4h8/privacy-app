import  React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { connect } from 'react-redux';

import iconMarker from './iconMarker';

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
    <div className="col-sm-12 px-0 privacy-map-container">
      <Map center={position} zoom={13} zoomControl={false}>
        <TileLayer
          {...mapProvider}
        />
        {connectedServices.map(service => service.positions.map(pos =>
          <Marker
            position={pos}
            icon={iconMarker}
            key={`${service.name}-${pos[0]}`}
          >          
            <Popup direction="top">
              <ul className="location-details-list m-0 p-0">
                <li>Source: <span className="font-weight-bold">{service.name}</span></li>
                <li>Date: <span className="font-weight-bold">21.11.2019</span></li>
                <li>Address: <span className="font-weight-bold">Jämeräntaival 1 A</span></li>
              </ul>
            </Popup>
          </Marker>
        ))}
      </Map>
    </div>
  );
}

const mapStateToProps = state => ({
  connectedServices: state.connectedServices
})

export default connect(mapStateToProps)(MapWrapper);
