import React, { useState, useEffect } from "react";
import Dashboard from "../Dashboard/dashboardnew";
import Sidebar from "../Sidebar/sidebar";
import Sidepanel from "../SidePanel/sidepanel";
import "../../App.css"
import backimg from "../../assets/AI-Insurance-2@2x.jpg"


// const myStyle = {
//   // backgroundImage: "url('../../assets/AI-Insurance-2@2x.jpg')",
//   background: '#000000',
//   height: '150vh',
//   width: '100vw',
//   // marginTop:'-70px',
//   // fontSize:'50px',
//   backgroundSize: 'cover',
//   backgroundRepeat: 'no-repeat',
// };

const Layout = () => {
  return (
    <>
      {/* <div className="main-div-landing"
        style={myStyle}
      >
        <div className="AdVantage">
          AdVantage
        </div>
        <div className="Welcome">
          Welcome to Smart Suggest
        </div>
        <div className="WelcomeText">
          The next generation smart assistant
        </div>
        <div className="usecaseSelectText">
          Please choose the use case
        </div>

        <div className="languageSelectText">
          Please choose the use case language
        </div>

      </div> */}
      <div className="main-div">
        {/* <Sidepanel /> */}
        <Sidebar />
        <Dashboard/>
        <Sidepanel />
      </div>

    </>
  );
};

export default Layout;
