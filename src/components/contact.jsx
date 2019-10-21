import React, { Component } from "react";
import Tab from "./common/tab";
import "../styles/contact.sass";
import {
  getContactEmail,
  getOpeningHours,
  getContactStreet,
  getContactCity,
  getCompanyName
} from "../services/fakeContact";

import ContactForm from "./contactForm";
class Contact extends Component {
  state = {};

  render() {
    return (
      <div className="layout contact">
        <Tab>
          <div className="wrapper">
            <h2>SKONTAKTUJ SIĘ Z NAMI</h2>
          </div>
          <div className="wrapper">
            <p>
              Zachęcamy do skorzystania z poniższego{" "}
              <b>formularza kontaktowego</b> lub wysłanie maila na adres{" "}
              <a href="#">{getContactEmail()}</a> Ze względu na charakter naszej
              działalności jakim jest praca w terenie często niedostępnym dla
              sieci komórkowych, jest to najlepszy sposób kontaktu. Prosimy
              kontaktować się telefonicznie w godzinach naszej pracy.
            </p>
          </div>
          <div className="flex">
            <div className="box">
              <b>Adres do korespondencji:</b>
              <address>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <span>{getCompanyName()}</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>{getContactStreet()}</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>{getContactCity()}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </address>
            </div>
            <div className="box">
              <b>Godziny pracy:</b>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <span>Pon. - pt.:</span>
                    </td>
                    <td>
                      <span>
                        &nbsp;{" "}
                        {getOpeningHours()["mon-fri"].open +
                          " - " +
                          getOpeningHours()["mon-fri"].close}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span>Sobota:</span>
                    </td>
                    <td>
                      <span>
                        &nbsp;{" "}
                        {getOpeningHours().sat.open +
                          " - " +
                          getOpeningHours().sat.close}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="box">
              <b style={{ marginLeft: "5px" }}>Przydatne informacje:</b>
              <address>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <a href="#">Polityka prywatności</a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#">O firmie (KRS, NIP, REGON)</a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#">Historia</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </address>
            </div>
          </div>
        </Tab>
        <Tab style={{ marginTop: "16px" }}>
          <div className="wrapper">
            <h2>FORMULARZ KONTAKTOWY</h2>
          </div>
          <div className="wrapper form">
            <ContactForm />
          </div>
        </Tab>
      </div>
    );
  }
}

export default Contact;
