import React from 'react'
import '../../workshops/Workshops.scss'

class WorkshopAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      group: 
        {
          name: "",
          content: []
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
      body: JSON.stringify(this.state.group)
    };
    const response = await fetch('https://ec2.goodey.co.uk:8443/Workshops', requestOptions);
    const data = await response.json();
    this.setState({ postId: data.id });
    window.location.reload();
  }

  handleChange(event) {
    var targetName = event.target.name.toString()
    var tGroup = this.state.group
    tGroup[targetName] = event.target.value
    this.setState({
      group: tGroup
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
          <label>Name
            <input type="text" name="name" required minLength={3} maxLength={64} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Add Workshop Group" className="btn" disabled={this.state.loading} />
        </form>
      </div>
    </React.Fragment>
  }
}

export default WorkshopAdd;