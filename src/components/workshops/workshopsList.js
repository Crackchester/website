import Workshop from './Workshop';
import './Workshops.scss';

const workshopsList = (props) => {
  return (
    <div className="workshops">
      {
        props.content.map((data, index) => {
          return <>
            <Workshop
              key={index}
              title={data.title}
              date={data.date}
              details={data.details}
              images={data.images}
              summary={data.summary}
              file={data.file}
            />
          </>
        })
      }
    </div>
  )
}

export default workshopsList;