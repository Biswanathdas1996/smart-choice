import React, { useState,useEffect } from "react";
import dashboardIcon from "../../assets/images/dashboard.png";
import userProfile from "../../assets/images/user-profile.png";
import reportIcon from "../../assets/images/report.png";
import pwcIcon from "../../assets/images/PwCIcon.png";
import sidepanelIcon from "../../assets/images/sidepanelImage.png";
import bookreader from "../../assets/images/book-reader.png";
import chatIcon from "../../assets/images/chat.png";
import saleforceIcon from "../../assets/images/saleforce.png";
import contactIcon from "../../assets/images/contact.png";
import documentIcon from "../../assets/images/document.png";
import rightArrow from "../../assets/images/rightarrow.png";

const Sidepanel = () => {
  const [showpanel, setIsShowpanel] = useState(false);

  useEffect(()=>{
  },[showpanel])
  const sidepanelAccordian = () => {
    return (
      <>
        <aside className="sidebar w-40">
        <div className="sidepanel-card">
        <div className="sidepanel-internal-doc d-flex justify-content-between">
            <div className="sidepanel-title">Knowledge base</div>
            <div onClick={()=>{setIsShowpanel(false)}}>
                <img src={rightArrow} alt=""  style={{cursor:"pointer"}}/>
            </div>
            </div>
            <div className="form-group row" style={{marginTop:"17px"}}>
            <div className="col-sm-12">
      <input type="email" class="form-control form-control-lg" id="colFormLabelLg" placeholder="Search here...."/>
      </div>
    </div>
    
    <div className="search-title">You searched for<b> "fixed-rate-mortgages"</b> </div>
    <div className="search-internal-doc-title"><h4>Internal Documents</h4></div>
    <div className="sidepanel-internal-doc d-flex justify-content-between">
    <div>
    <img src={documentIcon} alt="" style={{width:"24px",height:"34px"}}/>
    </div>
    <div>
        <div className="doc-title"><a href="">FAQ on Mortgages</a></div>
        <div><h5>Interest rate remain constant throughout the loan term, Providing you with predictability and stability</h5></div>
    </div>

    </div>
    <div className="sidepanel-internal-doc d-flex justify-content-between">
    <div>
    <img src={documentIcon} alt="" style={{width:"24px",height:"34px"}}/>
    </div>
    <div>
        <div className="doc-title"><a href="">FAQ on Mortgages</a></div>
        <div><h5>Interest rate remain constant throughout the loan term, Providing you with predictability and stability</h5></div>
    </div>

    </div>
    <h4>on the web</h4>

    </div>
  
            {/* <input type="text" placeholder="search"/> */}
        </aside>
      </>
    );
  };
  return (
    <div
      className="right-panel d-flex justify-content-center"
      style={{ background: "#ECECEC" }}
    >
      {/* <div className="logo"><img src={pwcIcon} alt=""/></div> */}
      <ul className="sidepanelpage-nav w-100">
      <li>
          <div>
            <span className="bg"><img
              className="myDIV"
              src={contactIcon}
              alt=""
            /></span>
            <span className="hide">
              <b>Contacts</b>
            </span>
          </div>
        </li>
        <li>
          <div onClick={() => setIsShowpanel(!showpanel)}>
          <span className="bg">
            <img
              className="myDIV"
              src={bookreader}
              alt=""
            /></span>
            <span className="hide">
              <b>Knowledge Base</b>
            </span>
          </div>
        </li>
        <li>
          <div>
          <span className="bg">
            <img
              className="myDIV"
              src={saleforceIcon}
              alt=""
            /></span>
            <span className="hide">
              <b>Create Lead</b>
            </span>
          </div>
        </li>
        <li>
          <div>
          <span className="bg">
            <img
              className="myDIV"
              src={sidepanelIcon}
              alt=""
            /></span>
            <span className="hide">
              <b>Service Now</b>
            </span>
          </div>
        </li>
        <li>
          <div>
          <span className="bg">
            <img
              className="myDIV"
              src={chatIcon}
              alt=""
            /></span>
            <span className="hide">
              <b>Chat Now</b>
            </span>
          </div>
        </li>
      </ul>
      {/* <div>
                    <img className='myDIV' src={chatIcon} style={{width:"34px"}} alt=""/>
                    <span className='hide'><b>Chat Now</b></span>
                    </div><br/>
                    <div>
                    <img className='myDIV' src={sidepanelIcon} style={{width:"34px"}} alt=""/>
                    <span className='hide'><b>Service Now</b></span>
                    </div><br/>

                    <div>
                    <img className='myDIV' src={saleforceIcon} style={{width:"34px"}} alt=""/>
                    <span className='hide'><b>Create Lead</b></span>
                    </div><br/>

                    <div>
                    <img className='myDIV' src={bookreader} style={{width:"34px"}} alt=""/>
                    <span className='hide'><b>Knowledge Base</b></span>
                    </div><br/>

                     <div>
                    <img className='myDIV' src={contactIcon} style={{width:"34px"}} alt=""/>
                    <span className='hide'><b>Contacts</b></span>
                    </div><br/>
                     */}

      {/* </li> */}
      {/* <li><img src={bookreader} style={{width:"34px"}} alt=""/></li>
                <li><img src={saleforceIcon} style={{width:"34px"}} alt=""/></li>
                <li><img src={sidepanelIcon} style={{width:"60px"}} alt=""/></li>
                <li><img src={chatIcon} style={{width:"34px"}} alt=""/></li>   */}
      {/* </ul> */}

      {showpanel ? sidepanelAccordian() : ""}
    </div>
  );
};

export default Sidepanel;
