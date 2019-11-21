import  React, { useState } from 'react';
import { connect } from 'react-redux';
import { addService as _addService } from '../../actions'
import LoginView from '../LoginView'

const avaibleServices = [
  'google',
  'facebook',
  'asd'
]

function AddSourceModal({setModalOpen, connectedServiceNames, addService}) {
  const [formState, setFormState] = useState({})
  const [googleLoggedIn, setGoogleLoggedIn] = useState(false)

  const handleChange = (e) => {
    e.preventDefault(); 
    const target = e.target
    const value = target.value;
    const name = target.name;

    setFormState({...formState, [name]: value})
  }

  const handeSubmit = () => {
    alert(formState.service);
  }

  return(
    <div class="modal fade show d-block" style={{zIndex: 600}} id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">
      <div className="modal d-block" tabindex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Connect a Service</h5>
              <button type="button" className="close" onClick={() => setModalOpen(false)} aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <select
                className="form-control"
                name="service"
                value={formState.service}
                onChange={handleChange}
              >
                <option hidden>Select a service to connect</option>
                {avaibleServices.map(s =>
                  connectedServiceNames.includes(s)
                  ? null
                  : <option key={s} value={s}>{s}</option>
                )}
              </select>
              {console.log('Show google login', (googleLoggedIn || !(formState.service && formState.service === 'google')) )}
              {googleLoggedIn || !(formState.service && formState.service === 'google')
                ? null
                : <LoginView setGoogleLoggedIn={setGoogleLoggedIn}/>
              }
              {googleLoggedIn 
                ? <div className="text-center mt-4 mb-2">Logged In with Google</div>
                : null
              }
            </div>
            <div className="modal-footer">
              <button 
                className={formState.service ? 'btn btn-primary' : 'btn btn-primary disabled'}
                disabled={!formState.service || (formState.service && formState.service === 'google' && !googleLoggedIn)}
                onClick={() => {
                  addService(formState.service)
                  setModalOpen(false)
                }}
              >
                Connect Service
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => setModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  connectedServiceNames: state.connectedServices.map(s => s.name)
})

const mapDispatchToProps = dispatch => ({
  addService: name => dispatch(_addService(name))
})


export default connect(mapStateToProps, mapDispatchToProps)(AddSourceModal)
