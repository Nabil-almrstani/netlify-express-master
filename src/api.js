const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    Mercedes: {
      LogoLink: "",
      "Mercedes A-klasse Limousine": [
        {
          autoHersteller: "Mercedes",
          name: "Mercedes A-klasse Limousine",
          Ausstattungsvariante:
            "A 180 , A 180 d, A 200 d, A 200, A 220 d, A 220 4MATIC, A 250 e, A 250 4MATIC, AMG A 35 4MATIC",
          abPreis: 39.466,
          Rabatt: null,
          MotorleistungVon: 116,
          MotorleistungBis: 320,
          Kraftstoffart: ["Super", "Diesel", "Hybrid(Super)", "Super Plus"],
          "Konfig-link":
            "https://www.mercedes-benz.at/passengercars/mercedes-benz-cars/car-configurator.html/motorization/CCci/AT/de/A-KLASSE/LIMOUSINE",
          imgLink:
            "https://images.oneweb.mercedes-benz.com/iris/europe/AT/177184/803_053/iris.png?q=COSY-EU-100-1713d0VXq5SFqtyO67PobzIr3eWsrrCsdRRzwQZxkIZbMw3SGtGyStsd2sDcUfpOcXGEjnmJ0le4kOB2KBjbApvIRI5uO4xQC3iswkzN4obm7j06mhKVBbh%25vqGBIyLRaLmYaxHbJrH18j%25n8520R%256d9lo25DA4w0wOoZ1qgqyfyzda8CD7dB3AF6h0HJ&IMGT=W27&POV=BE040&BKGND=9&uni=m&imwidth=768",
          default: true,
        },
      ],
      "Mercedes A-klasse Kompaktlimousine": [
        {
          autoHersteller: "Mercedes",
          name: "Mercedes A-klasse Kompaktlimousine",
          Ausstattungsvariante:
            "A 180 , A 180 d, A 200 d, A 200, A 220 d, A 220 4MATIC, A 250 e, A 250 4MATIC, AMG A 35 4MATIC, AMG A 45 S 4MATIC+",
          abPreis: 38.08,
          Rabatt: null,
          MotorleistungVon: 116,
          MotorleistungBis: 421,
          Kraftstoffart: ["Super", "Diesel", "Hybrid(Super)", "Super Plus"],
          "Konfig-link":
            "https://www.mercedes-benz.at/passengercars/mercedes-benz-cars/car-configurator.html/motorization/CCci/AT/de/A-KLASSE/LIMOUSINE",
          imgLink:
            "https://images.oneweb.mercedes-benz.com/iris/europe/AT/177010/803_053/iris.png?q=COSY-EU-100-1713d0VXq5SFqtyO67PobzIr3eWsrrCsdRRzwQZxkIZbMw3SGtGyStsd2sDcUfpOcXGEjnmJ0le4kOB2KBjbApvIRI5uO4xQC3iswkzN4obm7j06mhKVBbh%25vqGBIyLRaLmYaxHbJrH18j%25n8520R%256d9lo25DAIJKwOoZ1qgqyfyzda8CD7dB3AF6h0HJ&IMGT=W27&POV=BE030&BKGND=9&uni=m&imwidth=768",
          default: true,
        },
      ],
      "Mercedes C-klasse Limousine": [
        {
          autoHersteller: "Mercedes",
          name: "Mercedes C-klasse Limousine",
          Ausstattungsvariante:
            "C 180, C 200 d, C 200, C 220 d, C 200 4MATIC, C 220 d 4MATIC, C 300 e, C 300, C 300 e 4MATIC, C 300 de, C 300 d, C 400 e 4MATIC, C 300 de 4MATIC, C 300 4MATIC, AMG C 43 4MATIC",
          abPreis: 51.801,
          Rabatt: null,
          MotorleistungVon: 183,
          MotorleistungBis: 422,
          Kraftstoffart: [
            "Super",
            "Diesel",
            "Hybrid(Super)",
            "Hybrid(Diesel)",
            "Super Plus",
          ],
          "Konfig-link":
            "https://www.mercedes-benz.at/passengercars/mercedes-benz-cars/car-configurator.html/motorization/CCci/AT/de/C-KLASSE/LIMOUSINE",
          imgLink:
            "https://images.oneweb.mercedes-benz.com/iris/europe/AT/177010/803_053/iris.png?q=COSY-EU-100-1713d0VXq5SFqtyO67PobzIr3eWsrrCsdRRzwQZxkIZbMw3SGtGyStsd2sDcUfpOcXGEjnmJ0le4kOB2KBjbApvIRI5uO4xQC3iswkzN4obm7j06mhKVBbh%25vqGBIyLRaLmYaxHbJrH18j%25n8520R%256d9lo25DAIJKwOoZ1qgqyfyzda8CD7dB3AF6h0HJ&IMGT=W27&POV=BE030&BKGND=9&uni=m&imwidth=768",
          default: true,
        },
      ],
      "Mercedes C-klasse T-Modell": [
        {
          autoHersteller: "Mercedes",
          name: "Mercedes C-klasse T-Modell",
          Ausstattungsvariante:
            "C 180, C 200 d, C 200, C 220 d, C 220 d 4MATIC, C 200 4MATIC, C 300 e, C 200 4MATIC All-Terrain, C 220 d 4MATIC, C 300 de, C 300, C 300 de, C 300 d, C 300 4MATIC, AMG C 43 4MATIC",
          abPreis: 54.42,
          Rabatt: null,
          MotorleistungVon: 183,
          MotorleistungBis: 422,
          Kraftstoffart: [
            "Super",
            "Diesel",
            "Hybrid(Super)",
            "Hybrid(Diesel)",
            "Super Plus",
          ],
          "Konfig-link":
            "https://www.mercedes-benz.at/passengercars/mercedes-benz-cars/car-configurator.html/motorization/CCci/AT/de/C-KLASSE/LIMOUSINE",
          imgLink:
            "https://images.oneweb.mercedes-benz.com/iris/europe/AT/177010/803_053/iris.png?q=COSY-EU-100-1713d0VXq5SFqtyO67PobzIr3eWsrrCsdRRzwQZxkIZbMw3SGtGyStsd2sDcUfpOcXGEjnmJ0le4kOB2KBjbApvIRI5uO4xQC3iswkzN4obm7j06mhKVBbh%25vqGBIyLRaLmYaxHbJrH18j%25n8520R%256d9lo25DAIJKwOoZ1qgqyfyzda8CD7dB3AF6h0HJ&IMGT=W27&POV=BE030&BKGND=9&uni=m&imwidth=768",
          default: true,
        },
      ],
      "Mercedes E-klasse T-Modell": [
        {
          autoHersteller: "Mercedes",
          name: "Mercedes E-klasse T-Modell",
          Ausstattungsvariante:
            "E 200 d, E 200 d Austia Edition, E 220 d, E 220 d, E 200, E 220 d 4MATIC, E 220 d 4MATIC T-Modell Austria Edition, E 200 4MATIC T-Modell, E 300 e T-Modell, E 300 e T-Modell Austria Edition, E 300 de T-Modell, E 300 de T-Modell Austria Edition, E 220 d 4MATIC All-Terrain T-Modell, E 300 de 4MATIC T-Modell, E 300 de 4MATIC T-Modell Austria Edition, E 200 4MATIC T-Modell All-Terrain, E 300 d 4MATIC T-Modell, E 400 d 4MATIC T-Modell, E 450 4MATIC T-Modell, E 400 d 4MATIC T-Modell All-Terrain, E 450 4MATIC T-Modell All-Terrain, AMG E 53 4MATIC+ T-Modell, AMG E 63 S 4MATIC+ T-Modell",
          abPreis: 57.642,
          Rabatt: null,
          MotorleistungVon: 160,
          MotorleistungBis: 612,
          Kraftstoffart: [
            "Super",
            "Diesel",
            "Hybrid(Super)",
            "Hybrid(Diesel)",
            "Super Plus",
          ],
          "Konfig-link":
            "https://www.mercedes-benz.at/passengercars/mercedes-benz-cars/car-configurator.html/motorization/CCci/AT/de/E-KLASSE/T-MODELL",
          imgLink:
            "https://images.oneweb.mercedes-benz.com/iris/europe/AT/177010/803_053/iris.png?q=COSY-EU-100-1713d0VXq5SFqtyO67PobzIr3eWsrrCsdRRzwQZxkIZbMw3SGtGyStsd2sDcUfpOcXGEjnmJ0le4kOB2KBjbApvIRI5uO4xQC3iswkzN4obm7j06mhKVBbh%25vqGBIyLRaLmYaxHbJrH18j%25n8520R%256d9lo25DAIJKwOoZ1qgqyfyzda8CD7dB3AF6h0HJ&IMGT=W27&POV=BE030&BKGND=9&uni=m&imwidth=768",
          default: true,
        },
      ],
      "Mercedes E-klasse Cabriolet": [
        {
          autoHersteller: "Mercedes",
          name: "Mercedes E-klasse Cabriolet",
          Ausstattungsvariante:
            "E 220 d, E 200, E 200 4MATIC, E 350, E 300, E 300 d 4MATIC, E 400 d 4MATIC, E 450 4MATIC, AMG E 53 4MATIC+",
          abPreis: 57.642,
          Rabatt: null,
          MotorleistungVon: 160,
          MotorleistungBis: 612,
          Kraftstoffart: [
            "Super",
            "Diesel",
            "Hybrid(Super)",
            "Hybrid(Diesel)",
            "Super Plus",
          ],
          "Konfig-link":
            "https://www.mercedes-benz.at/passengercars/mercedes-benz-cars/car-configurator.html/motorization/CCci/AT/de/E-KLASSE/T-MODELL",
          imgLink:
            "https://images.oneweb.mercedes-benz.com/iris/europe/AT/177010/803_053/iris.png?q=COSY-EU-100-1713d0VXq5SFqtyO67PobzIr3eWsrrCsdRRzwQZxkIZbMw3SGtGyStsd2sDcUfpOcXGEjnmJ0le4kOB2KBjbApvIRI5uO4xQC3iswkzN4obm7j06mhKVBbh%25vqGBIyLRaLmYaxHbJrH18j%25n8520R%256d9lo25DAIJKwOoZ1qgqyfyzda8CD7dB3AF6h0HJ&IMGT=W27&POV=BE030&BKGND=9&uni=m&imwidth=768",
          default: true,
        },
      ],
      "Mercedes S-klasse Limousine": [
        {
          autoHersteller: "Mercedes",
          name: "Mercedes S-klasse Limousine",
          Ausstattungsvariante:
            "S 350 d, S 450 e, S 350 d 4MATIC, S 400 d 4MATIC, S 450 4MATIC, S 580 e, S 580 e 4MATIC, S 500 4MATIC, S 580 4MATIC",
          abPreis: 122.808,
          Rabatt: null,
          MotorleistungVon: 286,
          MotorleistungBis: 517,
          Kraftstoffart: ["Super", "Diesel", "Hybrid(Super)", "Super Plus"],
          "Konfig-link":
            "https://www.mercedes-benz.at/passengercars/mercedes-benz-cars/car-configurator.html/motorization/CCci/AT/de/S-KLASSE/LIMOUSINE",
          imgLink:
            "https://images.oneweb.mercedes-benz.com/iris/europe/AT/177010/803_053/iris.png?q=COSY-EU-100-1713d0VXq5SFqtyO67PobzIr3eWsrrCsdRRzwQZxkIZbMw3SGtGyStsd2sDcUfpOcXGEjnmJ0le4kOB2KBjbApvIRI5uO4xQC3iswkzN4obm7j06mhKVBbh%25vqGBIyLRaLmYaxHbJrH18j%25n8520R%256d9lo25DAIJKwOoZ1qgqyfyzda8CD7dB3AF6h0HJ&IMGT=W27&POV=BE030&BKGND=9&uni=m&imwidth=768",
          default: true,
        },
      ],
      "Mercedes S-klasse Limousine Lang": [
        {
          autoHersteller: "Mercedes",
          name: "Mercedes S-klasse Limousine Lang",
          Ausstattungsvariante:
            "S 350 d, S 450 e, S 350 d 4MATIC, S 400 d 4MATIC, S 450 4MATIC, S 580 e, S 580 e 4MATIC, S 500 4MATIC, S 580 4MATIC",
          abPreis: 126.709,
          Rabatt: null,
          MotorleistungVon: 286,
          MotorleistungBis: 517,
          Kraftstoffart: ["Super", "Diesel", "Hybrid(Super)", "Super Plus"],
          "Konfig-link":
            "https://www.mercedes-benz.at/passengercars/mercedes-benz-cars/car-configurator.html/motorization/CCci/AT/de/bm/2231301,2231311,2231331,2231611,2231631,2231661,2231681,2231691,2231761",
          imgLink:
            "https://images.oneweb.mercedes-benz.com/iris/europe/AT/177010/803_053/iris.png?q=COSY-EU-100-1713d0VXq5SFqtyO67PobzIr3eWsrrCsdRRzwQZxkIZbMw3SGtGyStsd2sDcUfpOcXGEjnmJ0le4kOB2KBjbApvIRI5uO4xQC3iswkzN4obm7j06mhKVBbh%25vqGBIyLRaLmYaxHbJrH18j%25n8520R%256d9lo25DAIJKwOoZ1qgqyfyzda8CD7dB3AF6h0HJ&IMGT=W27&POV=BE030&BKGND=9&uni=m&imwidth=768",
          default: true,
        },
      ],
      "Mercedes S-klasse Maybach": [
        {
          autoHersteller: "Mercedes",
          name: "Mercedes S-klasse Maybach",
          Ausstattungsvariante: "Maybach S 580, Maybach S 680",
          abPreis: 243.512,
          Rabatt: null,
          MotorleistungVon: 523,
          MotorleistungBis: 612,
          Kraftstoffart: ["Super", "Super Plus"],
          "Konfig-link":
            "https://www.mercedes-benz.at/passengercars/mercedes-benz-cars/car-configurator.html/motorization/CCci/AT/de/bm/2231301,2231311,2231331,2231611,2231631,2231661,2231681,2231691,2231761",
          imgLink:
            "https://images.oneweb.mercedes-benz.com/iris/europe/AT/177010/803_053/iris.png?q=COSY-EU-100-1713d0VXq5SFqtyO67PobzIr3eWsrrCsdRRzwQZxkIZbMw3SGtGyStsd2sDcUfpOcXGEjnmJ0le4kOB2KBjbApvIRI5uO4xQC3iswkzN4obm7j06mhKVBbh%25vqGBIyLRaLmYaxHbJrH18j%25n8520R%256d9lo25DAIJKwOoZ1qgqyfyzda8CD7dB3AF6h0HJ&IMGT=W27&POV=BE030&BKGND=9&uni=m&imwidth=768",
          default: true,
        },
      ],
      "Mercedes GLA SUV": [
        {
          autoHersteller: "Mercedes",
          name: "Mercedes GLA SUV",
          Ausstattungsvariante:
            "180, 180 d, 200, 200 d, 200 4MATIC, 200 d 4MATIC, 220 d, 250, 250 e, 220 d 4MATIC, 250 4MATIC, AMG 35 4MATIC, AMG 45 4MATIC+, AMG 45 S 4MATIC+",
          abPreis: 43.774,
          Rabatt: null,
          MotorleistungVon: 116,
          MotorleistungBis: 421,
          Kraftstoffart: ["Super", "Super Plus", "Diesel", "Hybrid(Super)"],
          "Konfig-link":
            "https://www.mercedes-benz.at/passengercars/mercedes-benz-cars/car-configurator.html/motorization/CCci/AT/de/GLA-KLASSE/OFFROADER",
          imgLink:
            "https://images.oneweb.mercedes-benz.com/iris/europe/AT/177010/803_053/iris.png?q=COSY-EU-100-1713d0VXq5SFqtyO67PobzIr3eWsrrCsdRRzwQZxkIZbMw3SGtGyStsd2sDcUfpOcXGEjnmJ0le4kOB2KBjbApvIRI5uO4xQC3iswkzN4obm7j06mhKVBbh%25vqGBIyLRaLmYaxHbJrH18j%25n8520R%256d9lo25DAIJKwOoZ1qgqyfyzda8CD7dB3AF6h0HJ&IMGT=W27&POV=BE030&BKGND=9&uni=m&imwidth=768",
          default: true,
        },
      ],
      "Mercedes GLB SUV": [
        {
          autoHersteller: "Mercedes",
          name: "Mercedes GLB SUV",
          Ausstattungsvariante:
            "180 d, 180, 200, 200 d, 200 d 4MATIC, 200 4MATIC, 220 d, 250, 220 d 4MATIC, 250 4MATIC, AMG GLB 35 4MATIC",
          abPreis: 44.944,
          Rabatt: null,
          MotorleistungVon: 116,
          MotorleistungBis: 306,
          Kraftstoffart: ["Super", "Super Plus", "Diesel"],
          "Konfig-link":
            "https://www.mercedes-benz.at/passengercars/mercedes-benz-cars/car-configurator.html/motorization/CCci/AT/de/GLB-KLASSE/OFFROADER",
          imgLink:
            "https://images.oneweb.mercedes-benz.com/iris/europe/AT/177010/803_053/iris.png?q=COSY-EU-100-1713d0VXq5SFqtyO67PobzIr3eWsrrCsdRRzwQZxkIZbMw3SGtGyStsd2sDcUfpOcXGEjnmJ0le4kOB2KBjbApvIRI5uO4xQC3iswkzN4obm7j06mhKVBbh%25vqGBIyLRaLmYaxHbJrH18j%25n8520R%256d9lo25DAIJKwOoZ1qgqyfyzda8CD7dB3AF6h0HJ&IMGT=W27&POV=BE030&BKGND=9&uni=m&imwidth=768",
          default: true,
        },
      ],
      "Mercedes GLC SUV": [
        {
          autoHersteller: "Mercedes",
          name: "Mercedes GLC SUV",
          Ausstattungsvariante:
            "200 4MATIC, 220 d 4MATIC, 300 e 4MATIC, 300 de 4MATIC, 400 e 4MATIC, 300 d 4MATIC, 300 4MATIC",
          abPreis: 64.991,
          Rabatt: null,
          MotorleistungVon: 220,
          MotorleistungBis: 388,
          Kraftstoffart: [
            "Super",
            "Super Plus",
            "Diesel",
            "Hybrid(Diesel)",
            "Hybrid(Super)",
            "Hybrid(Super Plus)",
          ],
          "Konfig-link":
            "https://www.mercedes-benz.at/passengercars/mercedes-benz-cars/car-configurator.html/motorization/CCci/AT/de/GLC-KLASSE/OFFROADER",
          imgLink:
            "https://images.oneweb.mercedes-benz.com/iris/europe/AT/177010/803_053/iris.png?q=COSY-EU-100-1713d0VXq5SFqtyO67PobzIr3eWsrrCsdRRzwQZxkIZbMw3SGtGyStsd2sDcUfpOcXGEjnmJ0le4kOB2KBjbApvIRI5uO4xQC3iswkzN4obm7j06mhKVBbh%25vqGBIyLRaLmYaxHbJrH18j%25n8520R%256d9lo25DAIJKwOoZ1qgqyfyzda8CD7dB3AF6h0HJ&IMGT=W27&POV=BE030&BKGND=9&uni=m&imwidth=768",
          default: true,
        },
      ],
      "Mercedes GLC Coupé": [
        {
          autoHersteller: "Mercedes",
          name: "Mercedes GLC Coupé",
          Ausstattungsvariante:
            "200 d 4MATIC, 200 4MATIC, 220 d 4MATIC, 300 e 4MATIC, 300 d 4MATIC, 300 de 4MATIC, 300 4MATIC, 400 d 4MATIC, AMG 43 4MATIC, AMG 63 4MATIC+, AMG 63 S 4MATIC+",
          abPreis: 61.432,
          Rabatt: null,
          MotorleistungVon: 163,
          MotorleistungBis: 510,
          Kraftstoffart: [
            "Super",
            "Super Plus",
            "Diesel",
            "Hybrid(Diesel)",
            "Hybrid(Super)",
          ],
          "Konfig-link":
            "https://www.mercedes-benz.at/passengercars/mercedes-benz-cars/car-configurator.html/motorization/CCci/AT/de/GLC-KLASSE/COUPE",
          imgLink:
            "https://images.oneweb.mercedes-benz.com/iris/europe/AT/177010/803_053/iris.png?q=COSY-EU-100-1713d0VXq5SFqtyO67PobzIr3eWsrrCsdRRzwQZxkIZbMw3SGtGyStsd2sDcUfpOcXGEjnmJ0le4kOB2KBjbApvIRI5uO4xQC3iswkzN4obm7j06mhKVBbh%25vqGBIyLRaLmYaxHbJrH18j%25n8520R%256d9lo25DAIJKwOoZ1qgqyfyzda8CD7dB3AF6h0HJ&IMGT=W27&POV=BE030&BKGND=9&uni=m&imwidth=768",
          default: true,
        },
      ],
      "Mercedes GLS SUV": [
        {
          autoHersteller: "Mercedes",
          name: "Mercedes GLS SUV",
          Ausstattungsvariante:
            "350 d 4MATIC, 450 4MATIC, 400 d 4MATIC, 580 4MATIC, AMG GLS 63 4MATIC+, Maybach GLS 600 4MATIC",
          abPreis: 118.325,
          Rabatt: null,
          MotorleistungVon: 286,
          MotorleistungBis: 634,
          Kraftstoffart: ["Super", "Super Plus", "Diesel"],
          "Konfig-link":
            "https://www.mercedes-benz.at/passengercars/mercedes-benz-cars/car-configurator.html/motorization/CCci/AT/de/GL-KLASSE/OFFROADER",
          imgLink:
            "https://images.oneweb.mercedes-benz.com/iris/europe/AT/177010/803_053/iris.png?q=COSY-EU-100-1713d0VXq5SFqtyO67PobzIr3eWsrrCsdRRzwQZxkIZbMw3SGtGyStsd2sDcUfpOcXGEjnmJ0le4kOB2KBjbApvIRI5uO4xQC3iswkzN4obm7j06mhKVBbh%25vqGBIyLRaLmYaxHbJrH18j%25n8520R%256d9lo25DAIJKwOoZ1qgqyfyzda8CD7dB3AF6h0HJ&IMGT=W27&POV=BE030&BKGND=9&uni=m&imwidth=768",
          default: true,
        },
      ],
      "Mercedes CLA Shooting Brake": [
        {
          autoHersteller: "Mercedes",
          name: "Mercedes CLA Shooting Brake",
          Ausstattungsvariante:
            "180, 180 d, 200, 200 d, 200 d 4MATIC, 250, 220 d, 250 e, 250 4MATIC, AMG CLA 35 4MATIC, AMG CLA 45 S 4MATIC+",
          abPreis: 38.897,
          Rabatt: null,
          MotorleistungVon: 116,
          MotorleistungBis: 421,
          Kraftstoffart: ["Super", "Super Plus", "Diesel", "Hybrid(Super)"],
          "Konfig-link":
            "https://www.mercedes-benz.at/passengercars/mercedes-benz-cars/car-configurator.html/motorization/CCci/AT/de/CLA-KLASSE/SHOOTING%20BRAKE",
          imgLink:
            "https://images.oneweb.mercedes-benz.com/iris/europe/AT/177010/803_053/iris.png?q=COSY-EU-100-1713d0VXq5SFqtyO67PobzIr3eWsrrCsdRRzwQZxkIZbMw3SGtGyStsd2sDcUfpOcXGEjnmJ0le4kOB2KBjbApvIRI5uO4xQC3iswkzN4obm7j06mhKVBbh%25vqGBIyLRaLmYaxHbJrH18j%25n8520R%256d9lo25DAIJKwOoZ1qgqyfyzda8CD7dB3AF6h0HJ&IMGT=W27&POV=BE030&BKGND=9&uni=m&imwidth=768",
          default: true,
        },
      ],
      "Mercedes CLA Coupé": [
        {
          autoHersteller: "Mercedes",
          name: "Mercedes CLA Coupé",
          Ausstattungsvariante:
            "180, 180 d, 200, 200 d, 200 d 4MATIC, 200 4MATIC, 250, 220 d, 250 e, 250 4MATIC, AMG CLA 35 4MATIC, AMG CLA 45 4MATIC+, AMG CLA 45 S 4MATIC+",
          abPreis: 37.441,
          Rabatt: null,
          MotorleistungVon: 116,
          MotorleistungBis: 421,
          Kraftstoffart: ["Super", "Super Plus", "Diesel", "Hybrid(Super)"],
          "Konfig-link":
            "https://www.mercedes-benz.at/passengercars/mercedes-benz-cars/car-configurator.html/motorization/CCci/AT/de/CLA-KLASSE/COUPE",
          imgLink:
            "https://images.oneweb.mercedes-benz.com/iris/europe/AT/177010/803_053/iris.png?q=COSY-EU-100-1713d0VXq5SFqtyO67PobzIr3eWsrrCsdRRzwQZxkIZbMw3SGtGyStsd2sDcUfpOcXGEjnmJ0le4kOB2KBjbApvIRI5uO4xQC3iswkzN4obm7j06mhKVBbh%25vqGBIyLRaLmYaxHbJrH18j%25n8520R%256d9lo25DAIJKwOoZ1qgqyfyzda8CD7dB3AF6h0HJ&IMGT=W27&POV=BE030&BKGND=9&uni=m&imwidth=768",
          default: true,
        },
      ],
      "Mercedes B-Klasse": [
        {
          autoHersteller: "Mercedes",
          name: "Mercedes B-Klasse",
          Ausstattungsvariante:
            "180, 200, 180 d, 200 d, 200 4MATIC, 220 d, 250 e, 250 4MATIC",
          abPreis: 39.221,
          Rabatt: null,
          MotorleistungVon: 116,
          MotorleistungBis: 238,
          Kraftstoffart: ["Super", "Diesel", "Hybrid(Super)"],
          "Konfig-link":
            "https://www.mercedes-benz.at/passengercars/mercedes-benz-cars/car-configurator.html/motorization/CCci/AT/de/B-KLASSE/SPORTS%20TOURER",
          imgLink:
            "https://images.oneweb.mercedes-benz.com/iris/europe/AT/177010/803_053/iris.png?q=COSY-EU-100-1713d0VXq5SFqtyO67PobzIr3eWsrrCsdRRzwQZxkIZbMw3SGtGyStsd2sDcUfpOcXGEjnmJ0le4kOB2KBjbApvIRI5uO4xQC3iswkzN4obm7j06mhKVBbh%25vqGBIyLRaLmYaxHbJrH18j%25n8520R%256d9lo25DAIJKwOoZ1qgqyfyzda8CD7dB3AF6h0HJ&IMGT=W27&POV=BE030&BKGND=9&uni=m&imwidth=768",
          default: true,
        },
      ],
      "Mercedes CLS Coupé": [
        {
          autoHersteller: "Mercedes",
          name: "Mercedes CLS Coupé",
          Ausstattungsvariante:
            "220 d, 350, 300 d 4MATIC, 450 4MATIC, 400 d 4MATIC, AMG CLS 53 4MATIC+",
          abPreis: 86.241,
          Rabatt: null,
          MotorleistungVon: 194,
          MotorleistungBis: 457,
          Kraftstoffart: ["Super", "Diesel", "Super Plus"],
          "Konfig-link":
            "https://www.mercedes-benz.at/passengercars/mercedes-benz-cars/car-configurator.html/motorization/CCci/AT/de/CLS-KLASSE/COUPE",
          imgLink:
            "https://images.oneweb.mercedes-benz.com/iris/europe/AT/177010/803_053/iris.png?q=COSY-EU-100-1713d0VXq5SFqtyO67PobzIr3eWsrrCsdRRzwQZxkIZbMw3SGtGyStsd2sDcUfpOcXGEjnmJ0le4kOB2KBjbApvIRI5uO4xQC3iswkzN4obm7j06mhKVBbh%25vqGBIyLRaLmYaxHbJrH18j%25n8520R%256d9lo25DAIJKwOoZ1qgqyfyzda8CD7dB3AF6h0HJ&IMGT=W27&POV=BE030&BKGND=9&uni=m&imwidth=768",
          default: true,
        },
      ],
    },
  });
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
