//React Family
import React, { useState, useEffect } from "react";
import { Outlet } from "react-router";
import { Link, NavLink } from "react-router-dom";
import { HashLoader } from "react-spinners";
//External Family
import Data from "../Data/Data";
//Css Family
import "./RootLayout.css";
//Image Familiy
import LogoPicture from "../image/logo.png";
import TruePill from "../image/truepill-logo.png";
//Fontawesome Family
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faXmark,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export default function RootLayout() {
  const navBar = document.querySelector(".navbar");
  const [isOpen, setIsOpen] = useState(true);

  const override = {
    display: "block",
    alignItem: "center",
    justifyContent: "center",
    margin: "20% 50% 0 45%",
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2700);
  }, []);

  function handleOpen() {
    setIsOpen((prev) => !prev);
    navBar.classList.toggle("actives");
  }

  return (
    <div>
      {loading ? (
        <HashLoader
          loading={loading}
          cssOverride={override}
          size={100}
          color="#13376c"
        />
      ) : (
        <div className="rootlayoutcontainer">
          <header>
            <NavLink to="/">
              <img
                src={LogoPicture}
                alt="Logo"
                className="rootlayoutlogoimage"
              />
            </NavLink>
            <div className="rootlayoutlinks navbar">
              <NavLink to="provide">For Providers</NavLink>
              <NavLink to="">Medications</NavLink>
              <NavLink to="">Contact Doctor</NavLink>
              <NavLink to="">Our Mission</NavLink>
              <NavLink to="">Sign In</NavLink>
              <NavLink to="">
                {" "}
                <button className="rootlayoutsignupbutton">Sign Up</button>{" "}
              </NavLink>
            </div>
            <FontAwesomeIcon
              icon={isOpen ? faXmark : faBars}
              onClick={handleOpen}
              className="rootlayoutbars"
            />
          </header>
          <Outlet />
          <footer>
            <div className="footerfirstdiv">
              <div className="footerfirstimagepara">
                <img src={LogoPicture} alt="logo" className="footerImage" />

                <p className="footerfirstpara">
                  At Mark Cuban Cost Plus Drug Company, we offer hundreds of
                  common (and often life-saving) medications at the lowest
                  possible prices.
                </p>
              </div>
              <span>
                {" "}
                <p>powered by:</p>{" "}
                <img src={TruePill} alt="logo" className="footerpowered" />{" "}
              </span>
            </div>
            <hr />
            <div className="footerseconddiv">
              <div className="footerseconddivhead">
                <h2>Stay up to date</h2>
                <p>
                  Subscribe to our newsletter to receive special offers and
                  company updates.
                </p>
                <div className="footersubscription">
                  <input type="email" placeholder="your email address" />
                  <button>
                    {" "}
                    <FontAwesomeIcon icon={faArrowRight} />{" "}
                  </button>
                  <p>
                    {" "}
                    For press or investor inquiries, please email{" "}
                    <Link to=""> press@costplusdrugs.com</Link>{" "}
                  </p>
                </div>
              </div>

              <div className="footerseconddivmain">
                <div className="footerseconddivdata1">
                  {Data.FirstDiv.map((item) => {
                    return (
                      <NavLink to={item.url} key={item.id}>
                        {" "}
                        {item.title}{" "}
                      </NavLink>
                    );
                  })}
                </div>
                <div className="footerseconddivdata2">
                  {Data.SecondDiv.map((item) => {
                    return (
                      <NavLink to={item.url} key={item.id}>
                        {" "}
                        {item.title}{" "}
                      </NavLink>
                    );
                  })}
                </div>
                <div className="footerseconddivdata3">
                  {Data.ThirdDiv.map((item) => {
                    return (
                      <NavLink to={item.url} key={item.id}>
                        {" "}
                        {item.title}{" "}
                      </NavLink>
                    );
                  })}
                </div>
              </div>
            </div>
            <hr />
            <div className="footerthirddiv">
              <div className="footerthirddivicons">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="footerthirddivicondata"
                  title="twitter"
                />
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="footerthirddivicondata"
                  title="linkedin"
                />
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="footerthirddivicondata"
                  title="facebook"
                />
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="footerthirddivicondata"
                  title="youtube"
                />
              </div>
              <p>
                {" "}
                <FontAwesomeIcon icon={faCopyright} /> 2023 Mark Cuban Cost Plus
                Drug Company, PBC. All rights reserved.{" "}
              </p>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
}
