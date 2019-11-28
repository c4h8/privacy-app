import  React, { useState } from 'react';
import { connect } from 'react-redux';

function ListItem() {

}

function FakeProfile() {
  return (
    <React.Fragment>
      <li className="list-group-item">
        <div className="row">
          <div className="col-sm-12 col-md-3">
            Age
          </div>
          <div className="col-sm-12 col-md-9">
            20-25 Years
          </div>
        </div>
      </li>
      <li className="list-group-item">
        <div className="row">
        <div className="col-sm-12 col-md-3">
          Gender
        </div>
        <div className="col-sm-12 col-md-9">
          Male
        </div>
        </div>
      </li>
      <li className="list-group-item">
        <div className="row">
        <div className="col-sm-12 col-md-3">
          Location
        </div>
        <div className="col-sm-12 col-md-9">
          Uusimaa, Finland
        </div>
        </div>
      </li>
      <li className="list-group-item">
        <div className="row">
          <div className="col-sm-12 col-md-3">
            Interests
          </div>
          <div className="col-sm-12 col-md-9" style={{whiteSpace: 'pre-line'}}>
            <span>{`Adventure Games
              Audio Equipment
              Books & Literature
              Football
              Software Engineering
              Travelling
              Web Development`}
            </span>
          </div>
        </div>
      </li>
    </React.Fragment>
  )
}


function ProfileView({hasConnectedServices}) {
  return (
    <div className="col-sm-12">
      <h4 className="mt-4 mb-2 d-inline-block">Digital Profile</h4>
      <p className="font-weight-light mb-3">Based on your data, this is how you look like to the outside world</p>
      <li className="list-group list-group-flush">
        {hasConnectedServices
          ? <FakeProfile />
          :(<ul className="list-group-item">
              <p className="font-weight-light mr-3">No services connected</p>
            </ul>)}
      </li>
    </div>
  )
}




const mapStateToProps = state => ({
  hasConnectedServices: (state.connectedServices.length !== 0)
})

export default connect(mapStateToProps)(ProfileView)
