import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BearCard from './components/BearCard'
import BearList from './components/BearList'
import InputForm from './components/InputForm';

export default () => {

  const [bears, setBears] = useState({})
  const [formData, setData] = useState({
    name: '',
    weight: 0,
    img: ''
  });

  const { name, weight, img } = formData;

  const getBears = async () => {
    const result = await axios.get(`http://localhost:8000/api/bears`)
    setBears(result.data)
  }

  const addBear = async () => {
    const result = await axios.post(`http://localhost:8000/api/bears/`, {
      name,
      weight,
      img
    })
    console.log(result.data)
    getBears()
  }

  const deleteBear = async (id) => {
    const result = await axios.delete(`http://localhost:8000/api/bears/${id}`)
    console.log(result.data)
    getBears()
  }

  const updateBear = async (id) => {
    console.log(name, weight, img);
    const result = await axios.put(`http://localhost:8000/api/bears/${id}`, {
      name,
      weight,
      img
    })
    console.log('bear id update: ', result.data)
    getBears()
  }

  useEffect(() => {
    getBears()
  }, [])

  return (
    <div>
      <h2>Bears</h2>
      <BearList bears={bears} deleteBear={deleteBear} updateBear={updateBear}/>
      <InputForm data={formData} onChange={setData} addBear={addBear}/>
    </div>
  )
}
