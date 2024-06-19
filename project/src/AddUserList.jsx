import { useState } from "react"

export const AddUser = ({ onAdd }) => {

    const [user, setUser] = useState({ name: '', salary: '', profession: '' })
    const [error, setError] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        if (!user.name.trim()) {
            return setError('Name is required')
        }
        onAdd(user)
        setUser({ name: '', salary: '', profession: '' })
        setError('')
    }

    return <div>
        <h3>Add User</h3>
        <form onSubmit={handleSubmit}>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <input
                placeholder="Name"
                value={user.name}
                onChange={e => setUser({ ...user, name: e.target.value })}
            />
            <input
                placeholder="Surname"
                value={user.surname}
                onChange={e => setUser({ ...user, surname: e.target.value })}
            />
            <input
                placeholder="Login"
                value={user.login}
                onChange={e => setUser({ ...user, login: e.target.value })}
            />
            <input
                placeholder="Password"
                value={user.password}
                onChange={e => setUser({ ...user, password: e.target.value })}
            />
            <button type="submit">Add User</button>
        </form>
    </div>
}