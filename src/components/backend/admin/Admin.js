import React from 'react'
import {useState} from 'react';
import './Admin.scss'
import { Navigate, useLocation } from 'react-router-dom';
import Announcements from '../announcementsPreview/Announcements';
import AnnouncementAdd from '../announcementChanges/AnnouncementAdd';
import Workshops from '../workshopsPreview/WorkshopsTitle';
import WorkshopGroupAdd from '../workshopChanges/WorkshopGroupAdd';

const Admin = (props) => {

  // For making add announcement section appear/disappear
  const [isAActive, setIsAActive] = useState(true);

  const handleAClick = () => {
    setIsAActive(current => !current);
  };

  // For making add workshop section appear/disappear
  const [isWActive, setIsWActive] = useState(true);

  const handleWClick = () => {
    setIsWActive(current => !current);
  };

  // Code for login

  // Random hash
  var key='788a576161gd58i90kgn7rtha314fs78hn39404c3d729a8b361eddb60d1b7813'
  
  // Get state from previous page
  const { state } = useLocation();

  // If valid state is found
  if(state){

    const { data } = state;

    // If data is valid then reassign key to data
    if(data){ key = data; }

  }

  // If hash has been reassigned correctly then will be false and won't be redirected back to login
  if(!key || key !== "1d6442ddcfd9db1ff81df77cbefcd5afcc8c7ca952ab3101ede17a84b866d3f3"){
    return <Navigate to='/login' replace={true} />
  }

  return <React.Fragment>
    <section id="title-container">
      <div id="title">
        <h2>CRACKCHESTER ADMIN</h2>
        <p><span>For Editing And Viewing</span><br/>Announcements and Workshops</p>
      </div>
    </section>
    <section id="events">
      <div className="container">
        <h1>Events Preview</h1>
        <p>See Which Events Are displayed On The Home Page</p>
        <Announcements/>
        <button style={{display: isAActive ? 'block' : 'none'}} onClick={handleAClick} className="btn">Add Announcement</button>
        <div className="add-event" style={{display: isAActive ? 'none' : 'block'}}>
          <h2>Add Announcement</h2>
          <AnnouncementAdd/>
        </div>
      </div>
    </section>
    <section id="workshops">
      <div className="container">
        <h1>Workshops Preview</h1>
        <p>See Which Workshops Are displayed On The Home Page</p>
        <Workshops/>
        <button style={{display: isWActive ? 'block' : 'none'}} onClick={handleWClick} className="btn">Add Workshop Group</button>
        <div className="add-event" style={{display: isWActive ? 'none' : 'block'}}>
          <h2>Add Workshop Group</h2>
          <WorkshopGroupAdd/>
        </div>
      </div>
    </section>
    
    
  </React.Fragment>
}

export default Admin;