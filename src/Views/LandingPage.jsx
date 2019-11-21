import  React, { useState } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react'
import { useHistory  } from "react-router-dom";

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
        :(<div className="row">
            <div className="col-12 my-4">
              <div className="card card-alert">
                <div className="card-body">
                  Looks like you havent connected any services
                </div>
              </div>
            </div>
          </div>
      )}
      
      <div className="row justify-content-around">
        <LandingPageItem description="Connected Services" to="./connected-services" {...{history}}/>
        <LandingPageItem description="Location Map" to="./location-map" {...{history}}/>
        <LandingPageItem description="Profile" to="./profile" {...{history}}/>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = state => ({
  hasConnectedServices: state.connectedServices.length !== 0
})

export default connect(mapStateToProps)(LandingPage)
