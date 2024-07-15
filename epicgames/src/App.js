import close from "./assets/images/Close.svg";
import fortnite from "./assets/images/Fortnite.svg";
import inGameImage1 from "./assets/images/InGameImage1.svg";
import inGameImage2 from "./assets/images/InGameImage2.svg";
import inGameImage3 from "./assets/images/InGameImage3.svg";

import "./App.css";

function App() {
  return (
    // Main container
    <div className="content">
      {/* Close button at top right corner*/}
      <div className="content-justify-end">
        <img
          className="close-button"
          draggable="false"
          src={close}
          alt="Close"
        />
      </div>

      {/* Main Heading  */}
      <div className="content-centering">
        <div className="heading">
          Epic Games : An American Video Game And Software Developer And
          Publisher Based In Cary, North Carolina.
        </div>
      </div>

      {/* Fortnite image */}
      <div className="content-centering">
        <img
          className="fortnite-image"
          draggable="false"
          src={fortnite}
          alt="Fortnite"
        />
      </div>

      {/* About paragraph */}
      <div className="content-centering">
        <div className="about-text">
          Create, play, and battle with friends for free in Fortnite. Be the
          last player standing in Battle Royale and Zero Build, experience a
          concert or live event, or discover over a million creator made games,
          including racing, parkour, zombie survival, and more. Each Fortnite
          island has an individual age rating so you can find the one that's
          right for you and your friends. Find it all in Fortnite ... Drop In.
        </div>
      </div>

      {/* Website vist button link */}
      <div className="content-centering">
        <div
          className="visit-website-button content-centering"
          style={{ alignItems: "center" }}>
          Visit Website
        </div>
      </div>

      {/* In game images div */}
      <div className="content-centering-img">
        <div>
          <img
            className="in-game-images"
            draggable="false"
            src={inGameImage1}
            alt="In game Image1"
          />
          <div className="in-game-images-byline">
            <div className="in-game-images-text">
              Explore Large, Destructible Environments Where No Two Games Are
              Ever The Same.
            </div>
          </div>
        </div>
        <div>
          <img
            className="in-game-images"
            draggable="false"
            src={inGameImage2}
            alt="In game Image2"
          />
          <div className="in-game-images-byline">
            <div className="in-game-images-text">
              Team Up With Friends By Sprinting, Climbing And Smashing Your Way
              To Earn Your Victory Royale
            </div>
          </div>
        </div>
        <div>
          <img
            className="in-game-images"
            draggable="false"
            src={inGameImage3}
            alt="In game Image3"
          />
          <div className="in-game-images-byline">
            <div className="in-game-images-text">
              Discover Even More Ways To Play Across Thousands Of Creator-Made
              Game Genres
            </div>
          </div>
        </div>
      </div>

      {/* Contribution body */}
      <div className="content-centering">
        <div className="contribution-head">Our Contribution</div>
      </div>
      <div className="content-centering">
        <div className="contribution-body">
          Our core offering extends beyond mere profit generation; we emphasize
          the growth and active involvement of our user community. Collaborating
          with us represents an investment, rather than a mere expenditure. Our
          dedication to providing distinctive digital interactions guarantees
          unparalleled benefits for our clientele.
        </div>
      </div>

      {/* Engagements revenue and campaigns */}
      <div className="content-centering-img" style={{ marginTop: "107px" }}>
        <div className="analatics">
          <div className="analatics-head">5M</div>
          <div className="analatics-body">Daily User Engagements</div>
        </div>
        <div className="analatics">
          <div className="analatics-head">$500K</div>
          <div className="analatics-body">Revenue Surge for an Platform</div>
        </div>
        <div className="analatics">
          <div className="analatics-head">10X</div>
          <div className="analatics-body">
            ROAS on all our marketing campaigns
          </div>
        </div>
      </div>

      {/* Contact details */}
      <div className="content-centering">
        <div className="contact">
          <div className="contact-head">
            Interested In Delving Deeper Into The Project?
          </div>
          <div className="contact-body">
            <div className="analatics-body-width">
              If you'd like to explore further details about our initiatives or
              any of our affiliated brands, don't hesitate to connect. You can
              reach out to us via email at
              <span className="contact-body-bold-font"> hello@abc.com</span> or
              give us a call at
              <span className="contact-body-bold-font"> +91 480 20802730</span>.
            </div>
          </div>
          <div className="contact-button-responsiveness">
            <div className="contact-buttons content-centering-img">
              <div className="skype">Ring us on Skype</div>
              <div className="number">Contact Us</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer*/}
      <div className="content-centering">
        <div className="footer">
          © 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved
        </div>
      </div>

      {/* Main Container Closing */}
    </div>
  );
}

export default App;
