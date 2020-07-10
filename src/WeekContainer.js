import React  from 'react';
import Card from './Card';








class WeekContainer extends React.Component {
  state = {
    days: []
  }
   
 


  componentDidMount = () => {
   
  


    const Api_Key = "4c93327739d639573eaaef3004f89ec0";
   
    const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?zip=10302,us&units=imperial&APPID=${Api_Key}`;

    // `http://api.openweathermap.org/data/2.5/forecast?q={}&APPID=${Api_Key}`

    //  const weatherURL = `https://samples.openweathermap.org/data/2.5/forecast?q=London,us&appid=439d4b804bc8187953eb36d2a8c26a02`;



    fetch(weatherURL)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      console.log("Data List Loaded", data.list)
      const dailyData = data.list.filter(reading => reading.dt_txt.includes("09:00:00"))
      this.setState({days: dailyData})
    })
  }

  formatCards = () => {
   
    return this.state.days.map((day, index) => <Card day={day} key={index}/>)
  }

  render(props) {
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
