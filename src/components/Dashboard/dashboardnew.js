import React, { useState, useEffect, useRef } from "react";
import mail from "../../assets/images/mail.svg";
import phone from "../../assets/images/phone.svg";
import profileImage from "../../assets/images/profile-img1.jpg";
import callIcon from "../../assets/images/call.svg";
import smiley from "../../assets/images/smiley.png";
import send from "../../assets/images/send.svg";
import soundwave from "../../assets/images/soundwave.svg";
import award from "../../assets/images/award.png";
import agentImagepic from "../../assets/images/agentimage.png";
import notificationIcon from "../../assets/images/notificationIcon.png";
import saleforceIcon from "../../assets/images/saleforce.png";
import rightArrow from "../../assets/images/rightarrow.png";
import thumbsup from "../../assets/images/thumbs-up.png";
import thumbsdown from "../../assets/images/thumbs-up-down.png";
import sheIcon from "../../assets/images/sheIcon.png";
import heIcon from "../../assets/images/HeIcon.png";
import theyIcon from "../../assets/images/theyIcon.png";
import refresh from "../../assets/images/refresh.png";
import Chart from "../Dashboard/chart";
import productIcon from "../../assets/images/product.png";
import productIconTwo from "../../assets/images/Achmea_logo.png";
import productOfferIcon from "../../assets/images/productoffer.png";
import { FormattedMessage } from "react-intl";
import axios from "axios";

import Agentdetails from "../../data/Agentdetails.json";
import customerdetails from "../../data/customerdetails.json";
import stories from "../../data/stories.json";

