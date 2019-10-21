const pages = [
  {
    _id: "5d5d9b4ac76a7a4c57f33713",
    page: "home",
    layout: {
      lg: [
        {
          i: "a",
          x: 0,
          y: 0,
          w: 18,
          h: 6,
          static: true
        },
        {
          i: "b",
          x: 0,
          y: 6,
          w: 6,
          h: 6,
          static: true
        },
        {
          i: "c",
          x: 6,
          y: 6,
          w: 6,
          h: 6,
          static: true
        },
        {
          i: "d",
          x: 12,
          y: 6,
          w: 6,
          h: 12,
          static: true
        },
        {
          i: "e",
          x: 0,
          y: 12,
          w: 12,
          h: 6,
          static: true
        },
        {
          i: "g",
          x: 12,
          y: 18,
          w: 6,
          h: 8,
          static: true
        },
        {
          i: "f",
          x: 12,
          y: 26,
          w: 6,
          h: 4,
          static: true
        },
        {
          i: "articles",
          x: 0,
          y: 18,
          w: 12,
          h: 12,
          static: true
        },
        {
          i: "map",
          x: 0,
          y: 30,
          w: 18,
          h: 8,
          static: true
        }
      ],
      md: [
        {
          i: "a",
          x: 0,
          y: 0,
          w: 12,
          h: 6,
          static: true
        },
        {
          i: "b",
          x: 0,
          y: 6,
          w: 6,
          h: 6,
          static: true
        },
        {
          i: "d",
          x: 6,
          y: 6,
          w: 6,
          h: 12,
          static: true
        },
        {
          i: "c",
          x: 0,
          y: 12,
          w: 6,
          h: 6,
          static: true
        },
        {
          i: "e",
          x: 0,
          y: 18,
          w: 12,
          h: 6,
          static: true
        },
        {
          i: "g",
          x: 0,
          y: 24,
          w: 6,
          h: 6,
          maxH: 6,
          static: true
        },
        {
          i: "f",
          x: 6,
          y: 24,
          w: 6,
          h: 6,
          maxH: 6,
          static: true
        },
        {
          i: "articles",
          x: 0,
          y: 30,
          w: 12,
          h: 12,
          static: true
        },
        {
          i: "map",
          x: 0,
          y: 42,
          w: 12,
          h: 8,
          static: true
        }
      ],
      sm: [
        {
          i: "a",
          x: 0,
          y: 0,
          w: 6,
          h: 6,
          static: true
        },
        {
          i: "b",
          x: 0,
          y: 6,
          w: 6,
          h: 4,
          static: true
        },
        {
          i: "d",
          x: 0,
          y: 18,
          w: 6,
          h: 12,
          static: true
        },
        {
          i: "c",
          x: 0,
          y: 10,
          w: 6,
          h: 4,
          static: true
        },
        {
          i: "e",
          x: 0,
          y: 14,
          w: 6,
          h: 4,
          static: true
        },
        {
          i: "g",
          x: 0,
          y: 30,
          w: 6,
          h: 8,
          static: true
        },
        {
          i: "f",
          x: 0,
          y: 38,
          w: 6,
          h: 5,
          maxH: 6,
          static: true
        },
        {
          i: "articles",
          x: 0,
          y: 43,
          w: 6,
          h: 19,
          static: true
        },
        {
          i: "map",
          x: 0,
          y: 62,
          w: 6,
          h: 8,
          static: true
        }
      ],
      cols: {
        lg: 18,
        md: 12,
        sm: 6
      },
      breakpoints: {
        lg: 992,
        md: 600,
        sm: 350
      },
      rowHeight: 36.6
    },
    tabs: [
      {
        id: "a",
        title: "Przygotuj się na sezon grzewczy!",
        desc:
          "Nadeszła jesień i co za tym nadchodzi sezon grzewczy. Czas pomyśleć nad<b>przeglądem technicznym instalacji grzewczej</b> i solidnie ją przygotować na kilka miesięcy <b>ciężkiej pracy</b>.",
        background: {
          images: [
            {
              srcSet: "/images/piec276.jpg",
              media: "(min-width: 601px)"
            },
            {
              srcSet: "/images/piec190.jpg"
            }
          ],
          alt: "test"
        }
      },
      {
        id: "c",
        title: "Klimatyzacja",
        desc:
          "Kompleksowe usługi związane z montażem oraz serwisem systemów klimatyzacji i wentylacji.",
        background: {
          images: [
            {
              srcSet: "/images/piec276.jpg",
              media: "(min-width: 601px)"
            },
            {
              srcSet: "/images/piec190.jpg"
            }
          ],
          alt: "test"
        }
      },
      {
        id: "b",
        title: "Instalacje grzewcze",
        desc: "Szeroka oferta w zakresie usług techniki grzewczej",
        background: {
          images: [
            {
              srcSet: "/images/heating400.jpg",
              media: "(max-width: 400px)"
            },
            {
              srcSet: "/images/heating617.jpg",
              media: "(max-width: 617px)"
            },
            {
              srcSet: "/images/heating1009.jpg",
              media: "(max-width: 1009px)"
            },
            {
              srcSet: "/images/heating.jpg"
            }
          ],
          alt: "test"
        }
      },
      {
        id: "e",
        title: "Elektryka",
        desc:
          "Nasza działalność to również instalacje w obiektach mieszkalnych, przemysłowych oraz użyteczności publicznej.",
        background: {
          images: [
            {
              srcSet: "/images/heating400.jpg",
              media: "(max-width: 400px)"
            },
            {
              srcSet: "/images/heating617.jpg",
              media: "(max-width: 617px)"
            },
            {
              srcSet: "/images/heating1009.jpg",
              media: "(max-width: 1009px)"
            },
            {
              srcSet: "/images/heating.jpg"
            }
          ],
          alt: "test"
        }
      },
      {
        id: "d",
        title: "Odnośniki",
        links: [
          {
            desc: "Uprawnienia i certyfikaty",
            endpoint: "#"
          },
          {
            desc: "Referencje",
            endpoint: "#"
          },
          {
            desc: "Doświadczenie",
            endpoint: "#"
          },
          {
            desc: "Wspierane marki kotłów gazowych",
            endpoint: "#"
          },
          {
            desc: "Instalacje gazowe",
            endpoint: "#"
          },
          {
            desc: "Montaż klimatyzacji",
            endpoint: "#"
          },
          {
            desc: "Przegląd kotłów",
            endpoint: "#"
          },
          {
            desc: "Serwis",
            endpoint: "#"
          },
          {
            desc: "Części zamienne",
            endpoint: "#"
          },
          {
            desc: "Nasze ostatnie realizacje",
            endpoint: "#"
          },
          {
            desc: "Artykuły",
            endpoint: "#"
          },
          {
            desc: "Wycena usługi",
            endpoint: "#"
          },
          {
            desc: "Współpraca",
            endpoint: "#"
          }
        ]
      },
      {
        id: "g",
        title: "Ostatnie realizacje",
        desc:
          "Nasza działalność to również instalacje w obiektach mieszkalnych, przemysłowych oraz użyteczności publicznej.",
        background: {
          images: [
            {
              srcSet: "/images/heating400.jpg",
              media: "(max-width: 400px)"
            },
            {
              srcSet: "/images/heating617.jpg",
              media: "(max-width: 617px)"
            },
            {
              srcSet: "/images/heating1009.jpg",
              media: "(max-width: 1009px)"
            },
            {
              srcSet: "/images/heating.jpg"
            }
          ],
          alt: "test"
        }
      },
      {
        id: "articles",
        title: "Artykuły",
        desc:
          "Nasza działalność to również instalacje w obiektach mieszkalnych, przemysłowych oraz użyteczności publicznej.",
        background: {
          images: [
            {
              srcSet: "/images/heating400.jpg",
              media: "(max-width: 400px)"
            },
            {
              srcSet: "/images/heating617.jpg",
              media: "(max-width: 617px)"
            },
            {
              srcSet: "/images/heating1009.jpg",
              media: "(max-width: 1009px)"
            },
            {
              srcSet: "/images/heating.jpg"
            }
          ],
          alt: "test"
        }
      },
      {
        id: "f",
        title: "Kontakt"
      },
      {
        id: "mapa",
        title: "Obszar działalności *",
        desc: "* - dla klientów indywidualnych",
        background: {
          images: [
            {
              srcSet: "/images/map690.jpg",
              media: "(max-width: 690px)"
            },
            {
              srcSet: "/images/map500.jpg",
              media: "(max-width: 500px)"
            },
            {
              srcSet: "/images/map.jpg"
            }
          ],
          alt: "test"
        }
      }
    ]
  }
];

