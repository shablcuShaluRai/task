import React, { Component } from 'react';
import * as DataApi from './utils/Api'
import Background from './Background'






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
  return (
   <div className="App">

     <div className = "header">
       <h1> {this.state.data.title} </h1>
     </div>
    <div>
    <form >
      <label htmlFor="description">
        <h4> Role Description</h4>
        <p>{this.state.data.description}</p>
      </label>

      <label htmlFor="startDate">
        <h4> Start Date</h4>
        <p> {this.state.data.earliest_start_date}</p>
      </label>

      <label htmlFor="startDate">
        <h4> End Date</h4>
         <p>{this.state.data.latest_end_date}</p>
      </label>


      <label htmlFor="closeDate">
        <h4> Close Date</h4>
        <p> {this.state.data.applications_close_date}</p>
      </label>



    </form>




  <Background
  
  />

      </div>

    {/*  <button onClick={this.getData.bind(this)}>click</button> */}



  </div>



    );
  }
}

export default App;
