import WorkshopsList from './workshopsList';
import workshops from './workshops.json'
import './Workshops.scss';

const workshopsTitle = () => {
  return (
    <div className='workshops'>
      {
        workshops.map((data, index) => {
          return <>
            <h1 className="workshop_title">{data.name}</h1>
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