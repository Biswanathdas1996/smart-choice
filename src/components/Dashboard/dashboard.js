import React from 'react';
import mail from "../../assets/images/mail.svg";
import phone from "../../assets/images/phone.svg";
import profileImage from "../../assets/images/profile-img1.jpg";
import callIcon from "../../assets/images/call.svg";
import smiley from "../../assets/images/smiley.png";
import send from "../../assets/images/send.svg";
import soundwave from "../../assets/images/soundwave.svg";
import award from "../../assets/images/award.png";
import Chart from "../Dashboard/chart";


const Dashboard =()=>{
    return (
        <div className="container-fluid r-panel px-5">
            <div className="d-flex justify-content-between w-100 py-3 top-section">
                <div className="r-logo">
                    <h1>Smart Suggest</h1>
                    <p>Welcome Back, <strong>James Lobo</strong></p>
                </div>
                <div>
                    <div className="notify">icon</div>
                    <div>
                        <select className="form-select form-select-sm" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-between gap-3 w-100 mb-4">
                <div className="chart-hldr w-1">
                    <h2 className="title1">Customer Intent</h2>
                    <div className="chart"><Chart isCustomerIntent="true" NoofSegments={3} value={400}/></div>
                </div>
                <div className="chart-hldr w-1">
                    <h2 className="title1">Customer Delight</h2>
                    <div className="chart"><Chart NoofSegments={5} value={200}/></div>
                </div>
                <div className="cust-call-dtls bg-hldr w-4">
                    <p>Current Call Duration</p>
                    <p><strong>00:04 Sec</strong></p>
                </div>
                <div className="d-flex justify-content-between cust-dtls-hldr bg-hldr w-1">
                    <div className="desc-hldr">
                        <h3>Customer Name</h3>
                        <p className="cust-name-txt">Lisa Smith</p>
                        <p className="cust-name-email d-flex"><img src={mail} alt=""/>
                            <span>lisasmith@mail.com</span>
                        </p>
                        <p className="cust-name-ph d-flex"><img src={phone} alt=""/> <span>(333)-333333</span></p>
                        <p className="cust-name-duration"><strong>Customer since 5 months</strong></p>
                    </div>
                    <div className="img-hldr"><img src={profileImage} alt="Customer image"/></div>
                </div>
            </div>

            <div className="d-flex justify-content-between gap-3 w-100 mb-3">
                {/* <!-- tab section --> */}
                <div className="bdr-hldr bdr-primary w-40">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                                type="button" role="tab" aria-controls="home" aria-selected="true">Live
                                Transcription</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile"
                                type="button" role="tab" aria-controls="profile" aria-selected="false">Summary</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact"
                                type="button" role="tab" aria-controls="contact" aria-selected="false">History</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <p className="text-center my-2">Today at 4:30 PM</p>
                            <div className="chat-hldr">
                                <div className="chat-usr chat-usr2-hldr">
                                    <div className="chat-img">
                                        <img src={profileImage} alt=""/>
                                        <p>Lisa Smith</p>
                                    </div>
                                    <div className="chat-desc">
                                        <p>Ya I want to know the best insurance policy for my son, I'm looking for a
                                            tenure of 5 years</p>
                                    </div>
                                </div>

                                <div className="chat-usr chat-usr1-hldr">
                                    <div className="chat-img">
                                        <img src={profileImage} alt=""/>
                                        <p>Lisa Smith</p>
                                    </div>
                                    <div className="chat-desc">
                                        <p>Ya I want to know the best insurance policy for my son, I'm looking for a
                                            tenure of 5 years</p>
                                    </div>
                                </div>

                            </div>
                            <div>
                                <button className="chat-end-btn"><img src={callIcon} alt="End Call"/> End</button>
                                <div className="input-group mb-3 chat-input-hldr">
                                    <span className="input-group-text"><img src={smiley} alt=""/></span>
                                    <input type="text" className="form-control chat-input"
                                        aria-label="Amount (to the nearest dollar)"/>
                                    <span className="input-group-text"><img src={send} alt=""/></span>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...2</div>
                        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...3</div>
                    </div>
                </div>
                {/* <!-- agent responses --> */}
                <div className="bdr-hldr bdr-primary w-30 agnt-resp">
                    <h2>Agent Responses</h2>
                    <div className="ai-title">
                        <img src={soundwave} alt=""/>
                        <h3 className="mb-0">AI Suggested Responses</h3>
                    </div>
                    <div className="respo-hldr">
                        <div className="respo-chat">
                            <p>Ya sure, Please give me a moment while I look for a policy which suits your requirement..
                            </p>
                        </div>
                        <div className="respo-chat">
                            <p>Can you please help me to know more details about the requirements</p>
                        </div>
                        <div className="respo-chat">
                            <p>I'm so sorry but currently we don't have any policy which suits your requirements</p>
                        </div>
                    </div>
                    <div className="ai-title">
                        <img src={soundwave} alt=""/>
                        <h3 className="mb-0">AI Suggested Policys</h3>
                    </div>
                    <div>
                        <table className="table table-borderless ai-suggest w-100">
                            <tbody>
                                <tr>
                                    <td><img src={award} alt=""/></td>
                                    <td>32.6%</td>
                                    <td>₹ 1,234.00</td>
                                    <td><button>Suggest</button></td>
                                </tr>
                                <tr>
                                    <td><img src={award} alt=""/></td>
                                    <td>32.6%</td>
                                    <td>₹ 1,234.00</td>
                                    <td><button>Suggest</button></td>
                                </tr>
                                <tr>
                                    <td><img src={award} alt=""/></td>
                                    <td>32.6%</td>
                                    <td>₹ 1,234.00</td>
                                    <td><button>Suggest</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* <!-- agent analytics --> */}
                <div className="w-30" style={{display: "none"}}>
                    <h2 className="title1">Agent Analytics</h2>
                    <div className="rank-title">
                        <div className="icon-hldr"><img src="" alt=""/></div>
                        <h3>Lead Chart</h3>
                        <div>Chart</div>
                        <div className="d-flex">
                            <div className="d-flex">
                                <div>Total Calls</div>
                                <div>46</div>
                            </div>
                            <div>
                                <div className="d-flex">
                                    <div>Total Queries Solved</div>
                                    <div>2</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- customer history --> */}
                <div className="w-30">
                    <h2 className="title1">Customer History</h2>
                    <div className="cust-hist">
                        <table className="table table-borderless _cust-hist ai-suggest">
                            <thead>
                                <tr>
                                    <th>Insurer</th>
                                    <th>Amount</th>
                                    <th>&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src={smiley} alt=""/></td>
                                    <td>€ 289.00</td>
                                    <td><button>View Details</button></td>
                                </tr>
                                <tr>
                                    <td><img src={smiley} alt=""/></td>
                                    <td>€ 289.00</td>
                                    <td><button>View Details</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="bg-hldr p-4 pay-info">
                        <div>
                            <h2>Payment Info</h2>
                            <p>Credit Card</p>
                            <button>Update payment info</button>
                        </div>
                        <div>
                            <img src="images/" alt=""/>
                            <p>*****5548</p>
                            <p>Expiry Date: 03/27</p>
                        </div>
                    </div>
                    <div className="tckes-hldr mt-4">
                        <h3>Tickets</h3>
                        <div class="box-hldr">
                            No older tickets found...
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Dashboard;