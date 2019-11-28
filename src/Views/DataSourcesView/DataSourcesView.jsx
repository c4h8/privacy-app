import  React, { useState } from 'react';
import { connect } from 'react-redux';
import { addService as _addService, removeService as _removeService } from '../../actions'
import AddSourceModal from './AddSourceModal'
import { Icon } from 'semantic-ui-react'

function DataSourceItem({ name, iconName, connected, removeService }) {
  return (
    <li class="list-group-item">
      <div className="service-item">
        <Icon circular className="mr-3" name={iconName} size="big" />
        <h5>{name}</h5>
        <button className="float-right" style={{margin: '10px'}} onClick={() => removeService(name)}>Remove</button>
      </div>
    </li>
  )
}

function NoDataSourcesItem({}) {
  return (
    <li className="list-group-item">
      <p className="font-weight-light mr-3">No services connected</p>
    </li>
  )
}

function DataSourceList({ connectedServices, addService, removeService }) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="col-sm-12 px-4">
      {modalOpen ? <AddSourceModal setModalOpen={setModalOpen} /> : null}
      <div className="connected-services-header">
        <h4 className="my-4 d-inline-block">Connected Services</h4>
        <button 
          className="btn btn-success float-right"
          onClick={() => setModalOpen(!modalOpen)}
        >
         <Icon className="mr-2" name="plus circle" size="large" />
          Add Service
        </button>
      </div>
      <ul className="list-group list-group-flush">
        {connectedServices.map(s => 
          <DataSourceItem 
            key={s.name} 
            {...{name: s.name, iconName: s.iconName, connected: true, removeService}} 
          /> 
        )}
        {connectedServices.length === 0 ? <NoDataSourcesItem /> : null }
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({
  connectedServices: state.connectedServices
})

const mapDistapchToProps = dispatch => ({
  addService: (name) => dispatch(_addService(name)),
  removeService: (name) => dispatch(_removeService(name))
})

export default connect(mapStateToProps, mapDistapchToProps)(DataSourceList);
