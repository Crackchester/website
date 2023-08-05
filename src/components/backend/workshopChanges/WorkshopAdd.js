import React from 'react'
import './WorkshopChanges.scss'

class WorkshopAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workshop: 
        {
          title: "",
          date: "",
          images: [],
          file: "",
          summary: "",
          details: ""
        },
      group: props.group,
      isLoading: true
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async sendPutRequest() {
    this.setState({isLoading: true});
    console.log(this.state.group)
    var group = this.state.group;
    group.content.push(this.state.workshop);
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(group)
    };
    const url = 'https://ec2.goodey.co.uk:8443/Workshops/' + this.props.group.id;
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    this.setState({ postId: data.id });
    window.location.reload();
  }

  handleChange(event) {
    var targetName = event.target.name.toString()
    var tWorkshop = this.state.workshop
    tWorkshop[targetName] = event.target.value
    this.setState({
      workshop: tWorkshop
    });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ notify: false, loading: true });
    setTimeout(() => {
      this.sendPutRequest()
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
          <label>Summary
            <input type="text" name="summary" required minLength={5} maxLength={1024} onChange={this.handleChange} />
          </label>
          <label>Details
            <input type="text" name="details" maxLength={1024} onChange={this.handleChange} />
          </label>
          <label>Images
            <input type="text" name="images" maxLength={1024} onChange={this.handleChange} />
          </label>
          <label>File
            <input type="text" name="file" maxLength={128} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit Announcement" className="btn" disabled={this.state.loading} />
        </form>
      </div>
    </React.Fragment>
  }
}

export default WorkshopAdd;