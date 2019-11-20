import  React from 'react';
import { connect } from 'react-redux';
import {addService, removeService} from '../../actions'

const sources = [
  {
    name: 'facebook',
    connected: false
  },
  {
    name: 'google',
    connected: false
  },
  {
    name: 'joku palvelu',
    connected: false
  },
  {
    name: 'asdasdasd',
    connected: false
  },
]

function AddSourceButton(){
  
}

function DataSourceItem({ name, connected, dispatch }) {
  return (
    <li class="list-group-item">
      <h5>{name}</h5>
      connected: {connected ? ' yes' : ' no'}

<button onClick={() => dispatch(removeService(name))}>remove</button>


    </li>
  )
}

function DataSourceList({connectedServices, dispatch}) {
  return (
    <div className="col-sm-12">
      <h3 className="my-4 d-inline-block">Connected Services</h3>
      <button className="btn btn-success float-right">{' + Add serivce'}</button>
      <ul className="list-group list-group-flush">
        {connectedServices.map(s => <DataSourceItem {...{name: s.name, connected: true, dispatch}} /> )}
      </ul>
      <button onClick={() => dispatch(addService('facebook'))}>add facebook</button>
      <button onClick={() => dispatch(addService('google'))}>add google</button>
    </div>
  );
}

const mapStateToProps = state => ({
  connectedServices: state.connectedServices
})

export default connect(mapStateToProps)(DataSourceList);
