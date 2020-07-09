import React from "react";
import "./form.style.css";


const Form = props => {
  return (
    <div className=" pb-5 container h-100">
      

     

      <form onSubmit={props.loadweather}>
        <div>{props.error ? error() : ""}</div>
        <div className="row">
          <div className="col-md-3 offset-md-2">
            <input
              type="text"
              className="form-control"
              placeholder="City"
              name="city"
              autoComplete="off"
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Country"
              name="country"
              autoComplete="off"
            />
          </div>
          <div className="col-md-3 mt-md-0 mt-2 text-md-left ">
            <button className="btn btn-info">Get Weather</button>
          </div>
          
        </div>
       
      </form>
      <div className="Bro">
            {props.City}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <h5 className="py-4 super">

          {props.City &&  <i className={`wi ${props.weatherIcon} display-1 bac`} />}


</h5>
            
     </div>

     <div className={ props.temp_celsius ? 'TempBox' :" "} >
        {/* Get Celsius */}
        {props.temp_celsius ? (
          <h1 className="py-2">{props.temp_celsius}&deg; C</h1>
        ) : null}
        </div>
         


    </div>
  );
};

const error = props => {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Please Enter City and Country...!
    </div>
  );
};

export default Form;
