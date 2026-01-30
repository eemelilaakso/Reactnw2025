
import './App.css'
import React, {useState} from 'react'
import UserService from './services/User'
import md5 from 'md5'

const UserAdd = ({setLisäystila, setIsPositive, setMessage, setShowMessage}) => {

// Komponentin tilan määritys
// Id arvo määritellään tietokannassa automaattisesti,
// emme anna sitä itse
const [newFirstname, setNewFirstname] = useState('')
const [newLastname, setNewLastname] = useState('')
const [newEmail, setNewEmail] = useState('')
const [newAccesslevelId, setNewAccesslevelId] = useState(2)
const [newUsername, setNewUsername] = useState('')
const [newPassword, setNewPassword] = useState('')
const [confirmPassword, setConfirmPassword] = useState('')


const passwordsMatch = newPassword === confirmPassword

// onSubmit tapahtumankäsittelijä funktio
const handleSubmit = (event) => {
      event.preventDefault()
      var newUser = {
        firstname: newFirstname,
        lastname: newLastname,
        email: newEmail,
        accesslevelId: parseInt(newAccesslevelId),
        username: newUsername,
        password: md5(newPassword) // Salataan md5 kirjaston metodilla

        
    }

 if (!passwordsMatch) {
    setMessage("Passwords do not match")
    setIsPositive(false)
    setShowMessage(true)

    setTimeout(() => {
      setShowMessage(false)
    }, 4000)

    return
  }
    
    console.log(newUser)


    UserService.create(newUser)
    .then(response => {
      if (response.status === 200) {
       setMessage(`Added new User: ${newUser.firstname} ${newUser.lastname}`)
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
      })
    }


  return (
    <div id="addNew">
       <h2>User add</h2>

       <form onSubmit={handleSubmit}>
            <div>
                <input type="text" value={newFirstname} placeholder="First name"
                    onChange={({ target }) => setNewFirstname(target.value)} required />
            </div>
            <div>
                <input type="text" value={newLastname} placeholder="Last name"
                    onChange={({ target }) => setNewLastname(target.value)} required />
            </div>
            <div>
                <input type="email" value={newEmail} placeholder="Email"
                    onChange={({ target }) => setNewEmail(target.value)} />
            </div>
            <div>
                <input type="number" value={newAccesslevelId} placeholder="Access level"
                    onChange={({ target }) => setNewAccesslevelId(target.value)} />
            </div>
            <div>
                <input type="text" value={newUsername} placeholder="Username"
                    onChange={({ target }) => setNewUsername(target.value)} />
            </div>
            <div>
                <input type="password" value={newPassword} placeholder="Password"
                    onChange={({ target }) => setNewPassword(target.value)} />
            </div>
            <div>
            <input type="password" value={confirmPassword}
              placeholder="Confirm password"
              onChange={({ target }) => setConfirmPassword(target.value)}
              />

  {!passwordsMatch && confirmPassword.length > 0 && (
    <p style={{ color: 'red', margin: 0 }}>
      Passwords do not match
    </p>
  )}
</div>
            
         <input type='submit' value='save' disabled={!passwordsMatch || newPassword.length === 0} />
         <input type='button' value='back' onClick={() => setLisäystila(false)} />
       </form>

    </div>
  )
}

export default UserAdd
