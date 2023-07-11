import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Events = () => {

  const [data,setData]=useState([]);
  const [loading,setLoading]=useState(false);

  const fetchData=async()=>{
    setLoading(true);
    try{
      axios.get('https://events-86ceb-default-rtdb.asia-southeast1.firebasedatabase.app/event.json')
      .then((data) => {
        let Events = [];
      for (const key in data.data) {
        Events.push({
          id: key,
          title: data.data[key].title,
          location: data.data[key].location,
          description: data.data[key].description,
          date: data.data[key].date,
          image: data.data[key].image,
        });
      }
      setData(Events);
    }).catch((error) => console.log(error))
    }catch(error){
      alert("Error fetching data");
    }finally{
      setLoading(false);
    }
  }
  
  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className='container'>
        {data.length && data.map((value,index) => {
          return (
            <div key={index} className='event-container'>
              <div>
                 <img src={value.image} alt="pics"/>
              </div>
              <div>
                 <h2>{value.title}</h2>
                 <p>{value.description}</p>
                 <span><strong>Location:</strong>&nbsp;{value.location}&nbsp;&nbsp;</span>
                 <br/>
                 <span><strong>Date and Time:</strong>&nbsp;{value.date}</span>
              </div>
            </div>
          )
        })}
        {loading && <h1>Loading...</h1>}
    </div>
  )
}

export default Events