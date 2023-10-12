import React from 'react';
import '../../announcements/Announcements.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

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
    this.addImage = this.addImage.bind(this);
  }

  async sendPostRequest() {
    this.setState({isLoading: true});
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state.announcement)
    };
    const response = await fetch('https://ec2.goodey.co.uk:8443/Announcements', requestOptions);
    const data = await response.json();
    this.setState({ postId: data.id });
    window.location.reload();
  }

  handleChange(event) {
    var targetName = event.target.name.toString()
    if(targetName === "newImage"){
      this.setState({
        newImage: event.target.value
      });
    }else{
      var tAnnouncement = this.state.announcement
      tAnnouncement[targetName] = event.target.value
      this.setState({
        announcement: tAnnouncement
      });
      console.log(tAnnouncement);
    }
  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ notify: false, loading: true });
    setTimeout(() => {
      this.sendPostRequest()
      this.setState({ loading: false });
    }, Math.max(200, Math.floor(Math.random() * 850))); 
  }

  addImage(){
    if(this.state.newImage !== ""){
      let tAnnouncement = this.state.announcement;
      tAnnouncement.images.push(this.state.newImage);
      this.setState({
        announcement: tAnnouncement
      });
    }
  }

  removeImage(img){
    let tAnnouncement = this.state.announcement;
    let index = tAnnouncement.images.indexOf(img);
    tAnnouncement.images.splice(index, 1);
    this.setState({
      announcement: tAnnouncement
    });
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
            <textarea name="summary" required minLength={5} maxLength={1024} onChange={this.handleChange} />
          </label>
          <label>Details
            <textarea name="details" maxLength={1024} onChange={this.handleChange} />
          </label>
          <label class="images-label">Images
            {
              this.state.announcement.images.map((img, index) => {
                return <div key={index}>
                  <p>{img}</p>
                  <button className="announcement_item-del" type="button" onClick={()=>{this.removeImage(img)}}>
                    <h2><FontAwesomeIcon icon={faTrash} /></h2>
                  </button>
                </div>
              })
            }
            <input type="text" name="newImage" maxLength={1024} onChange={this.handleChange}/>
            <button className="announcement_item-add" type="button" onClick={this.addImage}>
              <h2><FontAwesomeIcon icon={faPlus} /></h2>
            </button>
          </label>
          <input type="submit" value="Submit Announcement" className="btn" disabled={this.state.loading} />
        </form>
      </div>
    </React.Fragment>
  }
}

export default AnnouncementAdd;