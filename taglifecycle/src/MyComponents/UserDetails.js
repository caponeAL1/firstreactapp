import React, { Component } from "react";

import User from './User';

 

class UserDetails extends Component {

    userArray = [];

    cnt = 0;

 

    constructor() {

        super();

        this.state = {

            firstName: 'Unknown',

            lastName: 'Unknown',

            Address: 'Unknown',

            updateCount: 0

        };

        this.updateFirstName = this.updateFirstName.bind(this);

        this.updateLastName = this.updateLastName.bind(this);

        this.updateAddress = this.updateAddress.bind(this);

        this.confirmReset = this.confirmReset.bind(this);

        this.addUser = this.addUser.bind(this);

        this.deleteUser = this.deleteUser.bind(this);

    }

 

    componentDidMount() {

        this.setState({ firstName: 'Aravind', lastName: 'LN', Address: 'Chennai' });

        console.log("State initialized...");

    }

 

    componentDidUpdate() {

        var today = new Date();

        console.log("Got updated on " + today.getHours() + ":" + today.getMinutes() + " for " + this.state.updateCount + " times");

    }

 

    componentWillUnmount() {

        var today = new Date();

        console.log("Got unmounted on " + today.getHours() + ":" + today.getMinutes() + " for " + this.state.updateCount + " times");

    }

 

    updateFirstName(e) {

        this.setState({ firstName: e.target.value });

        this.setState({ updateCount: this.state.updateCount + 1 });

        console.log(this.state.updateCount);

    }

 

    updateLastName(e) {

        this.setState({ lastName: e.target.value });

        this.setState({ updateCount: this.state.updateCount + 1 });

        console.log(this.state.updateCount);

    }

 

    updateAddress(e) {

        this.setState({ Address: e.target.value });

        this.setState({ updateCount: this.state.updateCount + 1 });

        console.log(this.state.updateCount);

    }

 

    confirmReset() {

        var v = window.confirm("Do you wish to reset the form? Yes/No ?");

        return v;

    }

 

    addUser(event) {

        event.preventDefault();

        var user = new User(this.state.firstName, this.state.lastName, this.state.Address);

        this.userArray.push(user);

        this.setState({ firstName: '', lastName: '', Address: '' });

        console.log(this.userArray);

    }

 

    deleteUser(index) {

        this.userArray.splice(index, 1);

        this.forceUpdate();

    }

 

    render() {

        return (

            <div className="userdetails" onReset={this.confirmReset} onSubmit={this.addUser}>

                <form>

                    <label>FirstName</label>

                    <input type="text" value={this.state.firstName} onChange={this.updateFirstName} /><br /><br />

                    <label>LastName</label>

                    <input type="text" value={this.state.lastName} onChange={this.updateLastName} /><br /><br />

                    <label>Address</label>

                    <input type="text" value={this.state.Address} onChange={this.updateAddress} /><br /><br />

                    <input type="submit" value="Add" />&nbsp;&nbsp;

                    <input type="reset" value="Reset" />

                </form>

                {/* {} - curly braces after the html tag is the observer, it is a thread    */}

                {/* <ul>

                    {this.userArray.map((usr, index) => (

                        <li key={index}>

                            First Name: {usr.firstName}&nbsp;

                            Last Name: {usr.lastName}&nbsp;

                            Address: {usr.Address}

                            <button onClick={() => this.deleteUser(index)}>Delete</button>

                        </li>

                    ))}

                </ul> */}

                   <br/>

                <table>

                <thead>

          <tr>

            <th>FirstName</th>

            <th>LastName</th>

            <th>Address</th>

          </tr>

       

        </thead>

                <tbody>

                    {this.userArray.map((usr, index) => (

                         <tr key={index}>

                            <td>{usr.firstName}&nbsp;</td>

                            <td>{usr.lastName}&nbsp;</td>

                            <td>{usr.Address}</td>

                         <td><button onClick={() => this.deleteUser(index)}>Delete</button></td>

                        </tr>

                    ))}

                     </tbody>

                </table>

            </div>

        );

    }

}

 

export default UserDetails;