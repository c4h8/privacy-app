import  React, { useState, useEffect } from 'react';
import { Icon } from 'semantic-ui-react';
import Switch from "react-switch";

function FilterMenu({open, setOpen, serviceNames, hiddenServices, setHiddenServices, mapLayers, setMapLayers}) {
  const iconName = open ? 'close icon' : 'sliders horizontal';

  return(
    <div className={open ? 'map-filters open' : 'map-filters'}>
      <div className="icon-container">
        <Icon
          className="map-filters-icon"
          circular
          inverted
          size="large"
          name={iconName}
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
            <ul className="list-group-flush p-0 my-0">

              <li className="list-group-item d-flex justify-content-between">
                Map Options
              </li>
              <li className="list-group-item ml-2 d-flex justify-content-between">
                <span>Show Heatmap</span>
                <Switch
                  onChange={() => setMapLayers(state => ({...state, heatmap: !mapLayers.heatmap }))}
                  checked={mapLayers.heatmap}
                />
              </li>
              <li className="list-group-item ml-2 d-flex justify-content-between">
                <span>Show Location Markers</span>
                <Switch
                  onChange={() => setMapLayers(state => ({...state, locationMarkers: !mapLayers.locationMarkers }))}
                  checked={mapLayers.locationMarkers}
                />
              </li>

              {serviceNames.length === 0 
                ? null 
                : (
                  <li className="list-group-item d-flex justify-content-between">
                    Visible Services
                  </li>
                )
              }
              {serviceNames.map(name => (
                <li className="list-group-item ml-2 d-flex justify-content-between">
                  <span>{name}</span>
                  <Switch
                    onChange={() => setHiddenServices(state => ({...state, [name]: !hiddenServices[name]}))}
                    checked={!hiddenServices[name]}
                  />
                </li>
              ))}
            </ul>
          </div>
        )
      }
    </div>
  )
}

export default FilterMenu