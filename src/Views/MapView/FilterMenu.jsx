import  React, { useState, useEffect } from 'react';
import { Icon } from 'semantic-ui-react';
import Switch from "react-switch";

function FilterMenu({open, setOpen, serviceNames, hiddenServices, setHiddenServices}) {
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
            <ul className="list-group-flush p-0">
              {serviceNames.map(name => (
                <li className="list-group-item d-flex justify-content-between">
                    <span>{name}</span>
                    <Switch
                      onChange={() => setHiddenServices(state => ({...state, [name]: !hiddenServices[name]}))}
                      checked={!hiddenServices[name]} />
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