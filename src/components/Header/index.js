import { Link } from "react-router-dom";

import "./index.css";
import { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
const Header = (props) => {
  const [activeRoute, setActiveRoute] = useState("home");
  const [activeModal, setActiveModal] = useState(false);

  const modalVal = (
    <div className="modal_content">
      <span>Success! We'll call you back shortly.</span>
      <span onClick={() => setActiveModal(false)}>&times;</span>
    </div>
  );

  useEffect(() => {
    setActiveModal(false);
  }, [activeRoute]);

  const Showmodal = activeModal ? modalVal : "";
  return (
    <div className="heaaderWithShowModal">
      <div className="headerContainer">
        <div>
          <Link to="/">
            <img
              value="home"
              onClick={() => {
                setActiveRoute("home");
              }}
              className="logoIcon"
              src="https://i.pinimg.com/564x/4b/4e/52/4b4e52aca2303bf042961006080434ff.jpg"
              alt="logo"
            />
          </Link>
        </div>

        <div className="headerInsideContainer">
          <Link to="/">
            <button
              className={activeRoute === "home" ? "activeBtn" : "notActiveBtn"}
              value="home"
              onClick={() => {
                setActiveRoute("home");
              }}
            >
              Home
            </button>
          </Link>
          <Link to="/whychooseus">
            <button
              className={
                activeRoute === "whychooseus" ? "activeBtn" : "notActiveBtn"
              }
              value="whychooseus"
              onClick={() => {
                setActiveRoute("whychooseus");
              }}
            >
              whyChooseUs
            </button>
          </Link>
          <Link to="/whatwilllearn">
            <button
              className={
                activeRoute === "whatwilllearn" ? "activeBtn" : "notActiveBtn"
              }
              value="whatwilllearn"
              onClick={() => {
                setActiveRoute("whatwilllearn");
              }}
            >
              What Will Learn
            </button>
          </Link>
          <Link to="/placementassistance">
            <button
              className={
                activeRoute === "placementassistance"
                  ? "activeBtn"
                  : "notActiveBtn"
              }
              value="placementassistance"
              onClick={() => {
                setActiveRoute("placementassistance");
              }}
            >
              Placement Assistance
            </button>
          </Link>
          <Link to="/prepjourney">
            <button
              className={
                activeRoute === "prepjourney" ? "activeBtn" : "notActiveBtn"
              }
              value="prepjourney"
              onClick={() => {
                setActiveRoute("prepjourney");
              }}
            >
              Preparation Journey
            </button>
          </Link>
        </div>
        <div>
          <button
            onClick={() => setActiveModal(true)}
            id="openModalBtn"
            className="reqBtn"
            value="Request Call Back"
          >
            <FaPhoneAlt /> Request Call Back
          </button>
        </div>
      </div>
      {Showmodal}
    </div>
  );
};

export default Header;
