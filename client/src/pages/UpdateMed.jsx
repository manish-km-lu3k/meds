import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateMed = () => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [med, setMed] = useState({
    name: '',
    info: ''
  });
  const navigate = useNavigate();
  const location = useLocation();
  const medId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setMed((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      if (med.name.length > 0 && med.info.length > 0) {
        await axios.put(`http://localhost:8000/medicine/${medId}`, med);
        navigate("/");
      } else {
        setIsEmpty(true);
      }

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='container2'>
      <h1>Update med</h1>
      <input type="text" placeholder='name' onChange={handleChange} name='name' />
      <input type="text" placeholder='info' onChange={handleChange} name='info' />

      <button onClick={handleClick}>UPDATE</button>
      <span>
        {
          isEmpty ? (
            <h3>Name and Info can't be empty!</h3>
          ) : (
            <h3> </h3>
          )
        }
      </span>
    </div>
  )
}

export default UpdateMed;