import  React, { useState } from 'react';
import { connect } from 'react-redux';
import { addService as _addService, removeService as _removeService } from '../../actions'
import AddSourceModal from './AddSourceModal'

function DataSourceItem({ name, connected, removeService }) {
  return (
    <li class="list-group-item">
      <h5>{name}</h5>
      connected: {connected ? ' yes' : ' no'}
      <button onClick={() => removeService(name)}>remove</button>
    </li>
  )
}

function DataSourceList({ connectedServices, addService, removeService }) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="col-sm-12">
      {modalOpen ? <AddSourceModal setModalOpen={setModalOpen} /> : null}
      <h3 className="my-4 d-inline-block">Connected Services</h3>
      <button className="btn btn-success float-right" onClick={() => setModalOpen(!modalOpen)}>{' + Add serivce'}</button>
      <ul className="list-group list-group-flush">
        {connectedServices.map(s => <DataSourceItem {...{name: s.name, connected: true, removeService}} /> )}
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