export function getPage(endpoint) {
  return pages.find(p => p.page === endpoint) || null;
}

export function getLayout(endpoint) {
  const page = getPage(endpoint);
  const { cols, breakpoints, rowHeight, ...layout } = page.layout;
  return layout;
}

export function getCols(endpoint) {
  const page = getPage(endpoint);
  return page.layout.cols;
}

export function getBreakpoints(endpoint) {
  const page = getPage(endpoint);
  return page.layout.breakpoints;
}

export function getRowHeight(endpoint) {
  const page = getPage(endpoint);
  return page.layout.rowHeight;
}

export function getImages(endpoint, tab) {
  const page = getPage(endpoint);
  try {
    const item = page.tabs.find(t => t.id === tab);
    const { images } = item.background;
    for (const img of images) {
      Object.keys(img).map((key, index) => {
        return (img[key] = process.env.PUBLIC_URL + img[key]);
      });
    }
    return images;
  } catch (e) {
    //console.log(tab, "is not defined in img source")
    return [];
  }
}

export function getImageInfo(endpoint, tab) {
  const page = getPage(endpoint);
  try {
    const item = page.tabs.find(t => t.id === tab);
    return item.background.alt;
  } catch (e) {
    //console.log(tab, "has no alt");
    return "Image";
  }
}

export function getTabInfo(endpoint, tab) {
  const page = getPage(endpoint);
  if (page !== null) var item = page.tabs.find(t => t.id === tab);
  return item || null;
}
