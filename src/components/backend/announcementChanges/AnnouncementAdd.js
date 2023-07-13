import React from 'react'
import './AnnouncementChanges.scss'

class AnnouncementAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      announcement: 
        {
          title: "",
          date: "",
          images: [],
          location: "",
          summary: "",
          details: ""
        },
      isLoading: true
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async sendPostRequest() {
    this.setState({isLoading: true});
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state.announcement)
    };
    const response = await fetch('http://81.158.1.128:8080/Announcements', requestOptions);
    const data = await response.json();
    this.setState({ postId: data.id });
    window.location.reload();
  }

  handleChange(event) {
    var targetName = event.target.name.toString()
    var tAnnouncement = this.state.announcement
    tAnnouncement[targetName] = event.target.value
    this.setState({
      announcement: tAnnouncement
    });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ notify: false, loading: true });
    setTimeout(() => {
      this.sendPostRequest()
      this.setState({ loading: false });
    }, Math.max(200, Math.floor(Math.random() * 850))); 
  }

  render() {
    return <React.Fragment>
      <div className="flex-middle container">
        <form onSubmit={this.handleSubmit}>
          <label>Title
            <input type="text" name="title" required minLength={3} maxLength={64} onChange={this.handleChange} />
          </label>
          <label>Date
            <input type="text" name="date" required minLength={3} maxLength={128} onChange={this.handleChange} />
          </label>
          <label>Location
            <input type="text" name="location" required minLength={3} maxLength={128} onChange={this.handleChange} />
          </label>
          <label>Summary
            <input type="text" name="summary" required minLength={5} maxLength={1024} onChange={this.handleChange} />
          </label>
          <label>Details
            <input type="text" name="details" maxLength={1024} onChange={this.handleChange} />
          </label>
          <label>Images
            <input type="text" name="images" maxLength={1024} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit Announcement" className="btn" disabled={this.state.loading} />
        </form>
      </div>
    </React.Fragment>
  }
}

export default AnnouncementAdd;