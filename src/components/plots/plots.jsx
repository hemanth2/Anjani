import ItemDataService from '../../services/item.service';
import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../fbconfig';
import { useHistory } from 'react-router-dom';

const Plots = () => {

    const navigate = useHistory();
    const queryParameters = new URLSearchParams(window.location.search)
    var type = queryParameters.get("id")
     const [item, setItem] = useState([]);
     const [pno, setPno] = useState([]);

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
    alert('Data submitted successfully!');
    navigate.push('/plots?id='+type);
  }
  const moveTo = ()  => {
    type=pno
    getItem();
    navigate.push('/plots?id='+type);
  }
  const inpChange=(event)=> {
    setPno(event.target.value)
  }

  return (
    <>   
    
    <div className='container' style={{width:'100%',textAlign: 'center',margin:'3rem',backgroundColor:'#ECF6F6',padding:'2rem' }}>
    <input type='text' value={pno} onChange={inpChange} placeholder='plot No'/><input type="submit" onClick={moveTo} value='Search'/>
    <br/><br/>
    <div style={{width:'100%',margin:'auto'}}>
        <p><strong>Plot No :</strong> {item.No}</p>
        <p><strong>Status :</strong> {item.Status}</p>
        <p><strong>Length :</strong> {item.Length}</p>
        <p><strong>Width :</strong> {item.Width}</p>
        <p><strong>Area :</strong> {item.Area}</p>
        <br/>
        <button onClick={updateStatus}>Update Status</button>
        <br/>
      </div>
    </div>
    </>
  )
}

export default Plots