import React, { useEffect } from 'react'
import axios from 'axios'
import BearCard from './BearCard';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import './BearList.css';

const BearList = props => {
    //by store
    const bears = useSelector(state => state.bear);
    const dispatch = useDispatch();

    const getBears = async () => {
        const result = await axios.get(`http://localhost:8000/api/bears`)

        dispatch({ type: 'GET_BEARS', bears: result.data })
    }

    useEffect(() => {
        getBears()
    }, [])

    if (!bears || !bears.length)
        return (<h2>No bears</h2>)

    return (
        <div className='bearlist-container'>
            {
                bears.map((bear, index) => (
                    <div key={index} style={{ margin: 5 }}>
                        <BearCard  {...bear} updateBear={() => props.updateBear(bear.id)} deleteBear={() => props.deleteBear(bear.id)} />
                    </div>
                ))
            }
        </div>

    )
}

export default BearList;