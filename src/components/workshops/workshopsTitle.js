import WorkshopsList from './workshopsList';
import workshops from './workshops.json'
import './Workshops.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip } from '@fortawesome/free-solid-svg-icons'

const workshopsTitle = () => {
  return (
    <div className='workshops'>
      {
        workshops.map((data, index) => {
          return <>
            <div className="workshop_title">
              <h1><FontAwesomeIcon icon={faPaperclip} /> {data.name}</h1>
            </div>
            <WorkshopsList 
              key={index}
              content={data.content}
            />
          </>
        })
      }
    </div>
  )
}

export default workshopsTitle;