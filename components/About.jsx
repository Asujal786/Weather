import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About(props) {
  return (
    <div>
      <Navbar />
      <div className="container ">
        <h3 className="my-4" style={{fontSize:"30px", textAlign:"center"}}> About </h3>
        <div className=" my-4">
      <p>
        Welcome to our weather application! Our application uses real-time
        weather data from the OpenWeatherMap API to provide you with accurate
        and up-to-date weather information for any location around the world.
      </p>
      <p>
        Our team of developers has worked hard to create a simple, user-friendly
        interface that allows you to easily search for and view the current
        weather conditions in any city. With our application, you can quickly
        access information about the temperature, humidity, wind speed, and
        more.
      </p>
      <p>
        At the heart of our application is the OpenWeatherMap API, which
        provides us with access to a wealth of weather data from around the
        world. This allows us to deliver accurate and reliable weather
        information to our users, no matter where they are located.
      </p>
      <p>
        We are committed to providing you with the best possible experience when
        using our weather application. If you have any questions or feedback,
        please feel free to contact us using the information provided on our
        contact page.
      </p>
      <p>
        Thank you for choosing our weather application. We hope that it helps
        you stay informed and prepared for any weather conditions!"
      </p> </div>
 </div>
      <Footer />
    </div>
  );
}

export default About;
