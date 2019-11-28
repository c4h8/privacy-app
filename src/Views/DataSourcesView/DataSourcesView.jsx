import  React from 'react';

<<<<<<< Updated upstream
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
=======
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
>>>>>>> Stashed changes

function DataSourceItem({ name, connected }) {
  return (
    <li class="list-group-item">
      <h5>{name}</h5>
    </li>
  )
}

function DataSourceList() {
  return (
    <div className="col-sm-12">
      <ul className="list-group list-group-flush">
        {sources.map(s => <DataSourceItem {...s} /> )}
      </ul>
    </div>
  );
}

export default DataSourceList;
