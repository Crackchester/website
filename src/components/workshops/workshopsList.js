import Workshop from './Workshop';
import './Workshops.scss';

const workshopsList = (props) => {
  return (
    <div className="workshops">
      {
        props.content.map((data, index) => {
          return (
            <Workshop
              key={index}
              data={data}
            />
          );
        })
      }
    </div>
  )
}

export default workshopsList;