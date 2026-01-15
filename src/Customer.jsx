import './App.css';
import React, {useState} from 'react';
import CustomerService from './services/Customer'

// props on nimeltään customer
const Customer = ({customer, editCustomer, setIsPositive, setMessage, setShowMessage, reload, reloadNow}) => {

//Komponentin tilan määritys
const [showDetails, setShowDetails] = useState(false)

const deleteCustomer = (customer) => {
    let vastaus = window.confirm(`Remove Customer ${customer.companyName}`)
    
    if (vastaus === true) {     //alert("deleting: " + customer.companyName) ``= `SHIFT + "´plussan oikea´"`

    CustomerService.remove(customer.customerId)
    .then(res => {  //.then(res => alert(res.data))
        if(res.status === 200) {
        setMessage(`Successfully Removed customer ${customer.companyName}`)
        setIsPositive(true)
        setShowMessage(true)
        window.scrollBy(0, -10000) //scrollataan ylös

        //ilmoituksen piilotus
        setTimeout(() => {
        setShowMessage(false)},
        5000
        )
        reloadNow(!reload)
        }
            }
        )
          .catch(error => {
        setMessage(error)
        setIsPositive(false)
        setShowMessage(true)
        window.scrollBy(0, -10000) //scrollataan ylös

        setTimeout(() => {
        setShowMessage(false)
      }, 6000)

      })

    } //poiston peruutus //window.location.reload()
    else {
        setMessage('Poisto peruttu onnistuneesti')
        setIsPositive(true)
        setShowMessage(true)
        window.scrollBy(0, -10000) //scrollataan ylös

        //ilmoituksen piilotus
        setTimeout(() => {
        setShowMessage(false)},
        5000
        )
    }
    
}

  return (
    <div className='customerDiv'>
        <h4 onClick={() => setShowDetails(!showDetails)}>
            {customer.companyName} , {customer.country}
            </h4>

        {showDetails && <div className="customerDetails">
            <h3>{customer.companyName}</h3>
            <button onClick={() => deleteCustomer(customer)}>Delete</button>
            <button onClick={() => editCustomer(customer)}>Edit</button>
            <table>
                <thead>
                    <tr>
                        <th>Contact Person</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{customer.contactName}</td>
                        <td>{customer.phone}</td>
                        <td>{customer.address}</td>
                        <td>{customer.city}</td>
                        <td>{customer.country}</td>                        
                    </tr>
                </tbody>
            </table></div>}
    </div>
  )
}

export default Customer;
