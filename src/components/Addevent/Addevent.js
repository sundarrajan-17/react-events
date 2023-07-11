import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Addevent.css';

const Addevent = () => {

  const Navigation=useNavigate();
  const [events, setEvents] = useState({
    title: "",
    date:"",
    description:"",
    location:"",
    image:""
  })

  const HandleSubmit= (event)=>{
    event.preventDefault();
    axios.post("https://events-86ceb-default-rtdb.asia-southeast1.firebasedatabase.app/event.json",events)
    .then(() => Navigation('/'))
    .catch((error) => console.log(error))
  }

  return (
    <form onSubmit={HandleSubmit} className='form'>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={events.title} onChange={(e)=>{
          setEvents({...events,title:e.target.value})
        }}/>
      </div>
      <div>
      <label htmlFor="date">Date:</label>
        <input type="date" id="date" value={events.date} onChange={(e)=>{
          setEvents({...events,date:e.target.value})
        }}/>
      </div>
      <div>
        <label htmlFor='description'>Description:</label>
        <input type="text" id="description" value={events.description} onChange={(e)=>{
          setEvents({...events,description:e.target.value})
        }}/>
      </div>
      <div>
        <label htmlFor='Location'>Location:</label>
        <input type="text" id="Location" value={events.location} onChange={(e)=>{
          setEvents({...events,location:e.target.value})
        }}/>
      </div>
      <div>
        <label htmlFor='Image'>Image:</label>
        <input type="text" id="image" value={events.image} onChange={(e)=>{
          setEvents({...events,image:e.target.value})
        }}/>
      </div>
      <div>
        <button>Add Event</button>
      </div>
    </form>
  )
}

export default Addevent