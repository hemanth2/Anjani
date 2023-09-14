import React, { useState, useEffect } from 'react';
import ItemDataService from '../../services/item.service';

const Report = () => {
    useEffect(() => {
    const today = new Date();
    const todayString = today.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    setStartDate(todayString);
  }, []);

  const [startDate, setStartDate] = useState('');
  const [results, setResults] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const startTimestamp = new Date(startDate);
      const data = await ItemDataService.filterItem(startTimestamp);
      let allRecs=[];
      data.docs.map((doc) => {
        allRecs.push(doc.data());
      })
      setResults(allRecs)
    } catch (error) {
      console.error('Error searching records:', error);
    }
  }

  return (
    <>
      <div className='container' style={{width:'100%',textAlign: 'center',marginTop:'3rem',backgroundColor:'#ECF6F6',padding:'2rem' }}>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        &emsp;
        <button style={{padding:'10px'}} type="submit">Search</button>
      </form>
      <table style={{width:'100%'}}>
        <tr>
          <th>Number</th>
          <th>Status</th>
          <th>Length</th>
          <th>Width</th>
          <th>Area</th>
        </tr>
        {results.map((item, index) => (
          <tr>
            <td> {item.No}</td>
            <td>{item.Status}</td>
            <td>{item.Length}</td>
            <td>{item.Width}</td>
            <td>{item.Area}</td>
        </tr>

        ))}
      </table>
    </div>
    </>
  )
}

export default Report
