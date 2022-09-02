// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [userName, setUserName] = React.useState("")
  const userNameInputRef = React.useRef()

  const handleSubmit = (event) => {
      event.preventDefault()
      onSubmitUsername(userName)
  }

  const handleChange = () => {
      const userInput = userNameInputRef.current?.value
      setUserName(userInput.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input id="username" type="text" ref={userNameInputRef} onChange={handleChange} value={userName}/>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
