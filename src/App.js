import React, { useState, useEffect } from 'react'
import './App.css'

import Laskuri from './Laskuri'
import Posts from './Posts'
import CustomerList from './CustomerList'
import UserList from './UserList'
import Message from './Message'
import Login from './Login'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const App = () => {

const [message, setMessage] = useState('')
const [isPositive, setIsPositive] = useState(false)
const [showMessage, setShowMessage] = useState(false)
const [loggedInUser, setLoggedInUser] = useState('')
const [accessLevelId, setAccessLevelId] = useState(null)

// Logout toiminto
const logout = () => {
  localStorage.clear()
  setLoggedInUser('')
          setAccessLevelId(null)
}

useEffect(() => {
  const storedUser = localStorage.getItem("username")
  const storedAccessLevelId = localStorage.getItem("accesslevelId")

  if (storedUser) {
    setLoggedInUser(storedUser)
  }

  if (storedAccessLevelId) {
    setAccessLevelId(parseInt(storedAccessLevelId, 10))
  }
}, [])




  return (
    <div className="App">

    {!loggedInUser &&
      <Login setMessage={setMessage} setIsPositive={setIsPositive} 
      setShowMessage={setShowMessage} setLoggedInUser={setLoggedInUser} />
    }

{ loggedInUser &&
      //<Login setMessage={setMessage} setIsPositive={setIsPositive} setShowMessage={setShowMessage} />
      //{accessLevelId === 1 && (<Nav.Link as={Link} to="/users">Users</Nav.Link>)}
      //Vaatii sivun päivityksen ennenkuin accessLevelId päivittyy oikein hmm...

      <Router>
        <Navbar bg="dark" variant="dark">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/customers">Customers</Nav.Link>

            
            {accessLevelId === 1 && (
              <Nav.Link as={Link} to="/users">Users</Nav.Link>
            )}
                  
            

            <Nav.Link as={Link} to="/laskuri">Laskuri</Nav.Link>
            <Nav.Link as={Link} to="/posts">Typicode posts</Nav.Link>
            <button onClick={() => logout()}>Logout</button>
          </Nav>
        </Navbar>

        <h1>Northwind Traders</h1>

        {showMessage && (
          <Message message={message} isPositive={isPositive} />
        )}

        <Routes>
          <Route
            path="/customers"
            element={
              <CustomerList
                setMessage={setMessage}
                setIsPositive={setIsPositive}
                setShowMessage={setShowMessage}
              />
            }
          />

          <Route
            path="/users"
            element={
              <UserList
                setMessage={setMessage}
                setIsPositive={setIsPositive}
                setShowMessage={setShowMessage}
              />
            }
          />

          <Route path="/laskuri" element={<Laskuri />} />
          <Route path="/posts" element={<Posts />} />
          
        </Routes>
      </Router>
}
    </div>
  )
}

export default App