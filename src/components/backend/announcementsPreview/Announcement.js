import Gallery from "./Gallery";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react";
import AnnouncementEdit from '../announcementChanges/AnnouncementEdit';

const Announcement = (props) => {
  const { width } = useWindowDimensions();

  const [id, setId] = useState(0);

  // For making deleted announcements disappear without refresh
  const [isActive, setIsActive] = useState(true);

  const handleDelete = () => {
    setIsActive(false);
  };

  // For making deleted announcements disappear without refresh
  const [isEdited, setIsEdited] = useState(false);

  const handleEdit = () => {
    setIsEdited(current => !current);
  };

  // For confirming of delete button
  const [deleteOn, setDelete] = useState(false);

  const activateDelete = () => {
    setDelete(current => !current);
  };

  // For async delete requests
  useEffect(() => {

    async function sendDeleteRequest() {
      console.log(id)
      const requestOptions = {
        method: 'DELETE',
        mode: 'cors'
      };
      const url = 'http://81.158.1.128:8080/Announcements/' + id;
      console.log(url)
      await fetch(url, requestOptions);
      handleDelete();
    }

    if(id !== 0)sendDeleteRequest(id)
  }, [id])

  return (
    <div>
      <div className="announcement_item" style={{display: (isActive & !isEdited) ? 'block' : 'none'}}>
        <div className="announcement_item-content">
          <div className="announcement_item-text" style={{width: props.images.length > 0 && width >= 768 ? '75%' : '100%'}}>
            <div className="announcement_item-header">
              <time>{props.date}</time>
              <h2>{props.title}</h2>
              {
                props.location != null ?
                <div>
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span>&nbsp;{props.location}</span>
                </div> : null   
              }
            </div>
      
            <sub>{props.summary}</sub>
            {
              typeof(props.details) === "object" ? 
                props.details.map((item, index) => {
                  return typeof(item) === "object" ? 
                    <ul key={index}>
                      {
                        item.map((li, index) => {
                          return <li key={index}>{li}</li>
                        })
                      }
                    </ul> : <p key={index}>{item}</p>
                }) : <p>{props.details}</p>
            }
          </div>

          <div className="announcement_item-img">
            { props.images.length > 0 ? <Gallery images={props.images} /> : null }
          </div>
          <button onClick={()=>handleEdit()} className="btn">Edit</button>
          <button style={{display: deleteOn ? 'none' : 'inline'}} onClick={()=>activateDelete()} className="btn">Delete</button>
          <button style={{display: deleteOn ? 'inline' : 'none'}} onClick={()=>setId(props.id)} onMouseOut={()=>activateDelete()} className="btn">Confirm</button>
        </div>
      </div>
      <div style={{display: isEdited ? 'block' : 'none'}}>
        <AnnouncementEdit data={props.data}/>
        <button onClick={()=>handleEdit()} className="btn">Cancel</button>
      </div>
    </div>
  )
}

export default Announcement;