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

export default FilterMenu