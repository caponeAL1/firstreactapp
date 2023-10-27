import { Component } from "react";

 

class Project extends Component

{

constructor()

{

  super();

  this.state = {projectname:'Unknown', managername : 'Unkown' , doj : 'Unkown'};

  this.updateProjectName = this.updateProjectName.bind(this);

  this.updateManagerName = this.updateManagerName.bind(this);

  this.updateDoj = this.updateDoj.bind(this);

}

updateProjectName(event)

{

  console.log(event.target.value);

  if (/^[A-Za-z\s]+$/.test(event.target.value)) {

  this.setState({projectname: event.target.value});

} else {

  alert("Please enter only alphabets in Project Name.");

}

}

updateManagerName(event)

{

  console.log(event.target.value);

  if (/^[A-Za-z\s]+$/.test(event.target.value)) {

  this.setState({managername: event.target.value});

 

} else {

  alert("Please enter only alphabets in Manager Name.");

}

}

updateDoj(event)

{

  console.log(event.target.value);

  this.setState({doj: event.target.value});

}

render(){

  return(

  <div className="userform">

  <center> <h1>Project Details</h1></center>  

          <form>

          <label>Project Name</label>

          <input type ="text" name="projectName" onChange={this.updateProjectName} /> <br />

          <label>Manager Name</label>

          <input type ="text" name="managerName" onChange={this.updateManagerName}/> <br />

          <label>Date of Joining</label>

          <input type ="date" name="doj" onChange={this.updateDoj}/> <br />

          <button type = "submit">Save</button>

          <button type = "reset" value="Reset">Reset

          </button> <br />

          <b>Your full details: </b>&nbsp;&nbsp;

          <label>{this.state.projectname}</label>&nbsp;

          <label>{this.state.managername}</label><br/>

          <label>{this.state.doj}</label>

          </form>

  </div>

  )

};

}

export default Project;