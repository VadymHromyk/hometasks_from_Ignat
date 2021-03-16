import React, {useState} from 'react';
import Affairs from './Affairs';

// types
export type AffairPriorityType = 'high' | 'middle' | 'low'
export type AffairType = {
    id: number
    name: string
    priority: 'high' | 'middle' | 'low'
};
export type FilterType = 'all' | AffairPriorityType;


const defaultAffairs: Array<AffairType> = [
    {id: 1, name: 'React', priority: 'high'},
    {id: 2, name: 'anime', priority: 'low'},
    {id: 3, name: 'games', priority: 'low'},
    {id: 4, name: 'work', priority: 'high'},
    {id: 5, name: 'html & css', priority: 'middle'},
    {id: 6, name: 'hobby', priority: 'low'},
    {id: 7, name: 'friends', priority: 'middle'},
    {id: 8, name: 'relax', priority: 'high'},
    {id: 9, name: 'drinking', priority: 'low'},
    {id: 10, name: 'eating', priority: 'low'}
]
function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs);
    const [filter, setFilter] = useState<FilterType>('all');


    const filterAffairs = (affairs: Array<AffairType>, filter: FilterType) => {
        if (filter === 'high') {
            affairs = affairs.filter(a => a.priority === 'high')
            return [...affairs]
        }
        if (filter === 'low') {
            affairs = affairs.filter(a => a.priority === 'low')
            return [...affairs]
        }
        if (filter === 'middle') {
            affairs = affairs.filter(a => a.priority === 'middle')
            return [...affairs]
        } else {
            return [...affairs]
        }
    }

    const filteredAffairs = filterAffairs(affairs, filter);

    const deleteAffair = (affairs: Array<AffairType>, id: number) => {
        affairs = affairs.filter(a => a.id !== id);
        setAffairs([...affairs])
    }

    const deleteAffairCallback = (id: number) => {
        deleteAffair(affairs, id)
    };

    return (
        <div>
            <hr/>
            homeworks 2

            <Affairs
                data={filteredAffairs} //{defaultAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            {/*<hr/>
            для личного творчества, могу проверить
            <AlternativeAffairs/>
            <hr/>*/}
        </div>
    );
}

export default HW2;
