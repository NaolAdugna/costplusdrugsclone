//React Family
import React from "react";
import { FreeMode } from "swiper";
import { NavLink } from "react-router-dom";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
//External Family
import Data from "../Data/Data";
//Css Family
import "./Home.css";
// images
import MessagePicture from "../image/image__1_.png";
import OfferImage from "../image/lady.png";
//Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import "swiper/swiper-bundle.min.css";

export default function Home() {
  const [isOpen, setIsOpen] = React.useState(false);

  function handleClick(event) {
    const clickedId = event.target.id;
    setIsOpen((prev) => (prev === clickedId ? !prev : clickedId));
  }

  return (
    <div>
      <main>
        <div className="homecontainer">
          <h2 className="hometitle">
            No middlemen. No price games. <br /> Huge drug savings.
          </h2>
          <Swiper
            modules={[Navigation, FreeMode]}
            navigation={true}
            freeMode={true}
            grabCursor={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              300: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              633: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              888: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              1137: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
              1400: {
                slidesPerView: 5,
                spaceBetween: 15,
              },
            }}
            className="swipercontainer"
          >
            {Data.HeroData.map((item) => {
              return (
                <SwiperSlide key={item.id} className="swiperdata">
                  <NavLink to={item.url}>
                    {" "}
                    <h1 className="homeswipertitle"> {item.title}</h1>{" "}
                    <h2 className="homeswiperdescription">
                      {" "}
                      {item.description}{" "}
                    </h2>{" "}
                    <br /> <h1 className="homeswiperprice"> {item.price} </h1>{" "}
                    <h2 className="homeswiperretail"> {item.retail} </h2>{" "}
                  </NavLink>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <NavLink to="">
            {" "}
            <button className="homebutton">See all medications</button>
          </NavLink>
        </div>
      </main>
      <div className="workcontainer">
        <div className="workcontent1">
          <p>
            "Everyone should have safe, affordable medicines with transparent
            prices." <br /> <strong> -Mark Cuban </strong>
          </p>
          <img src={MessagePicture} alt="logo" />
        </div>
        <div className="workcontent2">
          <div className="workcontent2header">
            <h2>How Cost Plus Drugs works</h2>
            <p>
              With all medications listed on our site, you will need to request
              a new prescription from your U.S.-based provider to place an
              order.
            </p>
          </div>
          <div className="workcontent2main">
            <Swiper
              modules={[Navigation]}
              navigation
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                300: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                900: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
            >
              {Data.WorkData.map((item) => {
                return (
                  <div className="workcontent2container">
                    <SwiperSlide key={item.id} className="workcontent2swiper">
                      <div className="workcontent2swiperdata">
                        {" "}
                        <span className="workcontent2mainnumber">
                          {" "}
                          {item.no}{" "}
                        </span>{" "}
                        <h3 className="workcontent2maintitle">
                          {" "}
                          {item.title}{" "}
                        </h3>{" "}
                        <img
                          src={item.url}
                          alt="logo"
                          className="workcontent2mainimage"
                        />{" "}
                      </div>
                    </SwiperSlide>
                  </div>
                );
              })}
            </Swiper>
            <button className="workcontent2mainbutton">Get Started Now</button>
          </div>
        </div>
      </div>
      <div className="pricecontainer">
        <div className="pricecontent">
          <h2>Here's exactly how we price your drugs</h2>
          <p>
            We're different from your normal drug wholesaler.We think you should
            know <br /> how much you medications cost and why. For example a{" "}
            <strong>
              30 count supply <br /> of 400mg imatinb
            </strong>{" "}
            will cost:
          </p>
          <div className="pricecalculation">
            <h1>
              Your drug costs us <br /> <span>$35.10</span>{" "}
            </h1>
            <div className="pricebenefit">
              you save $9,622.20 on your medications
            </div>
            <p>
              Retail Price at other companies <br /> <strong>$9,657.30</strong>{" "}
            </p>
          </div>
          <p>
            Your final cost will include shipping and taxes, <br /> which vary
            with locaiton
          </p>
          <div className="priceswipercontainer">
            <Swiper
              modules={[Navigation]}
              navigation
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                300: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                900: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 15,
                },
              }}
            >
              {Data.PriceData.map((item) => {
                return (
                  <div className="priceswipercontent">
                    <SwiperSlide key={item.id}>
                      <div className="priceswiperdata">
                        {" "}
                        <img src={item.url} alt="logo" />{" "}
                        <p> {item.subtitle} </p>{" "}
                        <h2>
                          {item.title} <br /> <strong> {item.price} </strong>{" "}
                        </h2>{" "}
                      </div>
                    </SwiperSlide>
                  </div>
                );
              })}
            </Swiper>
          </div>
          <div className="pricelearn">
            <FontAwesomeIcon icon={faInfoCircle} className="priceinfoicon" />{" "}
            <NavLink to="" className="pricelearn">
              Learn more about our cost
            </NavLink>
          </div>
        </div>
      </div>

      <div className="affordablecontainer">
        <div className="affordablecontent">
          <div className="affordableHeader">
            <h2>Affordable medication is your right</h2>
            <p>
              At Mark Cuban Cost Plus Drug Company,we offer hundreds of
              common(and often life-saving) medications at lowest possible
              prices.
            </p>
          </div>

          <div className="affordableswiper">
            <Swiper
              modules={[Navigation]}
              navigation
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBewteen: 10,
                },
                300: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                900: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                1050: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
            >
              {Data.AffordableData.map((item) => {
                return (
                  <div className="affordableswipercontainer">
                    <SwiperSlide key={item.id}>
                      <div className="affordableswiperdata">
                        <img
                          src={item.icon}
                          alt="logo"
                          className="affordableswiperimage"
                        />
                        <h2> {item.title} </h2>{" "}
                        <NavLink to={item.url}>See Medications</NavLink>{" "}
                      </div>
                    </SwiperSlide>
                  </div>
                );
              })}
            </Swiper>
          </div>
          <button className="affordablebutton">View all conditions </button>
        </div>
      </div>

      <div className="offercontainer">
        <div className="offercontenthead">
          <h2>
            We offer safe, affordable medicines at the lowest possible price{" "}
          </h2>
          <div className="offercontentcheck">
            {Data.OfferData.map((item) => {
              return (
                <div key={item.id} className="offercontentdata">
                  <img src={item.url} alt="logo" />
                  <h2> {item.title} </h2>
                </div>
              );
            })}
          </div>
          <button className="offercontentbutton">Our Mission</button>
        </div>
        <div className="offercontentimage">
          <img src={OfferImage} alt="logo" />
        </div>
      </div>

      <div className="presscontainer">
        <div className="presscontent">
          <h2>In the press</h2>
          <div className="swipercontainer">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
            >
              {Data.PressData.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <div className="pressswiperdata">
                      <img src={item.url} alt="logo" />
                      <h2> {item.title} </h2>
                      <p> {item.description} </p>
                      <NavLink to="/"> {item.link} </NavLink>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>

      <div className="faqcontainer">
        <div className="faqcontent">
          <h2>FAQS</h2>
          <p>We've got answers</p>
          <div className="faqdata" onClick={handleClick}>
            {Data.FAQData.map((item) => {
              return (
                <span key={item.id}>
                  {" "}
                  <h2
                    key={item.id}
                    id={item.unique}
                    style={{
                      borderBottom:
                        isOpen === item.unique
                          ? "none"
                          : "1px solid rgba(175, 172, 172, 0.8)",
                    }}
                  >
                    {" "}
                    {item.title}{" "}
                    <FontAwesomeIcon
                      className="faqicon"
                      icon={
                        isOpen === item.unique ? item.Upicon : item.downicon
                      }
                    />{" "}
                  </h2>{" "}
                  {isOpen === item.unique && (
                    <p className="faqdescription">{item.description}</p>
                  )}
                </span>
              );
            })}
          </div>
          <button>View all FAQs</button>
        </div>
      </div>
      <div className="corporatecontainer">
        <p>
          looking for our corporate site.<NavLink to="">click here</NavLink>
        </p>
      </div>
    </div>
  );
}
