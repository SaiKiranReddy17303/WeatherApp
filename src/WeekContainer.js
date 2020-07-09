import React from 'react';
import Card from './Card';




class WeekContainer extends React.Component {
  state = {
    days: []
  }

  componentDidMount = () => {


    const Api_Key = "4c93327739d639573eaaef3004f89ec0";
    // const country=this.props.citypar;
    const weatherURL =
    `http://api.openweathermap.org/data/2.5/forecast?zip=10302,us&units=imperial&APPID=${Api_Key}`




    fetch(weatherURL)
    .then(res => res.json())
    .then(data => {
      console.log("Data List Loaded", data.list)
      const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
      this.setState({days: dailyData})
    })
  }

  formatCards = () => {
    return this.state.days.map((day, index) => <Card day={day} key={index}/>)
  }

  render() {
    return (
      <div className="container-fluid">
      {/* <h1 className="display-1 jumbotron">5-Day Forecast.</h1> */}
      {/* <h5 className="display-5 text-muted">New York, US</h5> */}
        <div className="row">

         

       
          {this.formatCards()}

  




         
          
        
        
        </div>
      </div>
    )
  }
}

export default WeekContainer
