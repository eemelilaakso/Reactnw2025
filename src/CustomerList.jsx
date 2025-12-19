import './App.css';
import React, {useState, useEffect} from 'react';
import CustomerService from './services/Customer'


const CustomerList = () => {


//Komponentin tilan määritys

const [customers, setCustomers] = useState([])
const [showCustomers, setShowCustomers] = useState(false)


useEffect(() => {
  CustomerService.getAll()
  .then(data => {
    setCustomers(data)
})
},[]
)

  return (
    <>
        <h3 onClick={() => setShowCustomers(!showCustomers)}>Customers</h3>

        {
            showCustomers && customers && customers.map(c => (
              <h3 key={c.customerId}>{c.companyName}</h3>
            )

            )
        }

    </>
  );
}

export default CustomerList;
