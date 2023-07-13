import useWindowDimensions from "../../hooks/useWindowDimensions";

const Speaker = (props) => {
  const { width } = useWindowDimensions();

  return (
    <div className="speaker_item">
      <div className="speaker_item-content">
        <div className="speaker_item-text" style={{width: width >= 768 ? '75%' : '100%'}}>
          <div className="speaker_item-header">
            <time>{props.time}</time>
            <h2>{props.name}</h2>
          </div>
    
          <sub>{props.topic}</sub>
          {
            typeof(props.summary) === "object" ? 
              props.details.map((item, index) => {
                return typeof(item) === "object" ? 
                  <ul key={index}>
                    {
                      item.map((li, index) => {
                        return <li key={index}>{li}</li>
                      })
                    }
                  </ul> : <p key={index}>{item}</p>
              }) : <p>{props.summary}</p>
          }
        </div>

      </div>
    </div>
  )
}

export default Speaker;