import React from "react";
import "./Offer.css";
import OfferImg from "../assets/Group.svg";

function Offer() {
  return (
    <>
      <div className="out">
        <p>x</p>
      </div>
      <div className="offer-box">
        <img src={OfferImg} alt="" />
        <div className="offer-container">
          <h1>
            Before You Go... <br />
            Would 50% Off For 6 Months Help?
          </h1>
          <p>
            We know things REALLY suck in the world right now - and many
            businesses and freelancers are struggling to stay afloat during this
            COVID-19 crisis.
          </p>
          <span>
            <p>
              So if you could use the extra cushion, grab 50% off for 6 months.
            </p>
          </span>
          <p>We hope you’re staying safe and healthy!</p>
          <div className="offer-button">
            <button type="submit">50% OFF For 6 Months</button>
            <p>No, thanks! I'll cancel</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Offer;
