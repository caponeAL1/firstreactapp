import { Component } from "react";

class UserDetails extends Component{
     constructor()
     {
        super();
        this.state={firstName:'Aravind', lastName:'LN'};
        this.updateFirstName=this.updateFirstName.bind(this);
        this.updateLastName=this.updateLastName.bind(this);  
     }

     updateFirstName(event)
     { 
        console.log(event.target.value);
        this.setState({firstName: event.target.value});
     }
     updateLastName(event)
     {
        console.log(event.target.value)
        this.setState({lastName: event.target.value});
     }
    render()
    {
        return (
         <div className="formclass">
            <form>

                <label>First name  </label><input type="text" name="firstName" value={this.state.firstName} onChange={this.updateFirstName}/><br/>

                <label>Last name</label><input type="text" name="lastName" value={this.state.lastName} onChange={this.updateLastName}/><br/>

                <input type="submit" value="Save"/>

                <b> Your full name</b>&nbsp;&nbsp;<label>{this.state.firstName}&nbsp;&nbsp;
                {this.state.lastName}</label>
            </form>
         </div>
        );
   }
}
export default UserDetails;