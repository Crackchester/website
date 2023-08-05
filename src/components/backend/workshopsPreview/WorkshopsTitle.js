import React from 'react';
import WorkshopsList from './WorkshopsList';
import './Workshops.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip } from '@fortawesome/free-solid-svg-icons'

class WorkshopsTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workshops: [],
      isLoading: true
    }
  }

  async componentDidMount() {
    this.setState({isLoading: true});

    const response = await fetch('https://ec2.goodey.co.uk:8443/Workshops', {
      method: 'GET',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
      },
    });
    const data = await response.json();
    this.setState({workshops: data, isLoading: false});
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
                group={data}
              />
            </>
          })
        }
      </div>
      
    )
  }
}

export default WorkshopsTitle;