import React from 'react';
import dashboardIcon from "../../assets/images/dashboard.png";
import userProfile from "../../assets/images/user-profile.png";
import reportIcon from "../../assets/images/report.png";
import pwcIcon  from "../../assets/images/PwCIcon.png";
const Sidebar =()=>{
    return (
        <div className="l-panel d-flex justify-content-start">
            <div className="logo"><img src={pwcIcon} alt=""/></div>
            <ul className="page-nav w-100">
                <li className="active"><img src={dashboardIcon} alt="" style={{width:"20px"}}/></li>
                <li><img src={userProfile} alt="" style={{width:"20px"}}/></li>
                <li><img src={reportIcon} alt="" style={{width:"20px"}}/></li>
            </ul>
        </div>
    )
}
export default Sidebar;