import  React, { useState } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react'

function LandingPageItem({description, image}) {
  return (
    <div className="col-sm-6 col-md-4 col-lg-2">
      <div className="landing-page-item">
        <img src="http://placehold.jp/150x150.png" />
        {description}
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
      
      <div className="row">
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
