import './App.css';
import React, {useState} from 'react';
import UserService from './services/User'
import md5 from 'md5'

const UserAdd = ({setLisäystila, setIsPositive, setMessage, setShowMessage}) => {


//Komponentin tilan määritys

const [newFirstName, setNewFirstName] = useState('')
const [newLastName, setNewLastName] = useState('')
const [newEmail, setNewEmail] = useState('')
const [newAccesslevelId, setNewAccesslevelId] = useState(2)
const [newUser, setNewUser] = useState('')
const [newPassword, setNewPassword] = useState('')



// onSubmit tapahtumankäsittelijä funktio
const handleSubmit = (event) => {
  event.preventDefault()
  var newUser = {
    firstName: newFirstName,
    lastName: newLastName,
    email: newEmail,
    accesslevelId: parseInt(newAccesslevelId),
    password: md5(newPassword)
  }

  console.log(newUser)

  UserService.create(newUser)
  .then(response => {
    if (response.status === 200) {
      setMessage(`Added new User: ${newUser.firstName} ${newUser.lastName}`)
      setIsPositive(true)
      setShowMessage(true)

      setTimeout(() => {
        setShowMessage(false)
      }, 5000)

      setLisäystila(false)
    }
  

      })
      .catch(error => {
        setMessage(error)
        setIsPositive(false)
        setShowMessage(true)

        setTimeout(() => {
        setShowMessage(false)
      }, 6000)

      setLisäystila(false)

      })

      /*setTimeout(() => {
        setLisäystila(false)
      }, 500)*/

    }

  return (
    <div id="addNew">
        <h2>Customer add</h2>

        <form onSubmit={handleSubmit}>
          <div>
          <input type='text' value={newFirstName} onChange={({target}) => setNewFirstName(target.value)} placeholder='First Name' required/>
          </div>
          <div>
          <input type='text' value={newLastName} onChange={({target}) => setNewLastName(target.value)} placeholder='Last Name' required/>
          </div>
          <div>
          <input type='email' value={newEmail} onChange={({target}) => setNewEmail(target.value)} placeholder='Email' required/>
          </div>
          <div>
          <input type='number' value={newAccesslevelId} onChange={({target}) => setNewAccesslevelId(target.value)} placeholder='Access Level ID' required/>
          </div>
          <div>
          <input type='text' value={newUsername} onChange={({target}) => setNewUsername(target.value)} placeholder='Username' required/>
          </div>
          <div>
          <input type='password' value={newPassword} onChange={({target}) => setNewPassword(target.value)} placeholder='Password' required/>
          </div>

          <input type='submit' value='save' />
          <input type='button' value='back' onClick={() => setLisäystila(false)} />


        </form>

    </div>
  )
}

export default UserAdd
