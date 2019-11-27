import  React, { useState, useEffect } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import Switch from "react-switch";

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

function FilterButton({open, setOpen, serviceNames, hiddenServices, setHiddenServices}) {
  return(
    <div className={open ? 'map-filters open' : 'map-filters'}>
      <div className="icon-container">
        <Icon circular
          inverted size="large"
          name="sliders horizontal"
          className="icon orange"
          onClick={() => setOpen(!open)}
        />
        {open
          ? <span>{'   Map options'}</span>
          : null
        }
      </div>
      {(!open)
        ? null
        : (
          <div className="col-12 map-filters-body">
            {serviceNames.map(name => (
              <div>
                <label>
                  <span>{name}</span>
                  {console.log('', name, !serviceNames[name])}
                  {console.log('service names', serviceNames)}
                  <Switch
                    onChange={() => setHiddenServices(state => ({...state, [name]: !hiddenServices[name]}))}
                    checked={!hiddenServices[name]} />
                </label>
              </div>
            ))}
          </div>
        )
      }
    </div>
  )
}

function MapWrapper({connectedServices, serviceNames}) {
  const [filterListOpen, setFilterListOpen] = useState(false)
  const [hiddenServices, setHiddenServices] = useState({})
  const [markers, setMarkers] = useState([])

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
      <Map center={position} zoom={10} zoomControl={false}>
        <TileLayer
          {...mapProvider}
        />
        {markers.map(m => (
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
        ))}
      </Map>
      <FilterButton open={filterListOpen} setOpen={setFilterListOpen} serviceNames={serviceNames} setHiddenServices={setHiddenServices} hiddenServices={hiddenServices} />
    </div>
  );
}

const mapStateToProps = state => ({
  connectedServices: state.connectedServices,
  serviceNames: state.connectedServices.map(s => s.name)
})

export default connect(mapStateToProps)(MapWrapper);
