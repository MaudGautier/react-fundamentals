// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState(null)
  const userNameInputRef = React.useRef()

  const handleSubmit = (event) => {
      const userNameInput = userNameInputRef.current?.value
      event.preventDefault()
      onSubmitUsername(userNameInput)
  }

  const handleChange = () => {
      const userInput = userNameInputRef.current?.value
      const isValid = userInput === userInput.toLowerCase()
      setError(isValid ? null : 'Username must be lower case')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input id="username" type="text" ref={userNameInputRef} onChange={handleChange}/>
      </div>
      <div role="alert" style={{color: 'red'}}>
          {error}
      </div>
      <button type="submit" disabled={Boolean(error)}>Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
