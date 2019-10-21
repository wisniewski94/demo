const contact = [
  {
    _id: "5d5d9b4ac76a7a4c57f33713",
    email: "biuro@tisan.com.pl",
    phone: "+48 602 622 115",
    street: "ul. Ligonia 8/5",
    city: "48-300 Nysa, Poland",
    company: "TISAN Krzysztof Wiśniewski",
    hours: {
      "mon-fri": {
        open: "08:00",
        close: "16:00"
      },
      sat: {
        open: "09:00",
        close: "17:00"
      }
    }
  }
];

export function getContactEmail() {
  return contact[0].email;
}

export function getContactPhone() {
  return contact[0].phone;
}

export function getOpeningHours() {
  return contact[0].hours;
}

export function getContactStreet() {
  return contact[0].street;
}

export function getContactCity() {
  return contact[0].city;
}

export function getCompanyName() {
  return contact[0].company;
}
