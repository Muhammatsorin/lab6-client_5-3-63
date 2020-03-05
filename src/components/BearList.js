import React from 'react';
import BearCard from './BearCard';
import './BearList.css';

const BearList = props => {

    if (!props.bears || !props.bears.length)
        return (<h2>No bears</h2>)

    return (
        <div className='bearlist-container'>
            {
                props.bears.map((bear, index) => (
                    <div key={index} style={{ margin: 5 }}>
                        <BearCard  {...bear} updateBear={() => props.updateBear(bear.id)} deleteBear={() => props.deleteBear(bear.id)} />
                    </div>
                ))
            }
        </div>

    )
}

export default BearList;