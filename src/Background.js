import React,{ Component  } from 'react';
import * as DataApi from './utils/Api'

import 'react-select/dist/react-select.css';


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
    {this.state.bgData.map((t,i) => <option key={i} value={t.name}>{t.name}</option>)}
 </select>



      </div>
    )
  }
}
