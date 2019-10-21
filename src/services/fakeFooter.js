const footer = [
  {
    _id: "5c0400d99f3e005410ea452e",
    upper: {
      sections: [
        {
          title: "prąd",
          links: [
            { title: "Uprawnienia i certyfikaty", url: "#" },
            { title: "Referencje", url: "#" },
            { title: "Doświadczenie", url: "#" },
            { title: "Wspierane marki kotłów gazowych", url: "#" }
          ]
        },
        {
          title: "ogrzewanie",
          links: [
            { title: "Instalacje gazowe", url: "#" },
            { title: "Montaż klimatyzacji", url: "#" },
            { title: "Przegląd kotłów", url: "#" },
            { title: "Serwis", url: "#" },
            { title: "Części zamienne", url: "#" }
          ]
        },
        {
          title: "o nas",
          links: [
            { title: "Nasze ostatnie realizacje", url: "#" },
            { title: "Artykuły", url: "#" },
            { title: "Wycena usługi", url: "#" },
            { title: "Współpraca", url: "#" }
          ]
        }
      ]
    },
    lower: {
      links: [
        { title: "Mapa Strony", url: "#" },
        { title: "Kontakt", url: "#" },
        { title: "Polityka prywatności", url: "#" }
      ]
    }
  }
];

export function getUpperFooter() {
  return footer[0].upper.sections;
}

export function getLowerFooter() {
  return footer[0].lower.links;
}
