function uuidv4() {
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
            (
                  c ^
                  (crypto.getRandomValues(new Uint8Array(1))[0] &
                        (15 >> (c / 4)))
            ).toString(16)
      );
}

const areasFromDb = [
      {
            code: "UA-63",
            fill: "#1c6cb5",
            value: 510000,
      },
      {
            code: "UA-14",
            fill: "#1c6cb5",
            value: 510000,
      },
      {
            code: "UA-74",
            fill: "#1c6cb5",
            value: 510000,
      },
      {
            code: "UA-61",
            fill: "#1c6cb5",
            value: 510000,
      },

      // light 500
      {
            code: "UA-30",
            fill: "#478bca",
            value: 200000,
      },
      {
            code: "UA-32",
            fill: "#478bca",
            value: 200000,
      },
      {
            code: "UA-09",
            fill: "#478bca",
            value: 200000,
      },
      {
            code: "UA-12",
            fill: "#478bca",
            value: 200000,
      },
      {
            code: "UA-23",
            fill: "#478bca",
            value: 200000,
      },
      {
            code: "UA-59",
            fill: "#478bca",
            value: 200000,
      },
      {
            code: "UA-65",
            fill: "#478bca",
            value: 200000,
      },

      // light 300
      {
            code: "UA-51",
            fill: "#85b4e0",
            value: 30000,
      },
      {
            code: "UA-53",
            fill: "#85b4e0",
            value: 30000,
      },
      {
            code: "UA-35",
            fill: "#85b4e0",
            value: 30000,
      },
      {
            code: "UA-05",
            fill: "#85b4e0",
            value: 30000,
      },
      {
            code: "UA-46",
            fill: "#85b4e0",
            value: 30000,
      },
      {
            code: "UA-21",
            fill: "#85b4e0",
            value: 30000,
      },
      {
            code: "UA-26",
            fill: "#85b4e0",
            value: 30000,
      },
      {
            code: "UA-77",
            fill: "#85b4e0",
            value: 30000,
      },

      // light 200
      {
            code: "UA-07",
            fill: "#d6e7f7",
            value: 10000,
      },
      {
            code: "UA-56",
            fill: "#d6e7f7",
            value: 10000,
      },
      {
            code: "UA-18",
            fill: "#d6e7f7",
            value: 10000,
      },
      {
            code: "UA-68",
            fill: "#d6e7f7",
            value: 10000,
      },
      {
            code: "UA-48",
            fill: "#d6e7f7",
            value: 10000,
      },
      {
            code: "UA-71",
            fill: "#d6e7f7",
            value: 10000,
      },

      // Grey
      {
            code: "UA-40",
            fill: "#e7e7e9",
      },
      {
            code: "UA-43",
            fill: "#e7e7e9",
      },
];

const plotsFromDb = [
      {
            name: uuidv4(),
            title: "Luhans'k",
            value: 2000000,
            lat: 49.26705,
            lon: 40.31706,
      },
      {
            name: uuidv4(),
            title: "Donets'k",
            value: 12000000,
            lat: 48.223,
            lon: 38.91224,
      },
      {
            name: uuidv4(),
            title: "Kharkiv",
            value: 8100000,
            lat: 49.5005,
            lon: 38.00006,
      },
      {
            name: uuidv4(),
            title: "Sumy",
            value: 3600000,
            lat: 50.8005,
            lon: 35.00006,
      },
      {
            name: uuidv4(),
            title: "Zaporizhzhya",
            value: 3600000,
            lat: 47.823,
            lon: 36.81224,
      },
      {
            name: uuidv4(),
            title: "Dnipropetrovs'k",
            value: 2700000,
            lat: 48.523,
            lon: 35.81224,
      },
      {
            name: uuidv4(),
            title: "Poltava",
            value: 4100000,
            lat: 49.523,
            lon: 34.81224,
      },
      {
            name: uuidv4(),
            title: "Chernihiv",
            value: 8600000,
            lat: 50.9805,
            lon: 33.00006,
      },
      {
            name: uuidv4(),
            title: "Kiev",
            value: 3400000,
            lat: 49.8005,
            lon: 31.00006,
      },
      {
            name: uuidv4(),
            title: "Zhytomyr",
            value: 3600000,
            lat: 50.2005,
            lon: 29.00006,
      },
      {
            name: uuidv4(),
            title: "Rivne",
            value: 3600000,
            lat: 50.5005,
            lon: 27.00006,
      },
      {
            name: uuidv4(),
            title: "Volyn",
            value: 900000,
            lat: 50.8005,
            lon: 25.00006,
      },
      {
            name: uuidv4(),
            title: "L'viv",
            value: 3600000,
            lat: 49.8005,
            lon: 24.00006,
      },
      {
            name: uuidv4(),
            title: "Ternopil'",
            value: 3600000,
            lat: 49.5005,
            lon: 26.00006,
      },
      {
            name: uuidv4(),
            title: "Khmel'nyts'kyy",
            value: 3600000,
            lat: 49.5005,
            lon: 27.30006,
      },
      {
            name: uuidv4(),
            title: "Vinnytsya",
            value: 3600000,
            lat: 48.8005,
            lon: 28.80006,
      },
      {
            name: uuidv4(),
            title: "Cherkasy",
            value: 1000000,
            lat: 49.1005,
            lon: 31.90006,
      },
      {
            name: uuidv4(),
            title: "Kirovohrad",
            value: 1200000,
            lat: 48.5005,
            lon: 32.90006,
      },
      {
            name: uuidv4(),
            title: "Mykolayiv",
            value: 3600000,
            lat: 47.5005,
            lon: 32.90006,
      },
      {
            name: uuidv4(),
            title: "Kherson",
            value: 3600000,
            lat: 47.2005,
            lon: 34.90006,
      },
      {
            name: uuidv4(),
            title: "Odessa",
            value: 3600000,
            lat: 47.5005,
            lon: 30.90006,
      },
      {
            name: uuidv4(),
            title: "Transcarpathia",
            value: 3600000,
            lat: 48.5005,
            lon: 23.30006,
      },
      {
            name: uuidv4(),
            title: "Ivano-Frankivs'k",
            value: 3600000,
            lat: 48.8005,
            lon: 24.80006,
      },
      {
            name: uuidv4(),
            title: "Chernivtsi",
            value: 3600000,
            lat: 48.4005,
            lon: 26.30006,
      },
];

const mappedAreas = areasFromDb.reduce(function (r, e) {
      r[e.code] = {
            value: e.value,
            attrs: {
                  fill: e.fill,
            },
      };
      return r;
}, {});

const mappedPlots = plotsFromDb.reduce(function (r, e) {
      r[e.name] = {
            latitude: e.lat,
            longitude: e.lon,
            value: e.value,
            tooltip: {
                  content: `${e.title}<br />Population: ${numeral(e.value)
                        .format("0.0a")
                        .toUpperCase()}`,
            },
            text: {
                  content: `${numeral(e.value).format("0.0a").toUpperCase()}`,
                  position: "center",
                  attrs: {
                        "font-size": 11,
                        fill: "#ffffff",
                        stroke: "#000000",
                        "stroke-width": 0.2,
                        opacity: 0.8,
                  },
            },
      };
      return r;
}, {});
