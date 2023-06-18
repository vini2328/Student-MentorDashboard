import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import { useNavigate } from "react-router-dom";
import '../index.css'


const MentorPage = () => {
  const [mentors, setMentors] = useState([]);
  const [created,setCreated]=useState(false)
  const toast = useRef(null);
  const navigate = useNavigate();

  

  const showSuccess = () => {
    toast.current.show({severity:'success', summary: 'Success', detail:`Mentor ${mentors} added `, life: 3000});
  }

  const showError = () => {
    toast.current.show({severity:'error', summary: 'Error', detail:'Message Content', life: 3000});
  }

  const addMentor=async()=>{
    try {
      if(mentors != ""){
        let result= await axios.post('https://assign-mentor-ag2f.onrender.com/mentors',{"name":mentors})
        let mentorid =result.data._id
        localStorage.setItem('mentor', (mentorid));
        console.log(result)
        showSuccess()
        setCreated(true)
      }else{
        showError()
      }

    } catch (error) {
      console.log(error)
      showError()
    }

  }

  const showallstu=async()=>{
    let allstu = await axios.get(`https://assign-mentor-ag2f.onrender.com/mentors/${localStorage.getItem('mentor')}/students`)
    console.log(allstu)
  }

  
 
  return (
    <div className='mainsec'>
      <Toast ref={toast} />
      Add Mentor
      <InputText value={mentors} onChange={(e) => setMentors(e.target.value)} />
      <Button label="Submit" onClick={addMentor}/>

      {
        created ? 
        <>
              Assign {mentors} some students ?
              <Button label="Show students" onClick={()=>navigate('/create-student')}/>



        </> : <>
        </>
      }


    </div>
  );
};

export default MentorPage;
