import React  from 'react';
import Card from './Card';








class WeekContainer extends React.Component {
  state = {
    days: []
  }
   
 


  componentDidMount = () => {
   
  


    const Api_Key = "4c93327739d639573eaaef3004f89ec0";
   
    const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?zip=10302,us&units=imperial&APPID=${Api_Key}`;

    


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
     
        <div className="row">

         
       
       
          {this.formatCards()}

    




         
          
        
        
        </div>
      </div>
    )
  }
}

export default WeekContainer
