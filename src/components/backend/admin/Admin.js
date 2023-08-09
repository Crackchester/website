import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AnnouncementAdd from '../announcementChanges/AnnouncementAdd';
import Announcements from '../announcementsPreview/Announcements';
import WorkshopGroupAdd from '../workshopChanges/WorkshopGroupAdd';
import Workshops from '../workshopsPreview/WorkshopsTitle';
import './Admin.scss';

const Admin = () => {

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

  const [access, setAccess] = useState([]);

  // For toggling between workshops/announcements/admin
  const [activeView, setActiveView] = useState("");

  const [loading, setLoading] = useState(true)

  const [valid, setValid] = useState(false)

  // Get state from previous page
  const { state } = useLocation();

  // If valid state is not found then return to login
  if(!state){
    setLoading(false);
  }

  // setTimeout(() => {
  if(!valid)checkLogin(state.data[0])
  // }, Math.max(200, Math.floor(Math.random() * 850))); 

  async function checkLogin(username) {
    const requestOptions = {
      method: 'GET',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
      },
    };
    const url = 'https://ec2.goodey.co.uk:8443/Accounts/' + username;
    const response = await fetch(url, requestOptions);
    if(response.status !== 200){
      setLoading(false)
      return
    }
    const data = await response.json();
    if(state.data[1] !== data.passhash){
      setLoading(false)
      return
    }
    setAccess(data.permissions)
    setValid(true)
    setLoading(false)
  }

  // Save currently viewed section between reloads
  useEffect(()=>{
    var activeViewSave = sessionStorage.getItem("section");
    if (activeViewSave == null) {
      activeViewSave = access[0];
    }sessionStorage.setItem("section", activeViewSave);
    setActiveView(activeViewSave);
  }, [access]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return <React.Fragment>
    {!valid && (
      <Navigate to='/login' replace={true} />
    )}
    <section id="title-container">
      <div id="title">
        <h2>CRACKCHESTER ADMIN</h2>
      </div>
    </section>
    <section id='admin-nav'>
      <ol>
        {access.map((data, index) => {
          return (
            <li key={index}>
              <button onClick={()=>{setActiveView(data);sessionStorage.setItem("section", data);}} className='btn' id={(activeView===data) ? 'selected' : ''}>
                {data}
              </button>
            </li>
          )
        })}
      </ol>
    </section>
    <section id="events" style={{display: (activeView==="Announcements") ? 'inline-block' : 'none'}}>
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
    <section id="workshops" style={{display: (activeView==="Workshops") ? 'inline-block' : 'none'}}>
      <div className="container">
        <h1>Workshops Preview</h1>
        <p>See Which Workshops Are displayed On The Home Page</p>
        <Workshops/>
        <button style={{display: isWActive ? 'inline-block' : 'none'}} onClick={handleWClick} className="btn">Add Workshop Group</button>
        <div className="add-workshop-group" style={{display: isWActive ? 'none' : 'block'}}>
          <h2>Add Workshop Group</h2>
          <WorkshopGroupAdd/>
        </div>
      </div>
    </section>
  </React.Fragment>
}

export default Admin;