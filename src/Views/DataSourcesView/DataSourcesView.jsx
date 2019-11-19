import  React from 'react';

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

function DataSourceItem({ name, connected }) {
  return (
    <li class="list-group-item">
      <p>{name}</p>
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
