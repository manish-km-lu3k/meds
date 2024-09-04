import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddMed = () => {
  const [med, setMed] = useState({
    name: '',
    info: '',
  });
  
  const navigate = useNavigate();
  const [isEmpty, setIsEmpty] = useState(false);
  const handleChange = (e) => {
    setMed((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      if (med.name.length > 0 && med.info.length > 0) {
        await axios.post("http://localhost:8000/medicine", med);
        navigate("/");
      } else {
        setIsEmpty(true);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    
  }, [isEmpty]);

  return (
    <div className='container2'>
      <h1>Add New med</h1>
      <input type="text" placeholder='name' onChange={handleChange} name='name' />
      <input type="text" placeholder='info' onChange={handleChange} name='info' />

      <button onClick={handleClick}>ADD</button>
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

export default AddMed;