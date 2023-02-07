import React from 'react';
import partners from './partners.json';
import './Partners.scss';

const LANG = {
  "platinum": "Platinum Partners",
  "gold": "Gold Partners",
  "silver": "Silver Partners",
  "bronze": "Bronze Partners"
}

const Partners = () => (
  <React.Fragment>
    <section id="partnersTitle">
      <div className="container">
        <h1>Partners</h1>
        <p>Are you interested in shaping cybersecurity specialists of the future? Get in touch with us and become a Crackchester partner.</p>
      </div>
    </section>
    <section id="partners">
      <div className="container">
        { Object.keys(partners).map((category, index) =>
            <div key={index} className="partner-category">
              <h1>{LANG[category]}</h1>
              <ul>
                { partners[category].map((partner, index) =>
                  <li key={index} className="partner-item">
                    <div className="partner-flex">
                      <h2>{partner.name}</h2>
                      <div className="partner-inline-logo">
                        <a href={partner.url} target={"_blank"} rel={"noreferrer"}>
                          <img src={`${process.env.PUBLIC_URL}/assets/partners/${partner.img}`} alt={partner.name} />
                        </a>
                      </div>
                    </div>
                    <div className="partner-flex">
                      <p>{partner.description}</p>
                      <div className="partner-img-container">
                        <a href={partner.url} target={"_blank"} rel={"noreferrer"}>
                          <img src={`${process.env.PUBLIC_URL}/assets/partners/${partner.img}`} alt={partner.name} />
                        </a>
                      </div>
                    </div>
                  </li>
                ) }
              </ul>
            </div>
        ) }
      </div>
    </section>
  </React.Fragment>
)

export default Partners;