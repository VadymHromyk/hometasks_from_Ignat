import React, {useState} from 'react'
import Greeting from './Greeting'

type GreetingContainerPropsType = {
    addUserCallback: (name: string) => void
    totalUsers: number
}

const GreetingContainer: React.FC<GreetingContainerPropsType> =
    ({addUserCallback, totalUsers}) => { // деструктуризация пропсов

        const [name, setName] = useState<string>('')
        const [error, setError] = useState<boolean>(true)

        const setNameCallback = (value: string) => {
            if (!value) {
                setName(value)
                setError(true)
            } else {
                setName(value)
                setError(false)
            }
        }

        const addUser = () => {
            addUserCallback(name)
            alert(`Hello ${name} !`)
            setName('')
            setError(true)
        }

        return (
            <Greeting
                name={name}
                setNameCallback={setNameCallback}
                addUser={addUser}
                error={error}
                totalUsers={totalUsers}
            />
        )
    }

export default GreetingContainer
