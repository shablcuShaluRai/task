import React,{ Component  } from 'react';
import * as DataApi from './utils/Api'


export default class Background extends Component{

  state = {
    bgData:[]
  }

  componentWillMount() {
  DataApi
  .getAllBackground()
  .then(data => {
    this.setState({bgData:data })
    console.log(data);
  })
}

  render(){
        return(
      <div>
       <select>
         {this.state.bgData.map((dta,key) => <option key={key} value={dta.name}>{dta.name}</option>)}
       </select>
      </div>
    )
  }
}
