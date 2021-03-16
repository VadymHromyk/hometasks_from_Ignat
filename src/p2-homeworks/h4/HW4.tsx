import React, {ChangeEvent, useState} from 'react'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import s from './HW4.module.css'
import SuperButton from './common/c2-SuperButton/SuperButton'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'

function HW4() {
    const [text, setText] = useState<string>('')
    const error = text ? '' : 'Incorrect entry.'

    const showAlert = () => {
        if (error) {
            alert('Empty field.')
        } else {
            alert(text) // если нет ошибки показать текст
        }
    }

    const [toggleButton, setToggleButton] = useState<boolean>(false) // вкл/выкл кнопку

    const [checked, setChecked] = useState<boolean>(false)
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)

    return (
        <div>
            <hr/>
            homeworks 4

            <div className={s.column}>
                <SuperInputText
                    value={text}
                    onChangeText={setText}
                    onEnter={showAlert}
                    error={error}
                    spanClassName={s.testSpanError}
                />

                <SuperInputText
                    className={s.blue} // проверьте, рабоет ли смешивание классов
                />

                {/*----------------------------------------------------*/}

                <SuperButton
                    toggleButton={toggleButton}
                >
                    Default {/*// название кнопки попадёт в children*/}
                </SuperButton>

                <SuperButton
                    toggleButton={toggleButton}
                    red // пропсу с булевым значением не обязательно указывать true
                    // onClick={showAlert}
                >
                    Delete {/*// название кнопки попадёт в children*/}
                </SuperButton>

                <SuperButton
                    toggleButton={true}
                    onClick={showAlert}
                >
                    Disabled {/*// название кнопки попадёт в children*/}
                </SuperButton>

                {/*----------------------------------------------------*/}

                <SuperCheckbox
                    checked={checked}
                    onChangeChecked={setChecked}
                >
                    some text {/*// этот текст попадёт в children*/}
                </SuperCheckbox>

                {/*// onChange тоже должен работать*/}
                <SuperCheckbox checked={checked} onChange={testOnChange}/>
            </div>

            {/*<hr/>
            для личного творчества, могу проверить
            <AlternativeSuperInputText/>
            <AlternativeSuperButton/>
            <AlternativeSuperCheckbox/>
            <hr/>*/}
        </div>
    )
}

export default HW4