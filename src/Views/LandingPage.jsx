import  React, { useState } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react'
import { useHistory  } from "react-router-dom";

import NoConnectedServicesAlert from '../Components/NoConnectedServicesAlert';

function LandingPageItem({description, to, image, history}) {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 py-3 item-container">
      <div 
        className="landing-page-item"
        onClick={() => history.push(to)}
      >
        <div className="square-parent mx-5 mx-md-3">
          <img
            className="square-content"
            src="http://placehold.jp/150x150.png"
          />
        </div>
        <p className="my-3">{description}</p>
      </div>
    </div>
  );
}

function LandingPage({ hasConnectedServices }) {
  const history = useHistory();

  return(
    <React.Fragment>
      {hasConnectedServices
        ? null
        : <NoConnectedServicesAlert /> }
      
      <div className="row justify-content-around">
        <LandingPageItem description="Connected Services" to="./connected-services" {...{history}}/>
        <LandingPageItem description="Location Map" to="./location-map" {...{history}}/>
        <LandingPageItem description="Digital Profile" to="./profile" {...{history}}/>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = state => ({
  hasConnectedServices: state.connectedServices.length !== 0
})

export default connect(mapStateToProps)(LandingPage)
