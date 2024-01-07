import Gallery from "../gallery/Gallery";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import AWS from 'aws-sdk';

const Workshop = ({data}) => {
  const { width } = useWindowDimensions();

  const s3 = new AWS.S3({
    accessKeyId: process.env.REACT_APP_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_SECRET_KEY,
    region: 'eu-north-1'
  });

  const s3params = {
    Bucket: 'crackchester',
    Key: `workshops/${data.file}`
  };

  // Code for workshop downloads
  const downloadWorkshop = () => {

    s3.getObject(s3params, (err, data) => {
      if (err) {
        console.log(err);
      }

      let alink = document.createElement('a');
      const blob = new Blob([data.Body], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      alink.href = url;
      alink.target= '_blank';
      alink.download = data.file;
      alink.click();
    });
  }

  // Code for converting from iso to readable string
  const d = data.date

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
    <div className="workshop_item">
      <div className="workshop_item-content">
        <div className="workshop_item-text" style={{width: data.images.length > 0 && width >= 768 ? '75%' : '100%'}}>
          <div className="workshop_item-header">
            <time>{date}</time>
            <h2>{data.title}</h2>
          </div>
    
          <sub>{data.summary}</sub>
          {
            typeof(data.details) === "object" ? 
              data.details.map((item, index) => {
                return typeof(item) === "object" ? 
                  <ul key={index}>
                    {
                      item.map((li, index) => {
                        return <li key={index}>{li}</li>
                      })
                    }
                  </ul> : <p key={index}>{item}</p>
              }) : <p>{data.details}</p>
          }
          <button className="workshop_item-btn" onClick={downloadWorkshop}>
            <h2><FontAwesomeIcon icon={faFilePdf} /></h2>Download Workshop
          </button>
        </div>

        <div className="workshop_item-img">
          { data.images.length > 0 ? <Gallery images={data.images} /> : null }
        </div>
      </div>
    </div>
  )
}

export default Workshop;