import React, { useEffect, useState } from 'react'
import "../styles/Dashboard.css";
import { account } from "../appwrite/appwrite-config";
import { useNavigate } from 'react-router-dom';
import TaskAccordion from './TaskAccordion';
import axios from 'axios';

function Dashboard() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState("");
  
  // For populating the todos
  const getTodos = async () => {
    try {
      const todos = await axios.get(`/getTodos/${userDetails.email}`);
      console.log(todos);
    } catch (error) {
      console.log(error);
    }
  }

  const [todos, setTodos] = useState();
  
  useEffect(() => {
    getTodos();
  }, [todos])

  // For getting the user's name and email from appwrite
  useEffect(() => {
    const getData = account.get();
    getData.then(response=>{setUserDetails(response)}, error => {console.log(error)});
  }, []);
  

  // For logging out the user
  const logoutUser = async () => {
    try {
      await account.deleteSession("current");
      navigate('/');      
    } catch (error) {
      console.log(error);
    }     
  }

  return (
    <div className="dashboard-container">

        {/* This div below contains side-nav */}
        <div className="side-nav-div">

            {/* This div below contains logo and text */}
            <div className="side-nav-logo">
                <img src="/images/nav-logo.png" alt="nav-logo.png" className='side-nav-pic'/>
                <h2 className="nav-logo-text">GoalKeeper</h2>
            </div>

            {/* This div below contains side-nav links */}
            <div className="side-nav-links">
                <a href="#" className="side-nav-link">Profile</a>
                <a href="#" className="side-nav-link">Todos</a>
                <a href="#" className="side-nav-link">Create Todo</a>
                <a href="#" className="side-nav-link" onClick={logoutUser}>Log Out</a>
            </div>
        </div>
        
        {/* This div below contains tasks */}
        <div className="tasks-div">
              <h1 className="user-name">Hello {userDetails.name}</h1>

              {/* This div below contains all the tasks which we'll get from the DB */}
              {todos.map((currentElement) => {
                <TaskAccordion key={currentElement} />
              })}
        </div>

    </div>
  )
}

export default Dashboard