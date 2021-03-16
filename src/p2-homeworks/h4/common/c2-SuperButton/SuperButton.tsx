import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
    toggleButton?: boolean
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        red, className, toggleButton,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    // const finalClassName = `${red ? s.red : s.default} ${toggleButton ? s.disabled : } ${className}`
    const finalClassName = className || toggleButton ? s.disabled : red ? s.red : s.default

    return (
        <button
            disabled={toggleButton}
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
