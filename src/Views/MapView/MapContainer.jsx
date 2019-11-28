import  React, { useState, useEffect } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import Switch from "react-switch";
import HeatmapLayer from 'react-leaflet-heatmap-layer';

import iconMarker from './iconMarker';
import FilterMenu from './FilterMenu';

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

function MapWrapper({connectedServices, serviceNames}) {
  const [filterListOpen, setFilterListOpen] = useState(false)
  const [hiddenServices, setHiddenServices] = useState({})
  const [markers, setMarkers] = useState([])
  const [mapLayers, setMapLayers] = useState({
    heatmap: false,
    locationMarkers: true,
  })

  useEffect(() => {
    const _markers = connectedServices
      .filter(s => !hiddenServices[s.name])
      .map(s => s.positions.map((pos, i) => ({
        key: `${s.name}-${i}`,
        pos: pos,
        serviceName: s.name,
      })))
      .flat()

    setMarkers(_markers)
  }, [connectedServices, hiddenServices, setMarkers])

  return(
    <div className="col-sm-12 px-0 privacy-map-container">
      <FilterMenu
        open={filterListOpen}
        setOpen={setFilterListOpen}
        serviceNames={serviceNames}
        setHiddenServices={setHiddenServices}
        hiddenServices={hiddenServices}
        mapLayers={mapLayers}
        setMapLayers={setMapLayers}
      />

      <Map center={position} zoom={10} zoomControl={false} style={{zIndex: 50}}>
        <TileLayer
          {...mapProvider}
        />
        {mapLayers.heatmap
          ? 
          (<HeatmapLayer
            fitBoundsOnLoad
            fitBoundsOnUpdate
            points={markers}
            longitudeExtractor={m => m.pos[1]}
            latitudeExtractor={m => m.pos[0]}
            intensityExtractor={m => parseFloat(m.pos[2])}
          />)
          : null
        }
        {mapLayers.locationMarkers ?        
          (markers.map(m => (
            <Marker
              position={m.pos}
              icon={iconMarker}
              key={m.key}
            >          
              <Popup direction="top">
                <ul className="location-details-list m-0 p-0">
                  <li>Date: <span className="font-weight-bold">21.11.2019</span></li>
                  <li>Address: <span className="font-weight-bold">Jämeräntaival 1 A</span></li>
                  <li>Source: <span className="font-weight-bold">{m.serviceName}</span></li>
                </ul>
              </Popup>
            </Marker>
          )))
          :null
        }
      </Map>
    </div>
  );
}

const mapStateToProps = state => ({
  connectedServices: state.connectedServices,
  serviceNames: state.connectedServices.map(s => s.name)
})

export default connect(mapStateToProps)(MapWrapper);
