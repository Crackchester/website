import Speaker from './Speaker';
import './Speakers.scss';

const Speakers = (props) => {
  var speakers = props.speakers
  return (
    <div className='speakers'>
      {
        speakers.map((data, index) => {
          return <Speaker 
            key={index}
            name={data.name}
            time={data.time}
            topic={data.topic}
            summary={data.summary}
          />
        })
      }
    </div>
  )
}

export default Speakers;