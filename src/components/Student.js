import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import '../index.css'


const Student = () => {
  const [student, setstudent] = useState([]);
  const [created,setcreate]=useState(false)
  const [assigned,setAssigned]=useState(false)
  const [assignedmentor,setAssignedmentor]=useState('')
  const toast = useRef(null);

  const showSuccess = () => {
    toast.current.show({severity:'success', summary: 'Success', detail:`Student ${student} added `, life: 3000});
  }

  const showError = () => {
    toast.current.show({severity:'error', summary: 'Error', detail:'Message Content', life: 3000});
  }
  const assignMentor=async()=>{
    try {
        let data = await axios.post(`https://assign-mentor-ag2f.onrender.com/mentors/${localStorage.getItem('mentor')}/students/${localStorage.getItem('student')}`)
        console.log(data.data.mentor.name)
        setAssignedmentor(data.data.mentor.name)
        showSuccess()
    } catch (error) {
        console.log(error)
        showError()
    }
  }

  const addMentor=async()=>{
    try {
      if(student != ""){
        let result= await axios.post('https://assign-mentor-ag2f.onrender.com/students',{"name":student})
        console.log(result)
        setcreate(true)
        let stuid =result.data._id
        localStorage.setItem('student', (stuid));
        showSuccess()
        setAssigned(true)
      }else{
        showError()
      }

    } catch (error) {
      console.log(error)
      showError()
    }

  }

  
 
  return (
    <div className='mainsec'>
      <Toast ref={toast} />
      Add Student
      <InputText value={student} onChange={(e) => setstudent(e.target.value)} />
      <Button label="Submit" onClick={addMentor}/>
      <div className='m-5'>
        
      {created ? 
        <div>
        Assign <b>{student}</b> to a mentor ? 
        <Button label="assign mentor" onClick={assignMentor}/>


        </div>
         : <></>
        }

      </div>

        <div className='m-5'>
        {
            assigned!="" ?
            <div>
                {student} assigned to Mentor {assignedmentor}
            </div> : <></>
        }
        </div>




    </div>
  );
};

export default Student;
