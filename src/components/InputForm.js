import React from 'react';
import './InputForm.css';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';

const InputForm = props => {

    const dispatch = useDispatch();
    const form = useSelector(state => state.form);
    const bears = useSelector(state => state.bear);

    const addBear = async () => {
        await axios.post(`http://localhost:8000/api/bears/`, form)
        dispatch({
            type: 'ADD_BEAR', bear: {
                id: bears.lenght > 0 ? bears[bears.lenght - 1].id + 1 : 0,
                ...form
            }
        })
    }

    return (
        <div className='form-container'>
            <h2>Add bear</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>
                            <input className='inpt' type="text" onChange={(e) => dispatch({ type: 'CHANGE_NAME', name: e.target.value })} />
                        </td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td>
                            <input className='inpt' type="number" onChange={(e) => dispatch({ type: 'CHANGE_WEIGHT', weight: e.target.value })} />
                        </td>
                    </tr>
                    <tr>
                        <td>Image</td>
                        <td>
                            <input className='inpt' type="text" onChange={(e) => dispatch({ type: 'CHANGE_IMG', img: e.target.value })} /> <br />
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button className='btn' onClick={() => addBear()}>CREATE</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default InputForm;