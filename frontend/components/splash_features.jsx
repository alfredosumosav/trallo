import React from "react";
import { Link } from "react-router-dom";

const SplashFeatures = props => {
  return (
    <div id="features" className="splash-container features-container">
      <div className="splash-col">
        <div className="splash-row">
          <div id="f1" className="splash-col text-center">
            <h3>Trallo your way</h3>
            <p>
              Use Trallo the way your team works best. We’ve got the flexibility
              & features to fit any team’s style.
            </p>
          </div>
        </div>
        <div className="splash-row">
          <div className="splash-col splash-card">
            <div className="img">
              <img
                src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/0cad30a99820b0d840a5b48635d00b6e/updated-layouts-collab.png"
                width="270"
                alt=""
              ></img>
            </div>
            <h5>The Team Playbook</h5>
            <p className="small">
              It’s easy to get your team up and running with Trallo. We’ve
              collected all of the boards and tools you need to succeed in one
              handy resource.
            </p>
            <p>
              <Link className="btn btn-secondary" to="/signup">
                Make&nbsp;A&nbsp;Game&nbsp;Plan
              </Link>
            </p>
          </div>
          <div className="splash-col splash-card">
            <div className="img">
              <img
                src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/15e77c8347135120a438d17e38195e44/updated-layouts-platform.png"
                width="270"
                alt=""
              ></img>
            </div>
            <h5>A Productivity Plataform</h5>
            <p className="small">
              Integrate the apps your team already uses directly into your
              workflow. Power-Ups turn Trallo boards into living applications to
              meet your team's unique business needs.
            </p>
            <p>
              <Link className="btn btn-secondary" to="/signup">
                Power-Up&nbsp;Your&nbsp;Workflow
              </Link>
            </p>
          </div>
          <div className="splash-col splash-card">
            <div className="img">
              <img
                src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/6eaaf5e37ab67a8ed6cd7764660513b9/updated-layouts-sync.png"
                width="270"
                alt=""
              ></img>
            </div>
            <h5>Always In Sync</h5>
            <p className="small">
              No matter where you are, Trallo stays in sync across all of your
              devices. Collaborate with your team anywhere, from sitting on the
              bus to sitting on the beach.
            </p>
            <p className="app-store">
              <img
                src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/eebf313cb223112b503b7322173b013c/btn-appstore-black.png"
                className="img-fluid"
                alt="Available on the App Store"
              ></img>
              <img
                src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/bcde9868a665af4ab4efe460c46fbc7b/btn-playstore-black.png"
                className="img-fluid"
                alt="Android App on Google Play"
              ></img>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashFeatures;
