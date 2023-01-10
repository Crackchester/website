import Gallery from "./Gallery";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'

const Workshop = (props) => {
  const { width } = useWindowDimensions();

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

  return (
    <div className="workshop_item">
      <div className="workshop_item-content">
        <div className="workshop_item-text" style={{width: props.images.length > 0 && width >= 768 ? '75%' : '100%'}}>
          <div className="workshop_item-header">
            <time>{props.date}</time>
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
      </div>
    </div>
  )
}

export default Workshop;