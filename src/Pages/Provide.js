//React Family
import React from "react";
// External Familiy
import PatientData from "../Data/ProviderData";
//Image Family
import DownloadImage from "../image/providers/download.png";
import LadyImage from "../image/providers/lady.png";

// Css Family
import "./Provide.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Provide() {
  const [isOpen, setIsOpen] = React.useState(false);

  function handleOpen(event) {
    const clickedId = event.target.id;
    setIsOpen((prev) => (prev === clickedId ? !prev : clickedId));
  }

  return (
    <div className="patientContainer">
      <div className="patientContentHeader">
        <h2>For Providers</h2>
      </div>
      {/* Patient Awereness starts */}
      <main className="patientAwareness">
        <h2 className="patientAwarenessTitle">
          Talk to your patients about Mark Cuban cost plus drug company
        </h2>
        <p>
          Our pharmacy cuts out the middlemen to offer hundreds of common
          generic medications at wholesale prices.
        </p>
        <div className="patientAwarenessContent">
          {PatientData.PatientData.map((item) => {
            return (
              <div key={item.id} className="patientAwarenessData">
                <img src={item.url} alt="logo" />
                <h2> {item.title} </h2>
              </div>
            );
          })}
        </div>
      </main>
      {/* Patient Awereness ends */}

      {/* How to prescribe starts */}
      <div className="prescribeContainer">
        <h2 className="prescribeContentTitle">How to prescribe</h2>
        <div className="prescrbecontent">
          <img src={DownloadImage} alt="logo" />
          <p className="prescribeheadpara">
            Be sure to include your <span>patients email addres</span>so we can
            notify them when we receive their prescription{" "}
          </p>
        </div>
        <div className="prescribecontentbottom">
          <h2>E-prescribe to Mark Cuban cost plus drug company</h2>
          <i>"you must include your patients email address"</i>
          <strong>NCPDP ID#3689568</strong>
          <p>you can also use our prescription request form:</p>
          <button>Download PDF</button>
        </div>
      </div>
      {/* How to prescribe ends */}
      {/* Patient Thanks Starts */}
      <div className="patientsThanks">
        <h2>Your patients will thanks you</h2>
        <div className="patientsContent">
          {PatientData.PatientsThanksData.map((item) => {
            return (
              <div key={item.id} className="patientsThanksData">
                <FontAwesomeIcon
                  icon={item.url}
                  className="patientsThanksIcon"
                />
                <p> {item.title} </p>
              </div>
            );
          })}
        </div>
      </div>
      {/* Patients Thanks Ends */}
      {/* Parterns Start */}
      <div className="partnerContainer">
        <img src={LadyImage} alt="logo" />
        <div className="partnerContentBottom">
          <h2>Our trusted partner</h2>
          <p>
            Our trusted fulfillement partner.truepill provide best in class
            pharmacy services.TruePill is a digital online platform that deliver
            diagnostics telehealth and pharmacy infrasturce to power consumer
            health experience.For cost plus drug Co patients,their NationWide
            pharmacy infrastructure ensure your medications is safe and
            delivered to your doorstepon time.
          </p>
        </div>
      </div>
      {/* Partern Ends */}
      <div className="faqContainer">
        <h1>FAQS</h1>
        <h4>We've got answers</h4>
        <div className="faqDataContainer">
          {PatientData.FAQData.map((item) => {
            return (
              <div className="faqContent" key={item.id} onClick={handleOpen}>
                <h2 key={item.id} id={item.unique}>
                  {item.title}{" "}
                  <FontAwesomeIcon
                    icon={isOpen === item.unique ? item.upicon : item.downicon}
                    className="faqIcon"
                  />
                </h2>

                {isOpen === item.unique && (
                  <p className="faqDescription"> {item.description} </p>
                )}
              </div>
            );
          })}
        </div>
        <button>View all FAQS</button>
      </div>
    </div>
  );
}
