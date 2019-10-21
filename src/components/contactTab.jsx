import React from "react";
import "../styles/contactTab.sass";
import {
  getContactEmail,
  getContactPhone,
  getOpeningHours
} from "../services/fakeContact";

const ContactTab = () => {
  return (
    <div className="contactTab">
      <table>
        <tbody>
          <tr>
            <td>
              <b>Tel:</b>
            </td>
            <td>
              <a href="#" id="phone">
                {getContactPhone()}
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <b>E-mail:</b>
            </td>
            <td>
              <a href="#" id="email">
                {getContactEmail()}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <span>Jesteśmy dla Państwa dostępni telefonicznie w dni robocze:</span>
      <br />
      <br />
      <table>
        <tbody>
          <tr>
            <td>Pon. - pt.:</td>
            <td>
              &nbsp;{" "}
              {getOpeningHours()["mon-fri"].open +
                " - " +
                getOpeningHours()["mon-fri"].close}
            </td>
          </tr>
          <tr>
            <td>Sobota:</td>
            <td>
              &nbsp;{" "}
              {getOpeningHours().sat.open + " - " + getOpeningHours().sat.close}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ContactTab;
