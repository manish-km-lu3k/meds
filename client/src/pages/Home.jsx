import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const Home = () => {
  const [medicine, setMedicine] = useState([]);

  useEffect(() => {
    const fetchMedicine = async () => {
      try {
        const response = await axios.get("http://localhost:8000/");
        setMedicine(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchMedicine();
  }, []);

  const handleDelete = async (medId) => {
    try {
      // Send a DELETE request to the server
      await axios.delete(`http://localhost:8000/medicine/${medId}`);

      // Redirect or refresh the page after deletion
      window.location.reload();
    } catch (err) {
      console.error('Error:', err.response ? err.response.data : err.message);
    }
  };

  return (
    <div className='container'>
      {medicine.map(med => (
        <div className='meds' key={med._id}>
          <h2 className='name'>{med.name}</h2>
          <h2 className='info'>{med.info}</h2>
          <button className='delete' onClick={() => handleDelete(med._id)}>Delete</button>
          <button className='update'><Link className='link' to={`/update/${med._id}`}>Update</Link></button>
          <br />
        </div>
      ))}
    </div>
  )
}

export default Home;