const DashboardNew = () => {
  const [ishowConversation, setishowConversation] = useState(true);
  const [liveTranscriptionData, setLiveTranscriptionData] = useState([]);
  const [aiSuggestedData, setaiSuggestedData] = useState([]);
  const [LiveTranscriptionorderID, setLiveTranscriptionorderID] = useState(1);
  const [aiSuggestedDataorderID, setaiSuggestedDataorderID] = useState(1);
  const [customerName, setCustomerName] = useState("");
  const [customerphoto, setCustomerPhoto] = useState("");
  const [agentName, setAgentName] = useState("");
  const [agentImage, setAgentImage] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  const [userArrystate, setuserArrystate] = useState([]);
  const [aiArraystate, setaiArraystate] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom when the component mounts or updates
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [LiveTranscriptionorderID]);

  // console.log("LiveTranscriptionorderID", LiveTranscriptionorderID);
  // useEffect(()=>{
  //     if(ishowConversation){
  //         //DeleteAllLiveTranscription();
  //          postLiveTranscription();
  //         setTimeout(()=>{
  //             getLiveTranscription();
  //         },[5000])
  //             setTimeout(()=>{
  //                 getAISuggestion();
  //             },[12000])

  //     }

  // },[ishowConversation])
  // useEffect(()=>{

  // },[])
  useEffect(() => {
    customerDetails();
    AgentDetails();
    Storiesdetails();
    const date = new Date();
    let currentTime = date.getHours() + ":" + date.getMinutes();
    setCurrentTime(currentTime);
  }, []);

  const customerDetails = async () => {
    try {
      const res = customerdetails;

      setCustomerName(res?.data[0].userName);
      setCustomerPhoto(res?.data[0].userPhoto);
      //console.log("res",res.data[0].userName);
    } catch (error) {
      console.log(error);
    }
  };

  const AgentDetails = async () => {
    try {
      const res = Agentdetails;
      console.log("res=============>", res);
      setAgentName(res?.data[0].userName);
      setAgentImage(res?.data[0].userPhoto);
      //console.log("res",res.data[0].userName);
    } catch (error) {
      console.log(error);
    }
  };

  const Storiesdetails = async () => {
    try {
      const res = stories;

      setLiveTranscriptionData(res?.data[0].transcription);
      setTimeout(() => setuserArrystate([res?.data[0].transcription[0]]), 3000);

      setaiSuggestedData(res?.data[0].aiSuggestions);
      setTimeout(() => setaiArraystate([res?.data[0].aiSuggestions[0]]), 5000);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAISuggestion = async (suggestedID, transcription, role) => {
    const options = {
      headers: { "content-type": "application/json" },
    };
    let obj = {
      id: liveTranscriptionData.length + 1,
      transcription: transcription,
      role: role,
      name: "You",
      suggestedId: suggestedID,
    };
    await axios
      .post(`http://localhost:3500/LiveTranscription`, obj, options)
      .then((res) => {
        // console.log("post",res)
      });
  };

  // }

  function userdelay(data) {
    const temp = [...userArrystate, data];
    setuserArrystate(temp);
    setTimeout(() => {
      setuserArrystate([
        ...temp,
        liveTranscriptionData[LiveTranscriptionorderID],
      ]);
    }, 3000);
    console.log("second", userArrystate);
  }
  function aidelay() {
    setTimeout(() => {
      setaiArraystate([aiSuggestedData[LiveTranscriptionorderID]]);
    }, 5000);
  }
  const LoadLiveTranscription = ishowConversation
    ? userArrystate?.map((item) => {
        console.log("item.userName", item?.userName);
        const check = "role";
        return (
          <>
            {check in item ? (
              <div className="chat-usr chat-usr2-hldr">
                <div className="chat-img">
                  <img src={profileImage} alt="" />
                  {}
                  <p style={{ margin: "4px", textAlign: "center" }}>
                    {item.userName}
                  </p>
                </div>
                <div className="chat-desc">
                  <p style={{ margin: "14px" }}>{item.text}</p>
                </div>
              </div>
            ) : (
              <div className="chat-usr chat-usr2-hldr">
                <div className="chat-img">
                  <img src={agentImagepic} alt="" />
                  {}
                  <p style={{ margin: "4px", textAlign: "center" }}>
                    James Lobo
                  </p>
                </div>
                <div className="chat-desc">
                  <p style={{ margin: "14px" }}>{item.text}</p>
                </div>
              </div>
            )}
          </>
        );
      })
    : "";

  // console.log("aiSuggestedData", aiSuggestedData)
  const LoadAiSuggestedResponse = ishowConversation
    ? aiArraystate?.map((item) => {
        return (
          <>
            {
              <div>
                <div
                  className="respo-chat"
                  style={{ cursor: "pointer", paddingBottom: "3rem" }}
                  // onClick={() => { handleAISuggestion(item.suggestedId, item.suggestedResp, item.role) }}
                  onClick={() => {
                    setLiveTranscriptionorderID(LiveTranscriptionorderID + 1);
                    // userdelaymsg(item?.suggestion1)
                    setaiArraystate([]);
                    userdelay(item?.suggestion1);
                    aidelay();
                    // clearTimeout(setuserArrystate([...userArrystate, liveTranscriptionData[LiveTranscriptionorderID]]), 3000)
                  }}
                >
                  <p className="respo-chat-feedback">
                    {item?.suggestion1?.type} - Response
                  </p>
                  <p>{item?.suggestion1?.text}</p>
                  <div className="repo-chat-icon d-flex justify-content-around">
                    <div>
                      <img
                        src={thumbsup}
                        alt=""
                        style={{ width: "15px", height: "15px" }}
                      />
                      &nbsp;
                      <img
                        src={thumbsdown}
                        alt=""
                        style={{ width: "15px", height: "15px" }}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="respo-chat"
                  style={{ cursor: "pointer", paddingBottom: "3rem" }}
                  onClick={() => {
                    setLiveTranscriptionorderID(LiveTranscriptionorderID + 1);
                    // userdelaymsg(item?.suggestion2)
                    setaiArraystate([]);
                    userdelay(item?.suggestion2);
                    aidelay();
                    // setuserArrystate([...userArrystate, item?.suggestion2, liveTranscriptionData[LiveTranscriptionorderID]])
                    // setaiArraystate([aiSuggestedData[LiveTranscriptionorderID]])                                // clearTimeout(setuserArrystate([...userArrystate, liveTranscriptionData[LiveTranscriptionorderID]]), 3000)
                  }}
                  // onClick={() => { handleAISuggestion(item.suggestedId, item.suggestedResp, item.role) }}
                >
                  <p className="respo-chat-feedback">
                    {item?.suggestion2?.type} - Response
                  </p>
                  <p>{item?.suggestion2?.text}</p>
                  <div className="repo-chat-icon d-flex justify-content-around">
                    <div>
                      <img
                        src={thumbsup}
                        alt=""
                        style={{ width: "15px", height: "15px" }}
                      />
                      &nbsp;
                      <img
                        src={thumbsdown}
                        alt=""
                        style={{ width: "15px", height: "15px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            }
          </>
        );
      })
    : "";
  return (
    <>
      <div className="container-fluid r-panel px-4">
        <div className="d-flex justify-content-between w-100 py-3 top-section">
          <div className="r-logo">
            <h1>
              <FormattedMessage
                id="app.header"
                defaultMessage={"Smart Suggest"}
              />
            </h1>
            <p>
              <FormattedMessage
                id="app.header.two"
                defaultMessage={"Welcome Back"}
              />
              ,<strong>{agentName}</strong>
            </p>
          </div>

          <div>
            <div className="d-flex justify-content-between gap-3 w-10">
              <span className="noti-btn">
                <img src={notificationIcon} alt="" />
              </span>
              <img
                src={agentImagepic}
                alt=""
                style={{ height: "31px", width: "31px" }}
              />
              <span className="agent-name">{agentName}</span>
            </div>
            {/* <div>
                        
                    </div> */}
          </div>
        </div>
        <div className="d-flex justify-content-between gap-3 w-100 mb-3 mid-hldr pb-3">
          {/* <!-- tab section --> */}
          <div className="bdr-hldr bdr-primary w-40 position-relative">
            <div className="d-flex w-100 justify-content-between">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    <FormattedMessage
                      id="app.label.transcription"
                      defaultMessage={"Live Transcription"}
                    />
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    <FormattedMessage
                      id="app.label.summary"
                      defaultMessage={"Summary"}
                    />
                  </button>
                </li>
              </ul>
              <div className="live-trans-counter">01:13</div>
            </div>
            <div
              className="tab-content"
              id="myTabContent"
              style={{ overflowY: "auto" }}
              ref={scrollRef}
            >
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <p className="text-center my-2">Today at {currentTime}</p>
                <div className="respo-hldr">
                  {/* {
                                    setTimeout((LoadLiveTranscription),2000)
                                    } */}
                  {LoadLiveTranscription}
                </div>

                <div className="chat-btn-hldr">
                  <button className="chat-end-btn">
                    <img src={callIcon} alt="End Call" /> End
                  </button>
                  {/* <button onClick={()=>setishowConversation(!ishowConversation)}>show</button> */}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                ...2
              </div>
              <div
                className="tab-pane fade"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                ...3
              </div>
            </div>
          </div>
          {/* <!-- agent responses --> */}
          <div
            className="bdr-hldr bdr-primary w-40 agnt-resp"
            style={{ position: "relative" }}
          >
            <img
              src={soundwave}
              alt=""
              style={{ height: "25px", width: "25px" }}
            />
            &nbsp;&nbsp;
            <h2>
              <FormattedMessage
                id="app.label.AISuggested"
                defaultMessage={"AI Suggested Responses"}
              />
            </h2>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="suggested-res-img d-flex justify-content-between">
                <img src={sheIcon} alt="" style={{ height: "20px" }} />
                &nbsp;&nbsp;
                <img src={heIcon} alt="" style={{ height: "20px" }} />
                &nbsp;&nbsp;
                <img src={theyIcon} alt="" style={{ height: "20px" }} />
              </div>
              <button className="refresh-btn">
                <img src={refresh} alt="" />
              </button>
            </div>
            <div
              className="respo-hldr"
              style={{
                overflowY: "auto",
              }}
            >
              {LoadAiSuggestedResponse}
            </div>
            <div style={{ position: "_absolute", bottom: 0 }}>
              <div className="ai-title">
                <img src={productOfferIcon} alt="" />
                <h3 className="mb-0">
                  <FormattedMessage
                    id="app.label.products"
                    defaultMessage={"Products and Offers"}
                  />
                </h3>
              </div>
              <div>
                <table className="table table-borderless ai-suggest w-100">
                  <tbody>
                    <tr>
                      <td>
                        <img src={productIcon} alt="" />
                      </td>
                      <td>32.6%</td>
                      <td>€ 234.00</td>
                      <td>
                        <button>Suggest</button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src={productIconTwo} alt="" />
                      </td>
                      <td>32.6%</td>
                      <td>€ 160.00</td>
                      <td>
                        <button>Suggest</button>
                      </td>
                    </tr>
                    {/* <tr>
                                        <td><img src={award} alt=""/></td>
                                        <td>32.6%</td>
                                        <td>₹ 1,234.00</td>
                                        <td><button>Suggest</button></td>
                                    </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="w-30 cust-hist-hldr">
            {/* <div className="d-flex justify-content-between gap-3 w-100 mb-4"> */}
            <div className="chart-one-hldr text-center">
              <h2 className="title1">
                <FormattedMessage
                  id="app.label.customerDelight"
                  defaultMessage={"Customer Delight"}
                />
              </h2>
              <Chart NoofSegments={5} value={700} />
            </div>
            <div className="chart-two-hldr text-center">
              <h2 className="title1">
                <FormattedMessage
                  id="app.label.customerIntent"
                  defaultMessage={"Customer Intent"}
                />
              </h2>
              <Chart isCustomerIntent="true" NoofSegments={3} value={500} />
            </div>

            <div
              className="d-flex flex-column bg-hldr"
              style={{ marginTop: "0rem" }}
            >
              <div className="d-flex justify-content-between">
                <div className="desc-hldr">
                  <h3>Customer Name</h3>
                  <p className="cust-name-txt">Lisa Smith</p>
                  <p className="cust-details">
                    Gender Identity :{" "}
                    <img
                      src={sheIcon}
                      style={{ height: "12px", width: "48px" }}
                      alt="Customer 2"
                    />
                  </p>
                </div>
                <div className="img-hldr">
                  <img
                    src={profileImage}
                    className="img-hldr-profile"
                    alt="Customer "
                  />
                </div>
              </div>
              <div>
                <p className="cust-details">
                  Age : <span className="cust-details-data">27 years</span>
                </p>
                <p className="cust-details">
                  Occupation : <span className="cust-details-data">Hr</span>
                </p>
                <p className="cust-details">
                  Company Name :{" "}
                  <span className="cust-details-data">Abc Infotech</span>
                </p>
                <p className="cust-details">
                  Current policy's :{" "}
                  <span className="cust-details-data">2</span>
                </p>
              </div>

              <button className="cust-dtl-view-more d-flex justify-content-between ms-auto">
                <div>
                  <img
                    src={saleforceIcon}
                    alt="Salesforce Icon"
                    style={{ width: "30px", height: "20px" }}
                  />
                </div>
                <div
                  style={{
                    color: "#000000",
                    fontSize: "10px",
                    fontWeight: "600",
                  }}
                >
                  View More
                </div>
                <div>
                  <img src={rightArrow} alt="" />
                </div>
              </button>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardNew;
