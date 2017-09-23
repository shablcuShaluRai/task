import React, { Component } from 'react';
import * as DataApi from './utils/Api'
import Background from './Background'
import Skills from "./Skills"
import moment from 'moment'



class App extends Component {

  state ={
     data : {}
  }

  componentWillMount() {
  DataApi
  .getAllData()
  .then(data => {

    this.setState({data:data })
    console.log(data);
  })
}

  render() {
    let startDate = moment(`${this.state.data.earliest_start_date}`).format('L');
    let endDate = moment(`${this.state.data.latest_end_date}`).format('L')
    let closeDate = moment(`${this.state.data.applications_close_date}`).format('L')
    let salary = this.state.data.specifics_info ? this.state.data.specifics_info.salary : 0 ;
      let selectionprocess = this.state.data.role_info ? this.state.data.role_info.selection_process: "";
  return (
   <div className="App">

     <div className = "header">
       <h1> {this.state.data.title} </h1>
     </div>
    <div>
    <div className="center">
    <form >
      <label htmlFor="description">
        <h4> Role Description</h4>
        <p>{this.state.data.description}</p>
      </label>

      <label htmlFor="startDate">
        <h4> Start Date</h4>
        <p> {startDate}</p>
      </label>

      <label htmlFor="startDate">
        <h4> End Date</h4>
         <p>{endDate}</p>
      </label>


      <label htmlFor="closeDate">
        <h4> Close Date</h4>
        <p> {closeDate}</p>
      </label>

      <label htmlFor="Background">
        <h4> Background </h4>
        <Background />
      </label>

      <label htmlFor="Skills">
        <h4> Skills </h4>
        <Skills />
      </label>

      <label htmlFor="Salary">
      <h4> Salary </h4>
      <p> {salary}</p>
      </label>

      <label htmlFor="Selection Process">
        <h4> Selection Process</h4>
      <p> {selectionprocess}</p>
      </label>

    </form>
    </div>
    </div>
    </div>

    );
  }
}

export default App;
