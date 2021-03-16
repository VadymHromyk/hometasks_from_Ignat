import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'

// types
export type UserType = {
    _id: number
    name: string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([])

    const addUserCallback = (name: string) => {
        const newUser = { _id: 1, name: name }
        setUsers( [...users, newUser] )
    }

    const totalUsers = users.length

    return (
        <div>
            <hr/>
            homeworks 3
            <GreetingContainer addUserCallback={addUserCallback} totalUsers={totalUsers} />

            {/*<hr/>
            для личного творчества, могу проверить
            <AlternativeGreeting/>
            <hr/>*/}
        </div>
    )
}

export default HW3
