import Announcement from './Announcement';
import announcements from './workshops.json'
import './Workshops.scss';

const Announcements = () => {
  return (
    <div className='announcements'>
      {
        announcements.map((data, index) => {
          return <Announcement 
            key={index}
            title={data.title}
            date={data.date}
            details={data.details}
            images={data.images}
            summary={data.summary}
          />
        })
      }
    </div>
  )
}

export default Announcements;