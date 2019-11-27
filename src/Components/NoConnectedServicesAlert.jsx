import  React from 'react';
import { Icon } from 'semantic-ui-react'
import { Link  } from "react-router-dom";

function NoConnectedServicesAlert() {
  return(
    <div className="row">
      <div className="col-12 my-4">
        <div className="card card-alert">
          <div className="card-body">
          <Icon className="info circle large" />
            {'  '}
            You havent connected any services, so no data is shown. Click
            <Link to="/connected-services">
              {' here '}
            </Link>
            to connect services.
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoConnectedServicesAlert