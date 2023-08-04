import React from 'react';
import Announcement from './Announcement';
// import announcements from './announcements.json'
import './Announcements.scss';

class Announcements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      announcements: [],
      isLoading: true
    }
  }

  async componentDidMount() {
    this.setState({isLoading: true});

    const response = await fetch('https://ec2.goodey.co.uk:8443/Announcements', {
      method: 'GET',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
      },
    });
    const data = await response.json();
    this.setState({announcements: data, isLoading: false});
  }

  render() {
    const {announcements, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

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
              location={data.location}
            />
          })
        }
      </div>
    )
  }
}

export default Announcements;