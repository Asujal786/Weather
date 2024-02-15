import React, { useEffect, useState } from "react";
import Fake from "./test";

function Cards(props) {
  const WeatherApiKey = "33f45507950d548b66a57353c0540db2";

  const [City, SetCity] = useState("Sydney");
  const [Weather, SetWeather] = useState(Fake);
  const [Icon, SetIcon] = useState("02d");

  useEffect(() => {
    SetCity(props.currentlocation);
  }, [props.currentlocation]);

  const WeatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${WeatherApiKey}&units=metric`;
  useEffect(() => {
    SetCity(props.currentlocation);
    fetch(WeatherApi)
      .then((res) => res.json())
      .then((data) => SetWeather(data));
  }, [City]);

  
  const imgurl = `https://openweathermap.org/img/wn/${Icon}@4x.png`;

  useEffect(()=>{
    SetIcon(Weather.weather[0].icon);
    const IIcon=Weather.weather[0].icon;
    SetIcon(IIcon);
    console.log(Weather);

  },)

  const desc=Weather.weather[0].description.toUpperCase();
  return (
    <div className="mg" style={{ marginTop: "60px" }}>
      <div className="content my-4">
        <div className="item">
          <img style={{display:"block"}}src={imgurl} alt="Icon" />
          <p style={{fontSize:"24px", textAlign:"center", padding:"7px"}}> {desc}</p>
        </div>
        <div className="item item2 my-4">
          <h4 style={{ textAlign: "center" }}> Current Weather </h4>
          <div className="Loc">
            <h4 style={{ display: "inline-block", margin: "8px" }}>
              {" "}
              {Weather.name} ,
            </h4>
            <h4 style={{ display: "inline-block", margin: "8px" }}>
              {" "}
              {Weather.sys.country}
            </h4>
          </div>
          <div className="temp">
            <h5 style={{ display: "inline-block", margin: "8px" }}> Temp : </h5>
            <h5 style={{ display: "inline-block", margin: "8px" }}>
              {" "}
              {Weather.main.temp} °C{" "}
            </h5>
          </div>
          <div className="real">
            <h6 style={{ display: "inline-block", margin: "8px" }}>
              {" "}
              Real Feel : {Weather.main.feels_like} °C
            </h6>
            <h6 style={{ display: "inline-block", margin: "8px" }}>
              {" "}
              Clouds : {Weather.clouds.all} %
            </h6>
          </div>
          <div className="real">
            <h6 style={{ display: "inline-block", margin: "8px" }}>
              {" "}
              Temp Min : {Weather.main.temp_min}
              °C
            </h6>
            <h6 style={{ display: "inline-block", margin: "8px" }}>
              {" "}
              Temp Max : {Weather.main.temp_max} °C
            </h6>
          </div>
        </div>
        <div className="item item3 my-4">
          {" "}
          <h4 style={{ textAlign: "center" }}> Air Quality </h4>
          <div className="Locc">
            <h6 style={{ display: "inline-block", margin: "8px" }}>
              {" "}
              Winds :{" "}
            </h6>
            <h6 style={{ display: "inline-block", margin: "8px" }}>
              {" "}
              {Weather.wind.speed} km/h
            </h6>
          </div>
          <div className="Locc">
            <h6 style={{ display: "inline-block", margin: "8px" }}>
              {" "}
              Degree ↗ :{" "}
            </h6>
            <h6 style={{ display: "inline-block", margin: "8px" }}>
              {Weather.wind.deg}
            </h6>
          </div>
          <div className="Locc">
            <h6 style={{ display: "inline-block", margin: "8px" }}>
              {" "}
              Humidity :{" "}
            </h6>
            <h6 style={{ display: "inline-block", margin: "8px" }}>
              {" "}
              {Weather.main.humidity}{" "}
            </h6>
          </div>
          <div className="Locc">
            <h6 style={{ display: "inline-block", margin: "8px" }}>
              {" "}
              Visibility :{" "}
            </h6>
            <h6 style={{ display: "inline-block", margin: "8px" }}>
              {" "}
              {Weather.visibility} m{" "}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
