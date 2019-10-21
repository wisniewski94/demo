import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import ReCAPTCHA from "react-google-recaptcha";
class ContactForm extends Form {
  state = {
    data: {
      temat: "",
      tematy: "",
      temat2: "",
      tresc: "",
      email: "",
      zgoda: ""
    },
    disabled: { temat: false, tematy: false },
    nand: ["temat", "tematy", "temat2"],
    errors: {}
  };

  config = {
    tematy: Joi.string()
      .empty("")
      .label("error"),
    temat: Joi.string().empty(""),
    temat2: Joi.string().empty(""),
    tresc: Joi.string()
      .empty("")
      .required(),
    email: Joi.string()
      .email({ minDomainAtoms: 2 })
      .required(),
    zgoda: Joi.any()
  };

  schema = Joi.object(this.config).xor("temat", "tematy", "temat2");

  onMouseOver(event) {
    super.onMouseOver(event);
  }

  doSubmit = () => {
    const recaptchaValue = this.state.recaptchaRef.current.getValue();
    alert(recaptchaValue);
    this.props.onSubmit(recaptchaValue);
  };

  handler = () => {
    alert("ASD");
  };

  componentDidMount() {
    this.setState({ recaptchaRef: React.createRef() });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderSelectInput(
          "tematy",
          "Czego dotyczy Twoja wiadomość?",
          "Wybierz temat, który najlepiej opisuje treść Twojej wiadomości:",
          [{ _id: "asd", name: "Volvo" }, { _id: "asdd", name: "BMW" }]
        )}
        {this.renderInput(
          "temat",
          "Temat wiadomości",
          "Lub podaj temat wiadomości. Temat powinien być jak najkrótszy."
        )}
        {this.renderInput(
          "temat2",
          "Temat wiadomości testowy",
          "Lub podaj temat testowy wiadomości. Temat powinien być jak najkrótszy."
        )}
        {this.renderTextArea(
          "tresc",
          "Treść wiadomości",
          "Podaj jak najwięcej szczegółów - dzięki temu będziemy w stanie udzielić Państwu lepszej odpowiedzi."
        )}
        {this.renderDropZone(
          "Upuść tutaj pliki lub załącz je naciskając tutaj. Max. 4 pliki do 3 MB w formacie .jpg, .png lub .bmp."
        )}
        {this.renderInput(
          "email",
          "Adres e-mail do kontaktu",
          "Na podany adres e-mail wyślemy potwierdzenie nadania wiadomości oraz odpowiedź jak najszybciej jak jest to możliwe."
        )}
        {this.renderCheckbox(
          "zgoda",
          "Wyrażam zgodę na przetwarzanie moich danych osobowych (imię, nazwisko oraz adres poczty elektronicznej). Dane te, zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE, są udostępnione dobrowolnie w celu realizacji zapytania przesłanego formularzem kontaktowym. Jestem świadomy przysługujących mi praw związanych z dostępem, aktualizacją oraz usuwaniem moich danych osobowych przekazanych w tym formularzu. Administratorem danych jest mająca siedzibę w woj. opolskie."
        )}
        <ReCAPTCHA
          ref={this.state.recaptchaRef}
          sitekey="6Lfm0hoTAAAAADui10wEIN1T_mwG8s7MCfmqQIeo"
        />
        {this.renderButton("Wyślij")}
      </form>
    );
  }
}

export default ContactForm;
