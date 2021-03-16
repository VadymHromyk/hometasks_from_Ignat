import React, {ChangeEvent} from 'react'
import css from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (value: string) => void
    addUser: () => void
    error: boolean
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {

    const onChange = (e: ChangeEvent<HTMLInputElement>) => setNameCallback(e.currentTarget.value.trim())
    //обрезаем пробелы с помощью .trim()

    return (
        <div>
            <input value={name}
                   onChange={ onChange }
                   className={ error ? css.error : css.default }/>
            <span>{ error ? 'Field is empty!' : '' }</span>
            <button onClick={addUser} disabled={error}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
