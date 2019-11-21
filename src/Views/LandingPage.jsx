import  React, { useState } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react'

function LandingPageItem({description, image}) {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 py-3 item-container">
      <div className="landing-page-item">
        <div className="square-parent mx-5 mx-md-3">
          <img
            className="square-content"
            src="http://placehold.jp/150x150.png"
          />
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

function LandingPage({ hasConnectedServices }) {
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
      
      <div className="row" style={{justifyContent: 'space-between'}}>
        <LandingPageItem description="eka itemi"/>
        <LandingPageItem description="toka itemi"/>
        <LandingPageItem description="toka itemi"/>
        <LandingPageItem description="kolmas"/>
        <LandingPageItem description="vika itemi"/>
        <LandingPageItem description="toka itemi"/>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = state => ({
  hasConnectedServices: state.connectedServices.length !== 0
})

export default connect(mapStateToProps)(LandingPage)
