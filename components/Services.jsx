import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Services(props) {
  return (
    <div>
      <Navbar />
      <div className="container ">
        <h3  className="my-4"  style={{fontSize:"30px", textAlign:"center"}}> Services </h3>
        <div className="my-4"> 
        <p>
          {" "}
          Our weather application offers a range of features and benefits that
          make it the go-to app for all your weather needs. Here are some of the
          things you can expect when you use our application: Accurate Weather
          Data One of the most crucial aspects of a weather application is
          accuracy. You need to be able to rely on the data to make informed
          decisions about your day-to-day activities, whether it's deciding what
          to wear or planning outdoor activities.
          
          </p><p> Our weather application uses
          the latest technology and algorithms to provide you with accurate,
          real-time weather data for any location in the world. Detailed Weather
          Information Our weather application goes beyond just providing you
          with the current temperature.
          
          </p> <p>We understand that there are other
          critical weather details that you need to know to plan your day.
          That's why our application offers a range of information, including
          the feel like temperature, minimum temperature, maximum temperature,
          wind speed, and wind direction. With this information, you can make
          informed decisions about your day-to-day activities. Customizable
          Settings We understand that everyone has different preferences when it
          comes to using a weather application. That's why we've designed our
          application to be customizable to suit your needs. You can choose from
          a range of customization options, including the temperature unit
          (Fahrenheit or Celsius), time format (12-hour or 24-hour), and
          language. This means that you can tailor the application to suit your
          preferences. Easy-to-Use Interface We believe that using a weather
          application should be easy and straightforward. That's why we've
          designed our application with a user-friendly interface that is easy
          to navigate. Whether you're a tech-savvy person or not, you can use
          our weather application with ease. Notifications and Alerts Staying
          up-to-date with the latest weather conditions can be a challenge,
          especially if you're busy with your day-to-day activities. That's why
          our weather application offers notifications and alerts to keep you
          informed about any changes in the weather. You can set up custom
          alerts for specific weather conditions, such as thunderstorms, rain,
          or snow. 
          
          </p></div>

        <Footer/>
      </div>
    </div>
  );
}

export default Services;
