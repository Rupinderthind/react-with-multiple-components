import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './form.css'

class FormPost extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
    	fname: '',
      lname: '',
      email: '',
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(event){
    console.log(event.target.name)
    this.setState({[event.target.name]: event.target.value});
  }

  onSubmit(e){
    e.preventDefault();
    // get our form data out of state
    const { fname, lname, email } = this.state;

    console.log(fname, lname, email)
    //axios.post('/', {fname: fname, lname: lname, email: email})
      //.then((result) => {
        //access the results here....
      //});
  }

 	render() {
    const { fname, lname, email } = this.state;
    return (
      <div className="myForm">
        <form onSubmit={this.onSubmit}>
          <input type="text" name="fname" value={fname} onChange={this.onChange} placeholder="First Name" />
          <input type="text" name="lname" value={lname} onChange={this.onChange} placeholder="Last Name"/>
          <input type="text" name="email" value={email} onChange={this.onChange} placeholder="Email"/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
 	}
}
export default FormPost;