import React from 'react';
import {AffairType} from './HW2';
import css from './Affairs.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair.id)
    };

    return (
        <div className={css.main}>
            <div> {props.affair.name} </div>
            <div
                className={props.affair.priority === 'high' ? css.priorityH :
                    props.affair.priority === 'middle' ? css.priorityM :
                        css.priorityL
                }>
                [{props.affair.priority}]
            </div>
            <button onClick={deleteCallback}>X</button>
        </div>
    );
}

export default Affair;
