import React, { Component } from 'react';
import * as DataApi from './utils/Api'


export default class Skills extends Component {

  state = {
   skills: []
  }


componentWillMount() {
    DataApi
    .getAllSkills()
    .then(data => {
      this.setState({skills:data })
      console.log(data);
    })
  }

 render(){
   return(
     <div>
       <select>
          {this.state.skills.map((dta,key) => <option key={key} value={dta.name}>{dta.name}</option>)}
      </select>
    </div>
  )
}
}
