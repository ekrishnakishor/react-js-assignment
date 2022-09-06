import React from "react";
import "./survey.css";

export default function Survey2() {
  return (
    <section id="survey-bg">
    <div className="survey">

      <div className="header"></div>
      <div className="cancellationSurvey">
        <div>&lt;</div>
        <h2>Cancellation Survey</h2>
      </div>
      <hr />
      <div className="content-card">
        <h2>We're sad to see you go ...</h2>
        <p>Can you please tell us why you want to cancel your membership?</p>
        
        <div className="card-inputs">
        <div>
          <input type="radio" />
          <h4>I didn't realize it was a recurring membership</h4>
        </div>
          <div>
            <input type="radio" />
            <h4>Found a better solution</h4>
          </div>
          <div>
            <input type="radio" />
            <h4>It's too expensive</h4>
          </div>
          <div>
            <input type="radio" />
            <h4>Bugs, things not working properly</h4>
          </div>
          <div>
            <input type="radio" />
            <h4>I just want to pay for a single plugin</h4>
          </div>
          <div>
            <input type="radio" />
            <h4>Not using WordPress anymore</h4>
          </div>
          <div>
            <input type="radio" />
            <h4>Other</h4>
          </div>
        </div>
        <div className="card-warning">
            <div className="warning-icon"><p>!</p></div>
            <p>Are you absolutely sure you want to cancel? If you do you'll lose access to so many cool things. And you'll lose the chance to stay on this plan at the same cost ongoing. (regardless of future price increases). </p>
        </div>
      </div>
    </div>
    </section>
  );
}
