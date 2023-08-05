import Gallery from "./Gallery";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import WorkshopEdit from '../workshopChanges/WorkshopEdit';

const Workshop = (props) => {
  const { width } = useWindowDimensions();

  const [index, setIndex] = useState(-1);

  const [isEdited, setIsEdited] = useState(false);

  const handleEdit = () => {
    setIsEdited(current => !current);
  };

  // For confirming of delete button
  const [deleteOn, setDelete] = useState(false);

  const activateDelete = () => {
    setDelete(current => !current);
  };

  // // For async delete requests, but using put functionality
  useEffect(() => {

    async function sendPutRequest() {
      console.log(index)
      var group = props.group
      group.content.splice(index,1);
      console.log(group)
      const requestOptions = {
        method: 'PUT',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(group)
      };
      const url = 'http://localhost:8080/Workshops/' + group.id;
      await fetch(url, requestOptions);
      window.location.reload();
    }

    if(index !== -1)sendPutRequest(index)
  }, [index, props.group])

  // Code for workshop downloads
  const downloadWorkshop = () => {
    // using Java Script method to get PDF file
    fetch(`${process.env.PUBLIC_URL}/assets/workshops/${props.file}`).then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = `${process.env.PUBLIC_URL}/assets/workshops/${props.file}`;
            alink.click();
        })
    })
  }

  // Code for converting from iso to readable string
  const d = props.date

  var day = d.substring(8)
  if(day[0] === "0"){
    day = day.substring(1)
  }
  if(["1","21"].includes(day)){
    day = day + "st"
  }else if(["2","22"].includes(day)){
    day = day + "nd"
  }else if(["3","23"].includes(day)){
    day = day + "rd"
  }else{
    day = day + "th"
  }

  const monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  var month = d.substring(5,7)
  if(month[0] === "0"){
    month = month.substring(1)
  }
  month = monthNames[month-1]
  
  const year = d.substring(0,4)

  const date = day + " " + month + " " + year

  return (
    <div>
      <div className="workshop_item">
        <div className="workshop_item-content">
          <div className="workshop_item-text" style={{width: props.images.length > 0 && width >= 768 ? '75%' : '100%'}}>
            <div className="workshop_item-header">
              <time>{date}</time>
              <h2>{props.title}</h2>
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
            <button className="workshop_item-btn" onClick={downloadWorkshop}>
              <h2><FontAwesomeIcon icon={faFilePdf} /></h2>Download Workshop
            </button>
          </div>

          <div className="workshop_item-img">
            { props.images.length > 0 ? <Gallery images={props.images} /> : null }
          </div>
          <button onClick={()=>handleEdit()} className="btn">Edit</button>
          <button style={{display: deleteOn ? 'none' : 'inline'}} onClick={()=>activateDelete()} className="btn">Delete</button>
          <button style={{display: deleteOn ? 'inline' : 'none'}} onClick={()=>setIndex(props.index)} onMouseOut={()=>activateDelete()} className="btn">Confirm</button>
        </div>
      </div>
      <div style={{display: isEdited ? 'block' : 'none'}}>
        <WorkshopEdit data={props.data} group={props.group} index={props.index}/>
        <button onClick={()=>handleEdit()} className="btn">Cancel</button>
      </div>
    </div>
  )
}

export default Workshop;