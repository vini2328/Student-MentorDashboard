import React from 'react'
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import './index.css'
function App() {

  const navigate = useNavigate();
  return (
    <div className='mainsec'>
      Add Mentor   <Button label="Add Mentor" className='m-4' onClick={()=>navigate('/create-mentor')}/>

      Add Mentor   <Button label="Add Student"className='m-4' onClick={()=>navigate('/create-student')}/>
    </div>
  )
}

export default App