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
      { this.state.bgData.map(bdtat =>
         <p>{ bdtat.name} </p>

      )}
      </div>
    )
  }
}
