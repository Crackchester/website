import React from 'react'
import '../../workshops/Workshops.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

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
    this.addImage = this.addImage.bind(this);
  }

  async sendPutRequest() {
    this.setState({isLoading: true});
    console.log(this.state.group)
    var group = this.state.group;
    group.content.push(this.state.workshop);
    group.content.sort((a, b) => b.date.localeCompare(a.date));
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
    if(targetName === "newImage"){
      this.setState({
        newImage: event.target.value
      });
    }else{
      var tWorkshop = this.state.workshop
      tWorkshop[targetName] = event.target.value
      this.setState({
        workshop: tWorkshop
      });
    }
  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ notify: false, loading: true });
    setTimeout(() => {
      this.sendPutRequest()
      this.setState({ loading: false });
    }, Math.max(200, Math.floor(Math.random() * 850))); 
  }

  addImage(){
    if(this.state.newImage !== ""){
      let tWorkshop = this.state.workshop;
      tWorkshop.images.push(this.state.newImage);
      this.setState({
        workshop: tWorkshop
      });
    }
  }

  removeImage(img){
    let tWorkshop = this.state.workshop;
    let index = tWorkshop.images.indexOf(img);
    tWorkshop.images.splice(index, 1);
    this.setState({
      workshop: tWorkshop
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
          <label>Summary
            <textarea name="summary" required minLength={5} maxLength={1024} onChange={this.handleChange} />
          </label>
          <label>Details
            <textarea name="details" maxLength={1024} onChange={this.handleChange} />
          </label>
          <label>File
            <input type="text" name="file" maxLength={128} onChange={this.handleChange} />
          </label>
          <label class="images-label">Images
            {
              this.state.workshop.images.map((img, index) => {
                return <div key={index}>
                  <p>{img}</p>
                  <button className="workshop_item-del" type="button" onClick={()=>{this.removeImage(img)}}>
                    <h2><FontAwesomeIcon icon={faTrash} /></h2>
                  </button>
                </div>
              })
            }
            <input type="text" name="newImage" maxLength={1024} onChange={this.handleChange}/>
            <button className="workshop_item-del" type="button" onClick={this.addImage}>
              <h2><FontAwesomeIcon icon={faPlus} /></h2>
            </button>
          </label>
          <input type="submit" value="Submit Details" className="btn" disabled={this.state.loading} />
        </form>
      </div>
    </React.Fragment>
  }
}

export default WorkshopAdd;