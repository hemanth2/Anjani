import ItemDataService from '../../services/item.service';
import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../fbconfig';
import { useHistory } from 'react-router-dom';

const Plots = () => {
    const navigate = useHistory();
    const queryParameters = new URLSearchParams(window.location.search)
    const type = queryParameters.get("id")
     const [item, setItem] = useState([]);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            getItem();
        } else {
            navigate.push('/login?id='+type+'&page=plots');
        }
      });    
  }, []);

  const getItem = async () => {
    const data = await ItemDataService.getItem(type);
    if(data.exists()){
        setItem(data.data());
    }    
  }
 const updateStatus = ()  => {
    item.Status = item.Status ==='Booked' ? 'Open' : 'Booked';
    ItemDataService.updateItem(type,item);
    navigate.push('/plots?id='+type);
  }

  return (
    <>
    <div className='container'>
        <p>Plot No : {item.No}</p>
        <p>Status : {item.Status}</p>
        <button onClick={updateStatus}>Update Status</button>
        <br/>
    </div>
    </>
  )
}

export default Plots