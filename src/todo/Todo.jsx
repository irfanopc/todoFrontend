import axios from "axios";
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import AddItem from '../addItem/AddItem';
import './Todo.css'
function Todo() {
const navigator = useNavigate()
const [posts, setPosts] = useState([]);
const id = window.localStorage.getItem("id");
let email = window.localStorage.getItem('email');
let setemail = email.split('@')[0]

console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/userdetails/${id}`)
      .then((data) => {
        console.log(data);
        let user = data.data.userTasks;
        console.log(user);
        const task = user.map((obj) => {
          return {
            task: obj.tasks.map((prop) => prop),
          };
        });

        task.map((data) => {
            console.log(data);
          let user = data.task;
          return setPosts(user);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);


  const handleLogout =  () => {
    axios.get('http://localhost:5000/signout')
      .then((data)=> {
        localStorage.removeItem('email')
        localStorage.removeItem('id')
        alert(data.data.massage);
        navigator("/");
      })
      .catch((error)=>{
        console.log(error);
      })
  
    
  }
const [status,setStatus] = useState(false)
const [complete, setComplete] = useState(false)
const onStart=()=>{
    setStatus(true)
}
const onEnd=()=>{
    setStatus(false)
}
  return (
    <div>
        <section className='header'>
          <h1>{setemail}</h1>
        </section>
        <button className='addActivity' onClick={()=>{navigator('/additem',{state:{}})}} > Add new Activity </button>
        <section className='sidebar'>
<h1>history</h1>
{posts.map((data)=>{
    return(<>
    <li>{data.activity}</li>
    </>)
})}
<section className='table'>
            <table>
                <tbody>
                <tr>
                    <td>ACTIVITY</td>
                    <td>STATUS</td>
                    <td>TIME TAKEN(HRS: MIN)</td>
                    <td>Action</td>
                </tr>
                {posts.map((data)=>{
                        return(<>
                        <tr>
                        <td>{data.activity}</td>
                        <td>{status ? data.status = "pending" : data.status = "completed"}</td>
                        <td>{data.status == "pending" ? "0:0":""}</td>
                        <td><button className="start-btn" onClick={onStart}>start</button><button className="end-button" onClick={onEnd}>end</button></td>
                        </tr>
                        </>)
                })}
                    
                
                </tbody>
            </table>

        </section>
        <section className='logout-button'>
            <button className='logout' onClick={handleLogout} >logout</button>
        </section>
        </section>

       
    </div>
  )
}

export default Todo