import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
function AddItem() {
    const  [activity,setActivity]= useState({})
    const navigator = useNavigate()
    console.log(activity);
    const localmail =  (window.localStorage.getItem("email"));
    const addItem = async() =>{
        const formData = new FormData();
        formData.append("activity", activity.activity);
        formData.append("email",localmail)

         console.log(formData.get("activity"));
        try {
          const response = await axios({
            method: "post",
            url: "https://listtodobackend.onrender.com/addItem",
            data: formData,
            headers: { "Content-Type" : "application/json"},
          });
          console.log(response);
        } catch (error) {
          console.log(error);
        }
        alert("task added successfully")
    navigator("/todo",{state:{activity}});
      
    
    }
  return (
    
    <div>
        <input type="text" onChange={(e)=>{setActivity({...activity,activity:e.target.value})}} />
        <button onClick={addItem} >add</button>
    </div>
  )
}

export default AddItem