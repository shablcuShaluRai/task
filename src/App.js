import React, { Component } from 'react';
import * as DataApi from './utils/Api'




class App extends Component {

  state ={
     data : {}
  }

  componentDidMount() {
  DataApi
  .getAllData()
  .then(data => {
    this.setState({data:data })
    console.log(data);
  })
}

    // getData(){
    //   DataApi
    //   .getAllData()
    //   .then(data => {
    //     this.setState({data:data})
    //     console.log(data);
    //   })
    //
    // }

  render() {

    return (
      <div className="App">

   <div className = "header">
   <h1> {this.state.data.title} </h1>

     </div>
        <div>
        <p> {this.state.data.applications_close_date}</p>
        <p> {this.state.data.earliest_start_date}</p>
        <p>{this.state.data.latest_end_date}</p>
        <p>{this.state.data.description}</p>
      </div>

    {/*  <button onClick={this.getData.bind(this)}>click</button> */}
      </div>

    );
  }
}

export default App;
