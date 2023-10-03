import Workshop from './Workshop';
import WorkshopAdd from './WorkshopAdd';
import '../../workshops/Workshops.scss';
import { useEffect, useState } from "react";

const WorkshopsList = (props) => {

  // For making add workshop section appear/disappear
  const [isWActive, setIsWActive] = useState(true);

  const handleWClick = () => {
    setIsWActive(current => !current);
  };

  const [id, setId] = useState(0);

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
      const url = 'https://ec2.goodey.co.uk:8443/Workshops/' + id;
      await fetch(url, requestOptions);
      window.location.reload();
    }

    if(id !== 0)sendDeleteRequest(id)
  }, [id])

  return (
    <div className="workshops">
      {
        props.content.map((data, index) => {
          return <Workshop
            key={index}
            title={data.title}
            date={data.date}
            details={data.details}
            images={data.images}
            summary={data.summary}
            file={data.file}
            data={data}
            group={props.group}
            index={index}
          />
        })
      }
      <div className="add-workshop" style={{display: isWActive ? 'none' : 'block'}}>
        <h2>Add Workshop</h2>
        <WorkshopAdd group={props.group}/>
      </div>
      <button style={{display: isWActive ? 'inline-block' : 'none'}} onClick={handleWClick} className="btn">Add Workshop</button>
      <button style={{display: isWActive ? 'none' : 'inline-block'}} onClick={handleWClick} className="btn">Cancel</button>
      <button style={{display: deleteOn ? 'none' : 'inline-block'}} onClick={()=>activateDelete()} className="btn">Delete Group</button>
      <button style={{display: deleteOn ? 'inline-block' : 'none'}} onClick={()=>setId(props.group.id)} onMouseOut={()=>activateDelete()} className="btn">Confirm</button>
    </div>
  )
}

export default WorkshopsList;