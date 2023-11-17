import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutScreen.css";
import umesh from "../assets/images/umesh.jpg";
import prudhvi from "../assets/images/prudhvi.jpg";
import mukesh from "../assets/images/mukesh.jpg";
import pavan from "../assets/images/pavan.jpg";
import vamsi from "../assets/images/vamsi.png";
function Members() {
    return (
        <div className="main">
            <div className="title">
                <h2> Team Members </h2>``
            </div>
            <div className="row row-cols-3 row-cols-md-3">
                <div className=" col card">
                    <div className="image">
                        <img src={vamsi} alt="" />
                    </div>
                    <div className="content">
                        <div className="details">
                            <h3>
                                Chillara V L N S Pavana Vamsi <br />{" "}
                                <span> Frontend and Backend </span>
                                <br />
                                <span>
                                    <a href="https://pavana-vamsi.vercel.app/">Portfolio</a>{" "}
                                </span>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className=" col card">
                    <div className="image">
                        <img src={umesh} alt="" />
                    </div>
                    <div className="content">
                        <div className="details">
                            <h3>
                                Umesh Chandra S <br /> <span> Frontend and Backend </span>
                                <br />
                                <span>
                                    <a href="#">Portfolio</a>{" "}
                                </span>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className=" col card">
                    <div className="image">
                        <img src={prudhvi} alt="" />
                    </div>
                    <div className="content">
                        <div className="details">
                            <h3>
                                Pruthivi Raj V S Vulapalli
                                <br /> <span> Frontend and Backend </span>
                                <br />
                                <span>
                                    <a href="#">Portfolio</a>{" "}
                                </span>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className=" col card">
                    <div className="image">
                        <img src={mukesh} alt="" />
                    </div>
                    <div className="content">
                        <div className="details">
                            <h3>
                                Madepalli Mukesh Sai
                                <br /> <span> Frontend and Backend </span>
                                <br />
                                <span>
                                    <a href="#">Portfolio</a>{" "}
                                </span>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="col card">
                    <div className="image">
                        <img src={pavan} alt="" />
                    </div>
                    <div className="content">
                        <div className="details">
                            <h3>
                                Pavan Sai Kishor B <br /> <span> Frontend and Backend </span>
                                <br />
                                <span>
                                    <a href="#">Portfolio</a>{" "}
                                </span>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Members;
