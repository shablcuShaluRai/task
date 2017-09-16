import React, { Component } from 'react';
import * as DataApi from './utils/Api'




class App extends Component {

  state ={
     data : {}
  }


    getData(){
      DataApi
      .getAllData()
      .then(data => {
        this.setState({data:data })
      })

    }

  render() {
    return (
      <div className="App">
      <h1> hello</h1>

        <div>
        <p> {this.state.data.id}</p>
        <p> {this.state.data.title} </p>
        <p> {this.state.data.applications_close_date}</p>
        <p> {this.state.data.earliest_start_date}</p>
        <p>{this.state.data.latest_end_date}</p>
        <p>{this.state.data.description}</p>

        </div>

      <button onClick={this.getData.bind(this)}>click</button>
      </div>
    );
  }
}

export default App;
