import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { UserList } from './UserList'
import { AddUser } from './AddUserList'
import './App.css'

function App() {
  const [users, setUsers] = useState([
    { id: 101, name: 'Joe', surname: 'Asatryan', login: 'asatryan999@gmail.com', password: 'joe1234' }
  ])

  const handleAdd = (obj) => {
    setUsers([...users, { ...obj, id: Date.now() }])
  }

  return <>
    <UserList users={users} />
    <AddUser onAdd={handleAdd} />
  </>
}

export default App
