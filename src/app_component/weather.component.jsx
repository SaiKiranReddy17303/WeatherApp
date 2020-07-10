import React from "react";
import "../App.css";

import "./weather.style.css";


const Weather = props => {

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }




  return (
     <div className= {(typeof props.temp_celsius != "undefined") ? ((props.temp_celsius > 30) ? 'warm': 'cool') : ''}>
      <div className="container text-light">
      <div className="Card">
       
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        

        <div className="date"> { props.cityname && dateBuilder(new Date())} </div>

        <div className="humidity">   
         
        {props.humidity? (
          <h1 className="py-2">  Humidity {props.humidity}</h1>
        ) : null}
      </div>
   


      <div className="pressure">   
         
         {props.pressure? (
           <h1  className="py-2">  Pressure  {props.pressure}</h1>
         ) : null}
       
 
          
            </div>




        <div className={ props.temp_celsius ? 'TempBox1' :" "} >
        {/* Get Celsius */}
        {props.temp_celsius ? (
          <h1 className="py-2 display-1">{props.temp_celsius}&deg; <span className="temo"> C</span></h1>
        ) : null}
        </div>
         
            
     
      
      


        {/* show max and min temp */}
        <div className="bac1">
          <h1 className="">{maxminTemp(props.temp_min, props.temp_max)}</h1>
        
        </div>
       

        {/* Weather description */}
        <h4 className="py-3 Desc">
          {props.description.charAt(0).toUpperCase() +
            props.description.slice(1)}
        </h4>
      </div>
    </div>
    </div>
  );
};

export default Weather;

function maxminTemp(min, max) {
  if (max && min) {
    return (
      <h3>
        <span className="px-4">{min}&deg;</span>
        <span className="px-4">{max}&deg;</span>
      </h3>
    );
  }
}
