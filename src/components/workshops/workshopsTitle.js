import React from 'react';
import WorkshopsList from './workshopsList';
import './Workshops.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip } from '@fortawesome/free-solid-svg-icons'
import getWorkshops from './getWorkshops';

class workshopsTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workshops: [],
      isLoading: true
    }
  }

  async componentDidMount() {
    this.setState({isLoading: true});
    // separated this out into getWorkshops.js because I need them on the homepage
    const workshops = await getWorkshops();
    this.setState({workshops, isLoading: false});
  }

  render() {
    const {workshops, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

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
}

export default workshopsTitle;