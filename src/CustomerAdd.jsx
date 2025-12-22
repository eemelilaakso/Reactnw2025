import './App.css';
import React, {useState} from 'react';
import CustomerService from './services/Customer'

const CustomerAdd = () => {


//Komponentin tilan määritys

const [newCustomerId, setNewCustomerId] = useState('')
const [newCompanyName, setNewCompanyName] = useState('')
const [newContactName, setNewContactName] = useState('')
const [newContactTitle, setNewContactTitle] = useState('')

const [newCountry, setNewCountry] = useState('')
const [newAddress, setNewAddress] = useState('')
const [newCity, setNewCity] = useState('')
const [newRegion, setNewRegion] = useState('')

const [newPostalCode, setNewPostalCode] = useState('')
const [newPhone, setNewPhone] = useState('')
const [newFax, setNewFax] = useState('')

// onSubmit tapahtumankäsittelijä funktio

const handleSubmit = (event) => {
  alert('Formi submitoitu')
}

  return (
    <div id="addNew">
        <h2>Customer add</h2>

        <form onSubmit={handleSubmit}>
          <div>
          <input type='text' value={newCustomerId} onChange={({target}) => setNewCustomerId(target.value)} placeholder='Customer ID with 5 capital letters' maxLength='5' minLength='5' required/>
          </div>
          <div>
          <input type='text' value={newCompanyName} onChange={({target}) => setNewCompanyName(target.value)} placeholder='Company Name' required/>
          </div>
          <div>
          <input type='text' value={newContactName} onChange={({target}) => setNewContactName(target.value)} placeholder='Contact Name' required/>
          </div>
          <div>
          <input type='text' value={newContactTitle} onChange={({target}) => setNewContactTitle(target.value)} placeholder='Contact Title' required/>
          </div>
          <div>
          <input type='text' value={newAddress} onChange={({target}) => setNewAddress(target.value)} placeholder='Address' required/>
          </div>
          <div>
          <input type='text' value={newCity} onChange={({target}) => setNewCity(target.value)} placeholder='City' required/>
          </div>
          <div>
          <input type='text' value={newRegion} onChange={({target}) => setNewRegion(target.value)} placeholder='Region' required/>
          </div>
          <div>
          <input type='text' value={newPostalCode} onChange={({target}) => setNewPostalCode(target.value)} placeholder='Postal Code' required/>
          </div>
          <div>
          <input type='text' value={newCountry} onChange={({target}) => setNewCountry(target.value)} placeholder='Country' required/>
          </div>
          <div>
          <input type='text' value={newPhone} onChange={({target}) => setNewPhone(target.value)} placeholder='Phone' required/>
          </div>
          <div>
          <input type='text' value={newFax} onChange={({target}) => setNewFax(target.value)} placeholder='Fax' required/>  
          </div>
          
          <input type='submit' value='save' />


        </form>

    </div>
  )
}

export default CustomerAdd
