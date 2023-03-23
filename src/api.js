const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/a", (req, res) => {

  res.json({
    Audi: {
      LogoLink: "",
      "Audi A1": [
        {
          autoHersteller: "Audi",
          name: "Audi A1 Sportback",
          Ausstattungsvariante: "Sportback",
          abPreis: 23.149,
          Rabatt: 17,
          MotorleistungVon: 95,
          MotorleistungBis: 150,
          Kraftstoffart: ["Benzin"],
          "Konfig-link":
            "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/307/GBAAT423/B40E/YM/6FB/@?variant=Basis",
          imgLink:
            "https://cdn.nwi-ms.com/media/at/A/mc/GBAAT423/model/19front.png?F=B40E&P=YM&M=6FB&size=S&flag=transparent",
          default: true,
        },
        {
          autoHersteller: "Audi",
          name: "Audi A1 Sportback",
          Ausstattungsvariante: "advanced Exterieur",
          abPreis: 24.776,
          Rabatt: 17,
          MotorleistungVon: 95,
          MotorleistungBis: 150,
          Kraftstoffart: ["Benzin"],
          "Konfig-link":
            "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/307/GBABT423/B40E/YM/6FB/@?variant=advanced",
          imgLink:
            "https://cdn.nwi-ms.com/media/at/A/mc/GBAAT423/model/19front.png?F=B40E&P=YM&M=6FB&size=S&flag=transparent",
          default: false,
        },
        {
          autoHersteller: "Audi",
          name: "Audi A1 Sportback",
          Ausstattungsvariante: "S line exterieur",
          abPreis: 26.095,
          Rabatt: 17,
          MotorleistungVon: 95,
          MotorleistungBis: 207,
          Kraftstoffart: ["Benzin"],
          "Konfig-link":
            "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/307/GBACT423/B40E/YM/6FB/@?variant=S%20line",
          imgLink:
            "https://cdn.nwi-ms.com/media/at/A/mc/GBAAT423/model/19front.png?F=B40E&P=YM&M=6FB&size=S&flag=transparent",
          default: false,
        },
        {
          autoHersteller: "Audi",
          name: "Audi A1 Sportback",
          Ausstattungsvariante: "intense",
          abPreis: 25.02,
          Rabatt: 17,
          MotorleistungVon: 95,
          MotorleistungBis: 150,
          Kraftstoffart: ["Benzin"],
          "Konfig-link":
            "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/307/GBAAT4B1/B40E/KR/6FB/@?variant=intense",
          imgLink:
            "https://cdn.nwi-ms.com/media/at/A/mc/GBAAT423/model/19front.png?F=B40E&P=YM&M=6FB&size=S&flag=transparent",
          default: false,
        },
      ],
      "Audi A3": {
        "Audi A3 Sportback": [
          {
            autoHersteller: "Audi",
            name: "Audi A3 Sportback",
            Ausstattungsvariante: "intense",
            abPreis: 30.955,
            Rabatt: 17,
            MotorleistungVon: 110,
            MotorleistungBis: 116,
            Kraftstoffart: ["Benzin", "Diesel", "Hybrid"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/374/8YAAKCD1/A2A2/AI/@/@?variant=intense",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/8YAAKCD1/model/19front.png?F=A2A2&P=AI&M=&size=S&flag=transparent",
            default: true,
          },
          {
            autoHersteller: "Audi",
            name: "Audi A3 Sportback",
            Ausstattungsvariante: "Basis",
            abPreis: 30.531,
            Rabatt: 17,
            MotorleistungVon: 110,
            MotorleistungBis: 150,
            Kraftstoffart: ["Benzin", "Diesel", "Hybrid", "Erdgas"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/374/8YAAKC21/A2A2/AI/@/@?variant=Basis",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/8YAAKCD1/model/19front.png?F=A2A2&P=AI&M=&size=S&flag=transparent",
            default: false,
          },
          {
            autoHersteller: "Audi",
            name: "Audi A3 Sportback",
            Ausstattungsvariante: "Advanced exterieur",
            abPreis: 31.73,
            Rabatt: 17,
            MotorleistungVon: 110,
            MotorleistungBis: 200,
            Kraftstoffart: ["Benzin", "Diesel", "Hybrid", "Erdgas"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/374/8YABKC21/A2A2/AI/@/@?variant=advanced",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/8YAAKCD1/model/19front.png?F=A2A2&P=AI&M=&size=S&flag=transparent",
            default: false,
          },
          {
            autoHersteller: "Audi",
            name: "Audi A3 Sportback",
            Ausstattungsvariante: "S line exterieur",
            abPreis: 33.468,
            Rabatt: 17,
            MotorleistungVon: 110,
            MotorleistungBis: 200,
            Kraftstoffart: ["Benzin", "Diesel", "Hybrid", "Erdgas"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/374/8YACKC21/T9T9/AI/@/@?variant=S%20line",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/8YAAKCD1/model/19front.png?F=A2A2&P=AI&M=&size=S&flag=transparent",
            default: false,
          },
          {
            autoHersteller: "Audi",
            name: "Audi A3 Sportback",
            Ausstattungsvariante: "S3",
            abPreis: 58.775,
            Rabatt: 17,
            MotorleistungVon: 310,
            MotorleistungBis: 310,
            Kraftstoffart: ["Benzin"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/374/8YAS3Y21/T9T9/AR/@/@?variant=S3",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/8YAAKCD1/model/19front.png?F=A2A2&P=AI&M=&size=S&flag=transparent",
            default: false,
          },
          {
            autoHersteller: "Audi",
            name: "Audi A3 Sportback",
            Ausstattungsvariante: "45 TFSI e",
            abPreis: 43.99,
            Rabatt: 17,
            MotorleistungVon: 245,
            MotorleistungBis: 245,
            Kraftstoffart: ["Plug-In-Hyb. Benzin"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/374/8YAS3Y21/T9T9/AR/@/@?variant=S3",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/8YAAKCD1/model/19front.png?F=A2A2&P=AI&M=&size=S&flag=transparent",
            default: false,
          },
          {
            autoHersteller: "Audi",
            name: "Audi A3 Sportback",
            Ausstattungsvariante: "TFSI e",
            abPreis: 40.922,
            Rabatt: 17,
            MotorleistungVon: 204,
            MotorleistungBis: 204,
            Kraftstoffart: ["Plug-In-Hyb. Benzin"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/374/8YAS3Y21/T9T9/AR/@/@?variant=S3",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/8YAAKCD1/model/19front.png?F=A2A2&P=AI&M=&size=S&flag=transparent",
            default: false,
          },
        ],
        "Audi A3 Limousine": [
          {
            autoHersteller: "Audi",
            name: "Audi A3 Limousine",
            Ausstattungsvariante: "Basis",
            abPreis: 31.238,
            Rabatt: 17,
            MotorleistungVon: 110,
            MotorleistungBis: 150,
            Kraftstoffart: ["Benzin", "Diesel", "Hybrid"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/377/8YSAKC21/A2A2/AI/@/@?variant=Basis",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/8YSAKC21/model/19front.png?F=A2A2&P=AI&M=&size=S&flag=transparent",
            default: true,
          },
          {
            autoHersteller: "Audi",
            name: "Audi A3 Limousine",
            Ausstattungsvariante: "Advanced exterieur",
            abPreis: 32.693,
            Rabatt: 17,
            MotorleistungVon: 110,
            MotorleistungBis: 200,
            Kraftstoffart: ["Benzin", "Diesel", "Hybrid"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/377/8YSBKC21/A2A2/AI/@/@?variant=advanced",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/8YSAKC21/model/19front.png?F=A2A2&P=AI&M=&size=S&flag=transparent",
            default: false,
          },
          {
            autoHersteller: "Audi",
            name: "Audi A3 Limousine",
            Ausstattungsvariante: "S line exterieur",
            abPreis: 34.152,
            Rabatt: 17,
            MotorleistungVon: 110,
            MotorleistungBis: 200,
            Kraftstoffart: ["Benzin", "Diesel", "Hybrid"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/377/8YSCKC21/T9T9/AI/@/@?variant=S%20line",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/8YSAKC21/model/19front.png?F=A2A2&P=AI&M=&size=S&flag=transparent",
            default: false,
          },
          {
            autoHersteller: "Audi",
            name: "Audi A3 Limousine",
            Ausstattungsvariante: "S3",
            abPreis: 59.037,
            Rabatt: 17,
            MotorleistungVon: 310,
            MotorleistungBis: 310,
            Kraftstoffart: ["Benzin"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/377/8YSS3Y21/T9T9/AR/@/@?variant=S3",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/8YSAKC21/model/19front.png?F=A2A2&P=AI&M=&size=S&flag=transparent",
            default: false,
          },
        ],
      },
      "Audi A4": {
        "Audi A4 Limousine": [
          {
            autoHersteller: "Audi",
            name: "Audi A4 Limousine",
            Ausstattungsvariante: "intense",
            abPreis: 37.493,
            Rabatt: 17,
            MotorleistungVon: 110,
            MotorleistungBis: 116,
            Kraftstoffart: ["Benzin(mild) Hybrid", "Diesel(mild) Hybrid"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/384/8WCA7C21/A2A2/EA/@/@?variant=Basis",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/8WCA7C21/model/19front.png?F=A2A2&P=EA&M=&size=S&flag=transparent",
            default: true,
          },
          {
            autoHersteller: "Audi",
            name: "Audi A4 Limousine",
            Ausstattungsvariante: "advanced exterieur",
            abPreis: 38.712,
            Rabatt: 17,
            MotorleistungVon: 150,
            MotorleistungBis: 286,
            Kraftstoffart: ["Benzin(mild) Hybrid", "Diesel(mild) Hybrid"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/384/8WCB7C21/A2A2/EA/@/@?variant=advanced",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/8WCA7C21/model/19front.png?F=A2A2&P=EA&M=&size=S&flag=transparent",
            default: false,
          },
          {
            autoHersteller: "Audi",
            name: "Audi A4 Limousine",
            Ausstattungsvariante: "S line exterieur",
            abPreis: 42.083,
            Rabatt: 17,
            MotorleistungVon: 150,
            MotorleistungBis: 286,
            Kraftstoffart: ["Benzin(mild) Hybrid", "Diesel(mild) Hybrid"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/384/8WCC7C21/M4M4/EA/@/@?variant=S%20line",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/8WCA7C21/model/19front.png?F=A2A2&P=EA&M=&size=S&flag=transparent",
            default: false,
          },
          {
            autoHersteller: "Audi",
            name: "Audi A4 Limousine",
            Ausstattungsvariante: "S4",
            abPreis: 80.305,
            Rabatt: 17,
            MotorleistungVon: 341,
            MotorleistungBis: 341,
            Kraftstoffart: ["Diesel(mild) Hybrid"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/384/8WCC7C21/M4M4/EA/@/@?variant=S%20line",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/8WCA7C21/model/19front.png?F=A2A2&P=EA&M=&size=S&flag=transparent",
            default: false,
          },
        ],
        "Audi A4 Avant": [
          {
            autoHersteller: "Audi",
            name: "Audi A4 Avant",
            Ausstattungsvariante: "Basis",
            abPreis: 39.903,
            Rabatt: 17,
            MotorleistungVon: 150,
            MotorleistungBis: 286,
            Kraftstoffart: ["Benzin(mild) Hybrid", "Diesel(mild) Hybrid"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/387/8WDA7C21/A2A2/EA/@/@?variant=Basis",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/8WDA7C21/model/19front.png?F=A2A2&P=EA&M=&size=S&flag=transparent",
            default: true,
          },
          {
            autoHersteller: "Audi",
            name: "Audi A4 Avant",
            Ausstattungsvariante: "advanced exterieur",
            abPreis: 41.132,
            Rabatt: 17,
            MotorleistungVon: 150,
            MotorleistungBis: 286,
            Kraftstoffart: ["Benzin(mild) Hybrid", "Diesel(mild) Hybrid"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/387/8WDB7C21/A2A2/EA/@/@?variant=advanced",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/8WDA7C21/model/19front.png?F=A2A2&P=EA&M=&size=S&flag=transparent",
            default: false,
          },
          {
            autoHersteller: "Audi",
            name: "Audi A4 Avant",
            Ausstattungsvariante: "S line exterieur",
            abPreis: 44.195,
            Rabatt: 17,
            MotorleistungVon: 150,
            MotorleistungBis: 286,
            Kraftstoffart: ["Benzin(mild) Hybrid", "Diesel(mild) Hybrid"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/387/8WDC7C21/M4M4/EA/@/@?variant=S%20line",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/8WDA7C21/model/19front.png?F=A2A2&P=EA&M=&size=S&flag=transparent",
            default: false,
          },
          {
            autoHersteller: "Audi",
            name: "Audi A4 Avant",
            Ausstattungsvariante: "S4",
            abPreis: 83.501,
            Rabatt: 17,
            MotorleistungVon: 341,
            MotorleistungBis: 341,
            Kraftstoffart: ["Diesel(mild) Hybrid"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/387/8WDS5A21/M4M4/EI/@/@?variant=S4",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/8WDA7C21/model/19front.png?F=A2A2&P=EA&M=&size=S&flag=transparent",
            default: false,
          },
        ],
        "Audi A4 allroad quattro": [
          {
            autoHersteller: "Audi",
            name: "Audi A4 allroad quattro",
            Ausstattungsvariante: null,
            abPreis: 39.903,
            Rabatt: 17,
            MotorleistungVon: 265,
            MotorleistungBis: 265,
            Kraftstoffart: ["Benzin(mild) Hybrid", "Diesel(mild) Hybrid"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/383/8WJ0AY21/A2A2/EA/@/@?variant=allroad%20qu",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/8WDA7C21/model/19front.png?F=A2A2&P=EA&M=&size=S&flag=transparent",
            default: true,
          },
        ],
        "Audi RS 4": [
          {
            autoHersteller: "Audi",
            name: "Audi RS 4",
            Ausstattungsvariante: null,
            abPreis: 111.177,
            Rabatt: 17,
            MotorleistungVon: 450,
            MotorleistungBis: 450,
            Kraftstoffart: ["Benzin"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/433/8WDRXA21/T3T3/QB/3L5@8I6@N1H/@?variant=RS%204",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/8WDA7C21/model/19front.png?F=A2A2&P=EA&M=&size=S&flag=transparent",
            default: true,
          },
        ],
      },
      "Audi A5": {
        "Audi A5 Coupé": [
          {
            autoHersteller: "Audi",
            name: "Audi A5 Coupé",
            Ausstattungsvariante: "Basis",
            abPreis: 45.532,
            Rabatt: 17,
            MotorleistungVon: 150,
            MotorleistungBis: 286,
            Kraftstoffart: ["Benzin(mild) Hybrid", "Diesel(mild) Hybrid"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/493/F5PA7C21/A2A2/EA/@/@?variant=Basis",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/F5PA7C21/model/19front.png?F=A2A2&P=EA&M=&size=S&flag=transparent",
            default: true,
          },
          {
            autoHersteller: "Audi",
            name: "Audi A5 Coupé",
            Ausstattungsvariante: "Advanced",
            abPreis: 46.738,
            Rabatt: 17,
            MotorleistungVon: 150,
            MotorleistungBis: 286,
            Kraftstoffart: ["Benzin(mild) Hybrid", "Diesel(mild) Hybrid"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/493/F5PB7C21/A2A2/EA/@/@?variant=Advanced",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/F5PA7C21/model/19front.png?F=A2A2&P=EA&M=&size=S&flag=transparent",
            default: false,
          },
          {
            autoHersteller: "Audi",
            name: "Audi A5 Coupé",
            Ausstattungsvariante: "S Line",
            abPreis: 49.692,
            Rabatt: 17,
            MotorleistungVon: 150,
            MotorleistungBis: 286,
            Kraftstoffart: ["Benzin(mild) Hybrid", "Diesel(mild) Hybrid"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/493/F5PC7C21/Z7Z7/EA/@/@?variant=S%20line",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/F5PA7C21/model/19front.png?F=A2A2&P=EA&M=&size=S&flag=transparent",
            default: false,
          },
          {
            autoHersteller: "Audi",
            name: "Audi A5 Coupé",
            Ausstattungsvariante: "S5",
            abPreis: 88.135,
            Rabatt: 17,
            MotorleistungVon: 341,
            MotorleistungBis: 341,
            Kraftstoffart: ["Diesel(mild) Hybrid"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/493/F5PC7C21/Z7Z7/EA/@/@?variant=S%20line",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/F5PA7C21/model/19front.png?F=A2A2&P=EA&M=&size=S&flag=transparent",
            default: false,
          },
        ],
        "Audi A5 Sportback": [
          {
            autoHersteller: "Audi",
            name: "Audi A5 Sportback",
            Ausstattungsvariante: "Basis",
            abPreis: 45.532,
            Rabatt: 17,
            MotorleistungVon: 150,
            MotorleistungBis: 286,
            Kraftstoffart: ["Benzin(mild) Hybrid", "Diesel(mild) Hybrid"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/494/F5FA7C21/A2A2/EA/@/@?variant=Basis",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/F5FA7C21/model/19front.png?F=A2A2&P=EA&M=&size=S&flag=transparent",
            default: true,
          },
          {
            autoHersteller: "Audi",
            name: "Audi A5 Sportback",
            Ausstattungsvariante: "Advanced",
            abPreis: 47.1,
            Rabatt: 17,
            MotorleistungVon: 150,
            MotorleistungBis: 286,
            Kraftstoffart: ["Benzin(mild) Hybrid", "Diesel(mild) Hybrid"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/494/F5FB7C21/A2A2/EA/@/@?variant=Advanced",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/F5FA7C21/model/19front.png?F=A2A2&P=EA&M=&size=S&flag=transparent",
            default: false,
          },
          {
            autoHersteller: "Audi",
            name: "Audi A5 Sportback",
            Ausstattungsvariante: "S Line",
            abPreis: 50.48,
            Rabatt: 17,
            MotorleistungVon: 150,
            MotorleistungBis: 286,
            Kraftstoffart: ["Benzin(mild) Hybrid", "Diesel(mild) Hybrid"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/494/F5FC7C21/Z7Z7/EA/@/@?variant=S%20line",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/F5FA7C21/model/19front.png?F=A2A2&P=EA&M=&size=S&flag=transparent",
            default: false,
          },
          {
            autoHersteller: "Audi",
            name: "Audi A5 Sportback",
            Ausstattungsvariante: "S5",
            abPreis: 91.064,
            Rabatt: 17,
            MotorleistungVon: 341,
            MotorleistungBis: 341,
            Kraftstoffart: ["Benzin(mild) Hybrid", "Diesel(mild) Hybrid"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/494/F5FS5A21/Z7Z7/EI/@/@?variant=S5",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/F5FA7C21/model/19front.png?F=A2A2&P=EA&M=&size=S&flag=transparent",
            default: false,
          },
        ],
        "Audi RS 5 Coupé": [
          {
            autoHersteller: "Audi",
            name: "Audi RS 5 Coupé",
            Ausstattungsvariante: null,
            abPreis: 112.647,
            Rabatt: 17,
            MotorleistungVon: 450,
            MotorleistungBis: 450,
            Kraftstoffart: ["Benzin(mild) Hybrid", "Diesel(mild) Hybrid"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/435/F5PRXA21/T3T3/UB/@/@?variant=RS5%20Coup%C3%A9",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/F5PRXA21/model/19front.png?F=T3T3&P=UB&M=&size=S&flag=transparent",
            default: true,
          },
        ],
        "Audi RS 5 Sportback": [
          {
            autoHersteller: "Audi",
            name: "Audi RS 5 Sportback",
            Ausstattungsvariante: null,
            abPreis: 113.701,
            Rabatt: 17,
            MotorleistungVon: 450,
            MotorleistungBis: 450,
            Kraftstoffart: ["Benzin(mild) Hybrid", "Diesel(mild) Hybrid"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/434/F5FRXA21/T3T3/UB/@/@?variant=RS%205%20SB",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/F5FRXA21/model/19front.png?F=T3T3&P=UB&M=&size=S&flag=transparent",
            default: true,
          },
        ],
        "Audi A5 Cabriolet": [
          {
            autoHersteller: "Audi",
            name: "Audi A5 Cabriolet",
            Ausstattungsvariante: "Basis",
            abPreis: 54.416,
            Rabatt: 17,
            MotorleistungVon: 150,
            MotorleistungBis: 204,
            Kraftstoffart: ["Benzin(mild) Hybrid", "Diesel(mild) Hybrid"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/495/F5EA7G21/T9PA/BC/@/@?variant=Basis",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/F5EA7G21/model/19front.png?F=T9PA&P=BC&M=&size=S&flag=transparent&flag=ClosedRoof",
            default: true,
          },
          {
            autoHersteller: "Audi",
            name: "Audi A5 Cabriolet",
            Ausstattungsvariante: "Advanced",
            abPreis: 56.081,
            Rabatt: 17,
            MotorleistungVon: 150,
            MotorleistungBis: 265,
            Kraftstoffart: ["Benzin(mild) Hybrid", "Diesel(mild) Hybrid"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/495/F5EB7G21/A2PA/BC/@/@?variant=Advanced",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/F5EB7G21/model/19front.png?F=A2PA&P=BC&M=&size=S&flag=transparent&flag=ClosedRoof",
            default: false,
          },
          {
            autoHersteller: "Audi",
            name: "Audi A5 Cabriolet",
            Ausstattungsvariante: "S Line",
            abPreis: 59.582,
            Rabatt: 17,
            MotorleistungVon: 150,
            MotorleistungBis: 265,
            Kraftstoffart: ["Benzin(mild) Hybrid", "Diesel(mild) Hybrid"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/495/F5EC7G21/Z7Z7/BC/@/@?variant=S%20line",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/F5EB7G21/model/19front.png?F=A2PA&P=BC&M=&size=S&flag=transparent&flag=ClosedRoof",
            default: false,
          },
          {
            autoHersteller: "Audi",
            name: "Audi A5 Cabriolet",
            Ausstattungsvariante: "S5",
            abPreis: 96.585,
            Rabatt: 17,
            MotorleistungVon: 354,
            MotorleistungBis: 354,
            Kraftstoffart: ["Benzin(mild) Hybrid", "Diesel(mild) Hybrid"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/495s/F5ES4A21/T9PA/EI/@/@?variant=S5",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/F5EB7G21/model/19front.png?F=A2PA&P=BC&M=&size=S&flag=transparent&flag=ClosedRoof",
            default: false,
          },
        ],
      },
      "Audi A6": {
        "Audi A6 Limousine": [
          {
            autoHersteller: "Audi",
            name: "Audi A6 Limousine",
            Ausstattungsvariante: "Basis",
            abPreis: 59.481,
            Rabatt: 17,
            MotorleistungVon: 163,
            MotorleistungBis: 286,
            Kraftstoffart: ["Benzin(mild) Hybrid", "Diesel(mild) Hybrid"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/424/4A2A6G21/A2A2/FZ/@/@?variant=Basis",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/4A2A6G21/model/19front.png?F=A2A2&P=FZ&M=&size=S&flag=transparent",
            default: true,
          },
          {
            autoHersteller: "Audi",
            name: "Audi A6 Limousine",
            Ausstattungsvariante: "Sport",
            abPreis: 62.438,
            Rabatt: 17,
            MotorleistungVon: 163,
            MotorleistungBis: 286,
            Kraftstoffart: ["Benzin(mild) Hybrid", "Diesel(mild) Hybrid"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/424/4A2B6G21/A2A2/FZ/@/@?variant=Sport",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/4A2A6G21/model/19front.png?F=A2A2&P=FZ&M=&size=S&flag=transparent",
            default: false,
          },
          {
            autoHersteller: "Audi",
            name: "Audi A6 Limousine",
            Ausstattungsvariante: "Basis 50 e",
            abPreis: 59.99,
            Rabatt: 17,
            MotorleistungVon: 299,
            MotorleistungBis: 299,
            Kraftstoffart: ["Plug-In-Hyb. Benzin"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/424/4A2AMY21/A2A2/FZ/@/@?variant=Basis%2050%20e",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/4A2A6G21/model/19front.png?F=A2A2&P=FZ&M=&size=S&flag=transparent",
            default: false,
          },
          {
            autoHersteller: "Audi",
            name: "Audi A6 Limousine",
            Ausstattungsvariante: "Sport 50 e",
            abPreis: 64.678,
            Rabatt: 17,
            MotorleistungVon: 299,
            MotorleistungBis: 299,
            Kraftstoffart: ["Plug-In-Hyb. Benzin"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/424/4A2BMY21/A2A2/FZ/@/@?variant=Sport%2050%20e",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/4A2A6G21/model/19front.png?F=A2A2&P=FZ&M=&size=S&flag=transparent",
            default: false,
          },
          {
            autoHersteller: "Audi",
            name: "Audi A6 Limousine",
            Ausstattungsvariante: "Sport 55 e",
            abPreis: 75.903,
            Rabatt: 17,
            MotorleistungVon: 367,
            MotorleistungBis: 367,
            Kraftstoffart: ["Plug-In-Hyb. Benzin"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/424/4A2BNY21/0E0E/MZ/6FA@6RB/@?variant=Sport%2055%20e",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/4A2A6G21/model/19front.png?F=A2A2&P=FZ&M=&size=S&flag=transparent",
            default: false,
          },
          {
            autoHersteller: "Audi",
            name: "Audi A6 Limousine",
            Ausstattungsvariante: "S6",
            abPreis: 93.558,
            Rabatt: 17,
            MotorleistungVon: 344,
            MotorleistungBis: 344,
            Kraftstoffart: ["Diesel(mild) Hybrid"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/424/4A2SPA21/0E0E/MZ/6FA@N2R/@?variant=S6",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/4A2A6G21/model/19front.png?F=A2A2&P=FZ&M=&size=S&flag=transparent",
            default: false,
          },
        ],
        "Audi A6 Avant": [
          {
            autoHersteller: "Audi",
            name: "Audi A6 Avant",
            Ausstattungsvariante: "Basis",
            abPreis: 62.861,
            Rabatt: 17,
            MotorleistungVon: 163,
            MotorleistungBis: 286,
            Kraftstoffart: ["Benzin(mild) Hybrid", "Diesel(mild) Hybrid"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/429/4A5A6G21/A2A2/FZ/@/@?variant=Basis",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/4A2A6G21/model/19front.png?F=A2A2&P=FZ&M=&size=S&flag=transparent",
            default: true,
          },
          {
            autoHersteller: "Audi",
            name: "Audi A6 Avant",
            Ausstattungsvariante: "Basis 50 e",
            abPreis: 64.63,
            Rabatt: 17,
            MotorleistungVon: 299,
            MotorleistungBis: 299,
            Kraftstoffart: ["Plug-In-Hyb. Benzin"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/429/4A5AMY21/A2A2/FZ/@/@?variant=Basis%2050e",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/4A2A6G21/model/19front.png?F=A2A2&P=FZ&M=&size=S&flag=transparent",
            default: false,
          },
          {
            autoHersteller: "Audi",
            name: "Audi A6 Avant",
            Ausstattungsvariante: "Sport",
            abPreis: 65.84,
            Rabatt: 17,
            MotorleistungVon: 163,
            MotorleistungBis: 286,
            Kraftstoffart: ["Benzin(mild) Hybrid", "Diesel(mild) Hybrid"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/429/4A5B6G21/A2A2/FZ/@/@?variant=Sport",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/4A2A6G21/model/19front.png?F=A2A2&P=FZ&M=&size=S&flag=transparent",
            default: false,
          },
          {
            autoHersteller: "Audi",
            name: "Audi A6 Avant",
            Ausstattungsvariante: "Sport 50 e",
            abPreis: 67.318,
            Rabatt: 17,
            MotorleistungVon: 299,
            MotorleistungBis: 299,
            Kraftstoffart: ["Plug-In-Hyb. Benzin"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/429/4A5BMY21/A2A2/FZ/@/@?variant=Sport%2050e",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/4A2A6G21/model/19front.png?F=A2A2&P=FZ&M=&size=S&flag=transparent",
            default: false,
          },
          {
            autoHersteller: "Audi",
            name: "Audi A6 Avant",
            Ausstattungsvariante: "Sport e",
            abPreis: 77.242,
            Rabatt: 17,
            MotorleistungVon: 367,
            MotorleistungBis: 367,
            Kraftstoffart: ["Plug-In-Hyb. Benzin"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/429/4A5BNY21/A2A2/MZ/6FA/@?variant=Sport%20e",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/4A2A6G21/model/19front.png?F=A2A2&P=FZ&M=&size=S&flag=transparent",
            default: false,
          },
          {
            autoHersteller: "Audi",
            name: "Audi A6 Avant",
            Ausstattungsvariante: "S6",
            abPreis: 94.853,
            Rabatt: 17,
            MotorleistungVon: 344,
            MotorleistungBis: 344,
            Kraftstoffart: ["Diesel(mild) Hybrid"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/429/4A5SPA21/A2A2/MZ/6FA/@?variant=S6",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/4A2A6G21/model/19front.png?F=A2A2&P=FZ&M=&size=S&flag=transparent",
            default: false,
          },
        ],
        "Audi RS6 Avant": [
          {
            autoHersteller: "Audi",
            name: "Audi RS6 performance Avant ",
            Ausstattungsvariante: null,
            abPreis: 178.628,
            Rabatt: 17,
            MotorleistungVon: 630,
            MotorleistungBis: 630,
            Kraftstoffart: ["Benzin(mild) Hybrid"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/430/4A5RRA21/T3T3/QH/@/@?variant=RS%206%20perf",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/4A5RRA21/model/19front.png?F=T3T3&P=QH&M=&size=S&flag=transparent",
            default: true,
          },
        ],
        "Audi A6 allroad quattro": [
          {
            autoHersteller: "Audi",
            name: "Audi A6 allroad quattro",
            Ausstattungsvariante: null,
            abPreis: 77.023,
            Rabatt: 17,
            MotorleistungVon: 245,
            MotorleistungBis: 344,
            Kraftstoffart: ["Diesel(mild) Hybrid"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/455/4AH0JY21/A2A2/FZ/@/@?variant=allroad%20qu",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/4AH0JY21/model/19front.png?F=A2A2&P=FZ&M=&size=S&flag=transparent",
            default: true,
          },
        ],
      },
      "Audi A7": {
        "Audi A7 Limousine": [
          {
            autoHersteller: "Audi",
            name: "Audi A7 Sportback",
            Ausstattungsvariante: "Basis",
            abPreis: 90.329,
            Rabatt: 17,
            MotorleistungVon: 204,
            MotorleistungBis: 340,
            Kraftstoffart: ["Benzin(mild) Hybrid", "Diesel(mild) Hybrid"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/492/4KA02Y21/A2A2/FZ/@/@?variant=A7",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/4KA02Y21/model/19front.png?F=A2A2&P=FZ&M=&size=S&flag=transparent",
            default: true,
          },
          {
            autoHersteller: "Audi",
            name: "Audi A7 Sportback",
            Ausstattungsvariante: "TFSI 50 e",
            abPreis: 79.352,
            Rabatt: 17,
            MotorleistungVon: 299,
            MotorleistungBis: 299,
            Kraftstoffart: ["Plug-In-Hyb. Benzin"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/492/4KA0MY21/A2A2/FZ/@/@?variant=TFSI%2050%20e",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/4KA02Y21/model/19front.png?F=A2A2&P=FZ&M=&size=S&flag=transparent",
            default: false,
          },
          {
            autoHersteller: "Audi",
            name: "Audi A7 Sportback",
            Ausstattungsvariante: "TFSI e",
            abPreis: 91.985,
            Rabatt: 17,
            MotorleistungVon: 367,
            MotorleistungBis: 367,
            Kraftstoffart: ["Plug-In-Hyb. Benzin"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/492/4KA0NY21/0E0E/TJ/6FA/@?variant=TFSI%20e",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/4KA02Y21/model/19front.png?F=A2A2&P=FZ&M=&size=S&flag=transparent",
            default: false,
          },
          {
            autoHersteller: "Audi",
            name: "Audi A7 Sportback",
            Ausstattungsvariante: "S7",
            abPreis: 105.738,
            Rabatt: 17,
            MotorleistungVon: 344,
            MotorleistungBis: 344,
            Kraftstoffart: ["Diesel(mild) Hybrid"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/492/4KASPA21/0E0E/TJ/6FA@N2R/@?variant=S7",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/4KA02Y21/model/19front.png?F=A2A2&P=FZ&M=&size=S&flag=transparent",
            default: false,
          },
        ],
        "Audi RS7": [
          {
            autoHersteller: "Audi",
            name: "Audi RS7 performance ",
            Ausstattungsvariante: null,
            abPreis: 188.656,
            Rabatt: 17,
            MotorleistungVon: 630,
            MotorleistungBis: 630,
            Kraftstoffart: ["Benzin(mild) Hybrid", "Diesel(mild) Hybrid"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/431/4KARRA21/T3T3/QH/@/@?variant=RS%207%20perf",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/4KARRA21/model/19front.png?F=T3T3&P=QH&M=&size=S&flag=transparent",
            default: true,
          },
        ],
      },
      "Audi A8": {
        "Audi A8 PA": [
          {
            autoHersteller: "Audi",
            name: "Audi A8 PA",
            Ausstattungsvariante: "Basis",
            abPreis: 126.057,
            Rabatt: 17,
            MotorleistungVon: 286,
            MotorleistungBis: 340,
            Kraftstoffart: ["Benzin(mild) Hybrid", "Diesel(mild) Hybrid"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/586/4NC0DA23/A2A2/WW/1XW@5MK@6NQ@N1WPS1@WQS/@?variant=A8",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/4NC0DA23/model/19front.png?F=A2A2&P=WW&M=1XW@5MK@6NQ@N1WPS1@WQS&size=S&flag=transparent",
            default: true,
          },
          {
            autoHersteller: "Audi",
            name: "Audi A8 PA",
            Ausstattungsvariante: "TFSI e",
            abPreis: 121.691,
            Rabatt: 17,
            MotorleistungVon: 449,
            MotorleistungBis: 449,
            Kraftstoffart: ["Plug-In-Hyb. Benzin"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/586/4NC0HA23/A2A2/WW/1XW@5MK@6NQ@N1WPS1@VF1@WQS/@?variant=A8%20TFSI%20e",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/4KA02Y21/model/19front.png?F=A2A2&P=FZ&M=&size=S&flag=transparent",
            default: false,
          },
          {
            autoHersteller: "Audi",
            name: "Audi A8 PA",
            Ausstattungsvariante: "TFSI e Lang",
            abPreis: 119.971,
            Rabatt: 17,
            MotorleistungVon: 449,
            MotorleistungBis: 449,
            Kraftstoffart: ["Plug-In-Hyb. Benzin"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/586/4NL0HA21/A2A2/WH/@/@?variant=A8%20TFSIe%20L",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/4KA02Y21/model/19front.png?F=A2A2&P=FZ&M=&size=S&flag=transparent",
            default: false,
          },
          {
            autoHersteller: "Audi",
            name: "Audi A8 PA",
            Ausstattungsvariante: "Lang",
            abPreis: 130.218,
            Rabatt: 17,
            MotorleistungVon: 286,
            MotorleistungBis: 460,
            Kraftstoffart: ["Benzin(mild) Hybrid", "Diesel(mild) Hybrid"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/586/4NL0DA21/A2A2/WW/1XW@5MK@6NQ@N1WPS1@WQS/@?variant=A8L",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/4NC0DA23/model/19front.png?F=A2A2&P=WW&M=1XW@5MK@6NQ@N1WPS1@WQS&size=S&flag=transparent",
            default: false,
          },
          {
            autoHersteller: "Audi",
            name: "Audi A8 PA",
            Ausstattungsvariante: "S8",
            abPreis: 182.406,
            Rabatt: 17,
            MotorleistungVon: 571,
            MotorleistungBis: 571,
            Kraftstoffart: ["Benzin(mild) Hybrid"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/586/4NCSSA23/A2A2/WW/6NQ/@?variant=S8",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/4NC0DA23/model/19front.png?F=A2A2&P=WW&M=1XW@5MK@6NQ@N1WPS1@WQS&size=S&flag=transparent",
            default: false,
          },
        ],
        "Audi R8": [
          {
            autoHersteller: "Audi",
            name: "R8",
            Ausstattungsvariante: "V10 performance RWD",
            abPreis: 228.069,
            Rabatt: 17,
            MotorleistungVon: 570,
            MotorleistungBis: 570,
            Kraftstoffart: ["Benzin"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/582/4SPREF21/L1L1/JN/@/@?variant=V10%20p%20RWD",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/4SPREF21/model/19front.png?F=L1L1&P=JN&M=&size=S&flag=transparent",
            default: true,
          },
          {
            autoHersteller: "Audi",
            name: "R8",
            Ausstattungsvariante: "V10 performance quattro",
            abPreis: 281.724,
            Rabatt: 17,
            MotorleistungVon: 620,
            MotorleistungBis: 620,
            Kraftstoffart: ["Benzin"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/582/4SPRDE21/L1L1/JN/3PR@N3QQ1D/@?variant=V10%20perf.",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/4SPRDE21/model/19front.png?F=L1L1&P=JN&M=3PR@N3QQ1D&size=S&flag=transparent",
            default: false,
          },
        ],
      },
      "Audi Q2": {
        "Audi Q2": [
          {
            autoHersteller: "Audi",
            name: "Audi Q2",
            Ausstattungsvariante: "admired",
            abPreis: 29.989,
            Rabatt: 17,
            MotorleistungVon: 110,
            MotorleistungBis: 190,
            Kraftstoffart: ["Benzin", "Diesel"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/316/GAGBQCC3/A2A2/YM/@/@?variant=admired",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/GAGBQCC3/model/19front.png?F=A2A2&P=YM&M=&size=M&flag=transparent",
            default: true,
          },
          {
            autoHersteller: "Audi",
            name: "Audi Q2",
            Ausstattungsvariante: "Basis",
            abPreis: 29.102,
            Rabatt: 17,
            MotorleistungVon: 110,
            MotorleistungBis: 190,
            Kraftstoffart: ["Benzin", "Diesel"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/316/GAGAQC21/A2A2/YM/@/@?variant=Basis",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/GAGBQCC3/model/19front.png?F=A2A2&P=YM&M=&size=M&flag=transparent",
            default: false,
          },
          {
            autoHersteller: "Audi",
            name: "Audi Q2",
            Ausstattungsvariante: "S Line",
            abPreis: 33.063,
            Rabatt: 17,
            MotorleistungVon: 110,
            MotorleistungBis: 190,
            Kraftstoffart: ["Benzin", "Diesel"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/316/GAGCQC21/0E0E/EI/1XW@5TG@PWK/@?variant=S%20line",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/GAGBQCC3/model/19front.png?F=A2A2&P=YM&M=&size=M&flag=transparent",
            default: false,
          },
          {
            autoHersteller: "Audi",
            name: "Audi Q2",
            Ausstattungsvariante: "SQ2",
            abPreis: 57.66,
            Rabatt: 17,
            MotorleistungVon: 300,
            MotorleistungBis: 300,
            Kraftstoffart: ["Benzin"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/316/GAGS3Y21/0E0E/EI/@/@?variant=SQ2",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/GAGBQCC3/model/19front.png?F=A2A2&P=YM&M=&size=M&flag=transparent",
            default: false,
          },
        ],
      },
      "Audi Q3": {
        "Audi Q3": [
          {
            autoHersteller: "Audi",
            name: "Audi Q3",
            Ausstattungsvariante: "Basis",
            abPreis: 38.841,
            Rabatt: 17,
            MotorleistungVon: 150,
            MotorleistungBis: 245,
            Kraftstoffart: ["Benzin", "Diesel"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/339/F3BAYC23/M9M9/FZ/@/@?variant=Basis",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/F3BAYC23/model/19front.png?F=M9M9&P=FZ&M=&size=M&flag=transparent",
            default: true,
          },
          {
            autoHersteller: "Audi",
            name: "Audi Q3",
            Ausstattungsvariante: "intense",
            abPreis: 40.351,
            Rabatt: 17,
            MotorleistungVon: 150,
            MotorleistungBis: 245,
            Kraftstoffart: ["Benzin", "Diesel"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/339/F3BAYCB1/M9M9/FZ/@/@?variant=intense",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/F3BAYC23/model/19front.png?F=M9M9&P=FZ&M=&size=M&flag=transparent",
            default: false,
          },
          {
            autoHersteller: "Audi",
            name: "Audi Q3",
            Ausstattungsvariante: "S line exterieur",
            abPreis: 42.425,
            Rabatt: 17,
            MotorleistungVon: 150,
            MotorleistungBis: 245,
            Kraftstoffart: ["Benzin", "Diesel"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/339/F3BCYC23/M9M9/FZ/@/@?variant=S%20line",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/F3BAYC23/model/19front.png?F=M9M9&P=FZ&M=&size=M&flag=transparent",
            default: false,
          },
          {
            autoHersteller: "Audi",
            name: "Audi Q3",
            Ausstattungsvariante: "advanced exterieur",
            abPreis: 41.017,
            Rabatt: 17,
            MotorleistungVon: 150,
            MotorleistungBis: 245,
            Kraftstoffart: ["Benzin", "Diesel"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/339/F3BBYC23/M9M9/FZ/@/@?variant=advanced",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/F3BAYC23/model/19front.png?F=M9M9&P=FZ&M=&size=M&flag=transparent",
            default: false,
          },
        ],
        "Audi Q3 Sportback": [
          {
            autoHersteller: "Audi",
            name: "Audi Q3 Sportback",
            Ausstattungsvariante: "Basis",
            abPreis: 40.889,
            Rabatt: 17,
            MotorleistungVon: 150,
            MotorleistungBis: 245,
            Kraftstoffart: ["Benzin", "Diesel"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/349/F3NAYC23/M9M9/FZ/@/@?variant=Basis",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/F3BAYC23/model/19front.png?F=M9M9&P=FZ&M=&size=M&flag=transparent",
            default: true,
          },
          {
            autoHersteller: "Audi",
            name: "Audi Q3 Sportback",
            Ausstattungsvariante: "S line",
            abPreis: 44.473,
            Rabatt: 17,
            MotorleistungVon: 150,
            MotorleistungBis: 245,
            Kraftstoffart: ["Benzin", "Diesel"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/349/F3NCYC23/M9M9/FZ/@/@?variant=S%20line",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/F3BAYC23/model/19front.png?F=M9M9&P=FZ&M=&size=M&flag=transparent",
            default: false,
          },
        ],
        "Audi RS Q3": [
          {
            autoHersteller: "Audi",
            name: "Audi RS Q3",
            Ausstattungsvariante: null,
            abPreis: 81.739,
            Rabatt: 17,
            MotorleistungVon: 400,
            MotorleistungBis: 400,
            Kraftstoffart: ["Benzin"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/439/F3BRWY21/T3T3/QH/@/@?variant=RS%20Q3",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/F3BRWY21/model/19front.png?F=T3T3&P=QH&M=&size=M&flag=transparent",
            default: true,
          },
        ],
        "Audi RS Q3 Sportback": [
          {
            autoHersteller: "Audi",
            name: "Audi RS Q3 Sportback",
            Ausstattungsvariante: null,
            abPreis: 84.097,
            Rabatt: 17,
            MotorleistungVon: 400,
            MotorleistungBis: 400,
            Kraftstoffart: ["Benzin"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/449/F3NRWY21/T3T3/QH/@/@?variant=RS%20Q3",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/F3NRWY21/model/19front.png?F=T3T3&P=QH&M=&size=M&flag=transparent",
            default: true,
          },
        ],
      },
      "Audi Q5": {
        "Audi Q5": [
          {
            autoHersteller: "Audi",
            name: "Audi Q5",
            Ausstattungsvariante: "TFSI e",
            abPreis: 59.998,
            Rabatt: 17,
            MotorleistungVon: 299,
            MotorleistungBis: 299,
            Kraftstoffart: ["Plug-In-Hyb. Benzin"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/489/FYGA9Y21/A2A2/YM/@/@?variant=TFSIe",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/FYGC1Y21/model/19front.png?F=0E0E&P=YM&M=&size=M&flag=transparent",
            default: true,
          },
          {
            autoHersteller: "Audi",
            name: "Audi Q5",
            Ausstattungsvariante: "intense",
            abPreis: 71.701,
            Rabatt: 17,
            MotorleistungVon: 136,
            MotorleistungBis: 285,
            Kraftstoffart: ["Benzin(mild) Hybrid", "Diesel(mild) Hybrid"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/489/FYGAAYB1/0E0E/YM/@/@?variant=intense",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/FYGC1Y21/model/19front.png?F=0E0E&P=YM&M=&size=M&flag=transparent",
            default: false,
          },
          {
            autoHersteller: "Audi",
            name: "Audi Q5",
            Ausstattungsvariante: "Basis",
            abPreis: 69.497,
            Rabatt: 17,
            MotorleistungVon: 136,
            MotorleistungBis: 285,
            Kraftstoffart: ["Benzin(mild) Hybrid", "Diesel(mild) Hybrid"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/489/FYGAAYB1/0E0E/YM/@/@?variant=intense",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/FYGAAY21/model/19front.png?F=A2A2&P=YM&M=&size=M&flag=transparent",
            default: false,
          },
          {
            autoHersteller: "Audi",
            name: "Audi Q5",
            Ausstattungsvariante: "S line exterieur",
            abPreis: 74.204,
            Rabatt: 17,
            MotorleistungVon: 136,
            MotorleistungBis: 285,
            Kraftstoffart: ["Benzin(mild) Hybrid", "Diesel(mild) Hybrid"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/489/FYGCAY21/0E0E/YM/@/@?variant=S%20line",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/FYGAAY21/model/19front.png?F=A2A2&P=YM&M=&size=M&flag=transparent",
            default: false,
          },
          {
            autoHersteller: "Audi",
            name: "Audi Q5",
            Ausstattungsvariante: "SQ5",
            abPreis: 91.681,
            Rabatt: 17,
            MotorleistungVon: 341,
            MotorleistungBis: 341,
            Kraftstoffart: ["Diesel(mild) Hybrid"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/489/FYGS5A21/0E0E/AU/3NS@N2R/@?variant=SQ5",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/FYGAAY21/model/19front.png?F=A2A2&P=YM&M=&size=M&flag=transparent",
            default: false,
          },
        ],
        "Audi Q5 Sportback": [
          {
            autoHersteller: "Audi",
            name: "Audi Q5 Sportback",
            Ausstattungsvariante: "Advanced",
            abPreis: 74.009,
            Rabatt: 17,
            MotorleistungVon: 163,
            MotorleistungBis: 286,
            Kraftstoffart: ["Plug-In-Hyb. Benzin"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/479/FYTBAY21/A2A2/YM/@/@?variant=Advanced",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/FYTBAY21/model/19front.png?F=A2A2&P=YM&M=&size=S&flag=transparent",
            default: true,
          },
          {
            autoHersteller: "Audi",
            name: "Audi Q5 Sportback",
            Ausstattungsvariante: "S Line",
            abPreis: 77.034,
            Rabatt: 17,
            MotorleistungVon: 163,
            MotorleistungBis: 286,
            Kraftstoffart: ["Plug-In-Hyb. Benzin"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/479/FYTCAY21/0E0E/YM/@/@?variant=S%20line",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/FYTBAY21/model/19front.png?F=A2A2&P=YM&M=&size=S&flag=transparent",
            default: false,
          },
          {
            autoHersteller: "Audi",
            name: "Audi Q5 Sportback",
            Ausstattungsvariante: "TFSI e",
            abPreis: 65.224,
            Rabatt: 17,
            MotorleistungVon: 299,
            MotorleistungBis: 299,
            Kraftstoffart: ["Plug-In-Hyb. Benzin"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/479/FYTB9Y21/0E0E/YM/@/@?variant=TFSIe",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/FYTBAY21/model/19front.png?F=A2A2&P=YM&M=&size=S&flag=transparent",
            default: false,
          },
          {
            autoHersteller: "Audi",
            name: "Audi Q5 Sportback",
            Ausstattungsvariante: "TFSI e 55",
            abPreis: 71.606,
            Rabatt: 17,
            MotorleistungVon: 367,
            MotorleistungBis: 367,
            Kraftstoffart: ["Plug-In-Hyb. Benzin"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/479/FYTC1Y21/0E0E/YM/@/@?variant=TFSIe%2055",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/FYTBAY21/model/19front.png?F=A2A2&P=YM&M=&size=S&flag=transparent",
            default: false,
          },
          {
            autoHersteller: "Audi",
            name: "Audi Q5 Sportback",
            Ausstattungsvariante: "SQ5",
            abPreis: 94.521,
            Rabatt: 17,
            MotorleistungVon: 341,
            MotorleistungBis: 341,
            Kraftstoffart: ["Plug-In-Hyb. Benzin"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/479/FYTS5A21/0E0E/AU/3NS@N2R/@?variant=SQ5%20SB",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/FYTBAY21/model/19front.png?F=A2A2&P=YM&M=&size=S&flag=transparent",
            default: false,
          },
        ],
      },
      "Audi Q7": {
        "Audi Q7": [
          {
            autoHersteller: "Audi",
            name: "Audi Q7",
            Ausstattungsvariante: "Basis",
            abPreis: 96.424,
            Rabatt: 17,
            MotorleistungVon: 231,
            MotorleistungBis: 340,
            Kraftstoffart: ["Plug-In-Hyb. Benzin"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/554/4MGAX221/0Q0Q/EI/2PF@42P@4A3@4ZD@6E6@6FJ@N5K@WQS/@?variant=Q7",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/4MGAX221/model/19front.png?F=0Q0Q&P=EI&M=2PF@42P@4A3@4ZD@6E6@6FJ@N5K@WQS&size=S&flag=transparent",
            default: true,
          },
          {
            autoHersteller: "Audi",
            name: "Audi Q7",
            Ausstattungsvariante: "SQ7",
            abPreis: 139.48,
            Rabatt: 17,
            MotorleistungVon: 507,
            MotorleistungBis: 507,
            Kraftstoffart: ["Plug-In-Hyb. Benzin"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/554/4MGSW121/T3T3/EI/2PF@3S2@42P@6E6@6FJ@7TS@PC2@WD6/@?variant=SQ7",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/4MGSW121/model/19front.png?F=T3T3&P=EI&M=2PF@3S2@42P@6E6@6FJ@7TS@PC2@WD6&size=S&flag=transparent",
            default: false,
          },
        ],
      },
      "Audi Q8": {
        "Audi Q8": [
          {
            autoHersteller: "Audi",
            name: "Audi Q8",
            Ausstattungsvariante: "Basis",
            abPreis: 94.876,
            Rabatt: 17,
            MotorleistungVon: 231,
            MotorleistungBis: 340,
            Kraftstoffart: ["Plug-In-Hyb. Benzin"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/558/4MN0B2R1/0Q0Q/FZ/@/@?variant=Q8",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/4MN0B2R1/model/19front.png?F=0Q0Q&P=FZ&M=&size=S&flag=transparent",
            default: true,
          },
          {
            autoHersteller: "Audi",
            name: "Audi Q7",
            Ausstattungsvariante: "SQ7",
            abPreis: 139.48,
            Rabatt: 17,
            MotorleistungVon: 507,
            MotorleistungBis: 507,
            Kraftstoffart: ["Plug-In-Hyb. Benzin"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/554/4MGSW121/T3T3/EI/2PF@3S2@42P@6E6@6FJ@7TS@PC2@WD6/@?variant=SQ7",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/4MGSW121/model/19front.png?F=T3T3&P=EI&M=2PF@3S2@42P@6E6@6FJ@7TS@PC2@WD6&size=S&flag=transparent",
            default: false,
          },
        ],
        "Q8 e-tron": [
          {
            autoHersteller: "Audi",
            name: "Q8 Sportback e-tron",
            Ausstattungsvariante: "Business",
            abPreis: 62.821,
            Rabatt: 17,
            MotorleistungVon: 340,
            MotorleistungBis: 408,
            Kraftstoffart: ["Elektro"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/504/GETBUBB1/G5G5/FZ/@/@?variant=Business",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/GETBUBB1/model/19front.png?F=G5G5&P=FZ&M=&size=S&flag=transparent",
            default: true,
          },
          {
            autoHersteller: "Audi",
            name: "Q8 Sportback e-tron",
            Ausstattungsvariante: "advanced exterieur",
            abPreis: 76.73,
            Rabatt: 17,
            MotorleistungVon: 340,
            MotorleistungBis: 408,
            Kraftstoffart: ["Elektro"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/504/GETBUBB1/G5G5/FZ/@/@?variant=Business",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/GETBUBB1/model/19front.png?F=G5G5&P=FZ&M=&size=S&flag=transparent",
            default: false,
          },
          {
            autoHersteller: "Audi",
            name: "Q8 Sportback e-tron",
            Ausstattungsvariante: "S line exterieur",
            abPreis: 79.91,
            Rabatt: 17,
            MotorleistungVon: 340,
            MotorleistungBis: 408,
            Kraftstoffart: ["Elektro"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/503/GEGCUB21/G5G5/FZ/@/@?variant=S%20line",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/GETCUB21/model/19front.png?F=G5G5&P=FZ&M=&size=S&flag=transparent",
            default: false,
          },
        ],
        "Q8 e-tron": [
          {
            autoHersteller: "Audi",
            name: "Q8 e-tron",
            Ausstattungsvariante: "Business",
            abPreis: 59.99,
            Rabatt: 17,
            MotorleistungVon: 340,
            MotorleistungBis: 408,
            Kraftstoffart: ["Elektro"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/503/GEGBUBB1/G5G5/FZ/@/@?variant=Business",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/GEGBUBB1/model/19front.png?F=G5G5&P=FZ&M=&size=M&flag=transparent",
            default: true,
          },
          {
            autoHersteller: "Audi",
            name: "Q8 e-tron",
            Ausstattungsvariante: "advanced exterieur",
            abPreis: 74.626,
            Rabatt: 17,
            MotorleistungVon: 340,
            MotorleistungBis: 408,
            Kraftstoffart: ["Elektro"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/503/GEGBUB21/G5G5/FZ/@/@?variant=advanced",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/GEGBUBB1/model/19front.png?F=G5G5&P=FZ&M=&size=M&flag=transparent",
            default: false,
          },
          {
            autoHersteller: "Audi",
            name: "Q8 e-tron",
            Ausstattungsvariante: "S line exterieur",
            abPreis: 77.87,
            Rabatt: 17,
            MotorleistungVon: 340,
            MotorleistungBis: 408,
            Kraftstoffart: ["Elektro"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/503/GEGCUB21/G5G5/FZ/@/@?variant=S%20line",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/GEGCUB21/model/19front.png?F=G5G5&P=FZ&M=&size=S&flag=transparent",
            default: false,
          },
        ],
      },
      "Audi e-tron GT": {
        "e-tron GT": [
          {
            autoHersteller: "Audi",
            name: "e-tron GT",
            Ausstattungsvariante: "e-tron GT",
            abPreis: 107.316,
            Rabatt: 17,
            MotorleistungVon: 476,
            MotorleistungBis: 476,
            Kraftstoffart: ["Elektro"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/502/F83RJ721/T9T9/JN/@/@?variant=e-tron%20GT",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/F83RJ721/model/19front.png?F=T9T9&P=JN&M=&size=S&flag=transparent",
            default: true,
          },
        ],
        "RS e-tron GT": [
          {
            autoHersteller: "Audi",
            name: "RS e-tron GT",
            Ausstattungsvariante: "RS e-tron GT",
            abPreis: 148.5,
            Rabatt: 17,
            MotorleistungVon: 598,
            MotorleistungBis: 598,
            Kraftstoffart: ["Elektro"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/436/F83RH721/T9T9/JN/@/@?variant=RS%20e-tron",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/F83RH721/model/19front.png?F=T9T9&P=JN&M=&size=S&flag=transparent",
            default: true,
          },
        ],
      },
      "Audi TT Coupé": {
        "TT Coupé": [
          {
            autoHersteller: "Audi",
            name: "TT Coupé",
            Ausstattungsvariante: "TT Coupé",
            abPreis: 47.477,
            Rabatt: 17,
            MotorleistungVon: 197,
            MotorleistungBis: 245,
            Kraftstoffart: ["Benzin"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/474/FVP0CG23/T9T9/JN/@/@?variant=TTC",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/FVP0CG23/model/19front.png?F=T9T9&P=JN&M=&size=S&flag=transparent",
            default: true,
          },
          {
            autoHersteller: "Audi",
            name: "TT Coupé",
            Ausstattungsvariante: "TTS Coupé",
            abPreis: 74.086,
            Rabatt: 17,
            MotorleistungVon: 320,
            MotorleistungBis: 320,
            Kraftstoffart: ["Benzin"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/474/FVPS4Y21/T9T9/OB/@/@?variant=TTS",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/FVPS4Y21/model/19front.png?F=T9T9&P=OB&M=&size=S&flag=transparent",
            default: false,
          },
          {
            autoHersteller: "Audi",
            name: "TT RS Coupé",
            Ausstattungsvariante: "TTS RS Coupé",
            abPreis: 93.516,
            Rabatt: 17,
            MotorleistungVon: 400,
            MotorleistungBis: 400,
            Kraftstoffart: ["Benzin"],
            "Konfig-link":
              "https://konfigurator.audi.at/cc-at/de_AT_AUDI19/A/model-selection/474/FVPS4Y21/T9T9/OB/@/@?variant=TTS",
            imgLink:
              "https://cdn.nwi-ms.com/media/at/A/mc/FVPRSYS1/model/19front.png?F=T3T3&P=JN&M=&size=S&flag=transparent",
            default: false,
          },
        ],
      },
    },
  });
});
router.get("/b", (req, res) => {

  res.json({
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true);
    BMW: {
      LogoLink: "",
      "BMW iX": [
        {
          autoHersteller: "BMW",
          name: "Bmw iX",
          Ausstattungsvariante: "BMW iX xDrive40, BMW iX xDrive50, BMW iX M60",
          abPreis: 81.55,
          Rabatt: null,
          MotorleistungVon: 326,
          MotorleistungBis: 619,
          Kraftstoffart: ["Elektrisch"],
          "Konfig-link":
            "https://configure.bmw.at/de_AT/configure/I20/11CF/FSAMY,P0300,S01GQ,S0230,S02PA,S02VB,S02VC,S0322,S0413,S0428,S0494,S04T2,S04T3,S04U9,S04V1,S05AC,S05AQ,S05AS,S05AV,S05DM,S0654,S06AE,S06AF,S06AK,S06C4,S06NX,S06U3,S0851,S0879,S08R9,S08TF/SE000001?expanded=true",
          imgLink: "https://placehold.co/600x400/000000/FFFFFF/png",
          default: true,
        },
      ],
      "BMW iX3": [
        {
          autoHersteller: "BMW",
          name: "Bmw iX3",
          Ausstattungsvariante: "Bmw iX3",
          abPreis: 59.99,
          Rabatt: null,
          MotorleistungVon: 286,
          MotorleistungBis: 286,
          Kraftstoffart: ["Elektrisch"],
          "Konfig-link":
            "https://configure.bmw.at/de_AT/configure/G08/41DU/FKHRI,P0C3C,S01VA,S0223,S0230,S02PA,S02VB,S02VC,S0302,S03DE,S03MC,S0413,S0423,S0430,S0431,S0481,S0494,S04LU,S04T3,S04U0,S04U9,S04UR,S0534,S0552,S05AC,S05AL,S05AU,S05AV,S05DA,S05DM,S0654,S06AE,S06AF,S06AK,S06C4,S06NW,S06U3,S06WD,S0710,S0715,S0760,S0775,S07EY,S0851,S0879,S08R9,S08TF,S08TR,S08WL,S0925/SE000001?expanded=true",
          imgLink: "https://placehold.co/600x400/000000/FFFFFF/png",
          default: true,
        },
      ],
      "BMW iX1": [
        {
          autoHersteller: "BMW",
          name: "Bmw iX1",
          Ausstattungsvariante: "BMW iX1 Drive30",
          abPreis: 58.5,
          Rabatt: null,
          MotorleistungVon: 313,
          MotorleistungBis: 313,
          Kraftstoffart: ["Elektrisch"],
          "Konfig-link":
            "https://configure.bmw.at/de_AT/configure/U11E/61EF/FBLAT,P0668,S01EP,S0230,S02PA,S02VB,S02VC,S02VF,S0428,S0478,S04GN,S04T2,S04T3,S04U9,S04V1,S05AV,S05DM,S0654,S06AE,S06AF,S06AK,S06C4,S06WC,S0851,S0879,S08R9,S08TF,S08WQ/SE000001?expanded=true",
          imgLink: "https://placehold.co/600x400/000000/FFFFFF/png",
          default: true,
        },
      ],
      "BMW i7": [
        {
          autoHersteller: "BMW",
          name: "Bmw i7",
          Ausstattungsvariante: "BMW i7 Drive60",
          abPreis: 138.9,
          Rabatt: null,
          MotorleistungVon: 544,
          MotorleistungBis: 544,
          Kraftstoffart: ["Elektrisch"],
          "Konfig-link":
            "https://configure.bmw.at/de_AT/configure/G70E/51EJ/FKVRI,P0C4A,S01F2,S0230,S02PA,S02VB,S02VC,S02VH,S0302,S03DN,S0416,S0428,S0465,S04D7,S04FL,S04FM,S04HA,S04T2,S04T3,S04U6,S04U9,S04V1,S05AS,S05AW,S05DN,S0654,S06AE,S06AF,S06AK,S06C4,S06NX,S06PA,S06U3,S06U7,S07UN,S0851,S0879,S08R9,S08TF,S09QV/SE000036?expanded=true",
          imgLink: "https://placehold.co/600x400/000000/FFFFFF/png",
          default: true,
        },
      ],
      "BMW i4": [
        {
          autoHersteller: "BMW",
          name: "Bmw i4",
          Ausstattungsvariante:
            "eDrive35 Gran Coupé, eDrive40 Gran Coupé, M50 Drive Gran Coupé",
          abPreis: 52.0,
          Rabatt: null,
          MotorleistungVon: 286,
          MotorleistungBis: 544,
          Kraftstoffart: ["Elektrisch"],
          "Konfig-link":
            "https://configure.bmw.at/de_AT/configure/G26E/41AW/FKFSW,P0668,S01CB,S0230,S0255,S02PA,S02VB,S02VC,S0302,S03F0,S0428,S0430,S0431,S0493,S04AT,S04AW,S04T2,S04T3,S04U9,S0534,S0544,S05AQ,S05DA,S05DM,S0654,S06AE,S06AF,S06AK,S06C4,S06U2,S06VB,S06WC,S0760,S0851,S0879,S08R9,S08TF,S08WH,S08WQ/SE000001?expanded=true",
          imgLink: "https://placehold.co/600x400/000000/FFFFFF/png",
          default: true,
        },
      ],
      "BMW XM": [
        {
          autoHersteller: "BMW",
          name: "Bmw XM",
          Ausstattungsvariante: "BMW XM",
          abPreis: 171.5,
          Rabatt: null,
          MotorleistungVon: 653,
          MotorleistungBis: 653,
          Kraftstoffart: ["Strom", "Benzin"],
          "Konfig-link":
            "https://configure.bmw.at/de_AT/configure/G09/21CS/FVCSW,P0C5Y,S01CB,S01DF,S01FT,S0230,S02PA,S02T4,S02TB,S02VB,S02VC,S02VW,S0302,S0322,S0323,S03DN,S03M3,S0420,S0423,S0428,S044A,S0453,S04FL,S04HA,S04HB,S04MA,S04MC,S04T3,S04T4,S04T7,S04U9,S04UR,S04V1,S05AC,S05AL,S05AV,S05DN,S0654,S0688,S06AE,S06AF,S06AK,S06C4,S06NX,S06PA,S06U3,S06U8,S07NH,S0851,S0879,S08KA,S08R9,S08WQ,S0925/SE000034?expanded=true",
          imgLink: "https://placehold.co/600x400/000000/FFFFFF/png",
          default: true,
        },
      ],
      "BMW X1": [
        {
          autoHersteller: "BMW",
          name: "Bmw X1",
          Ausstattungsvariante:
            "X1 Drive25e, X1 Drive30e, X1 sDrive18i, X1 sDrive20i, X1 Drive23i, X1 Drive20d, X1 sDrive18d, X1 Drive23d",
          abPreis: 43.2,
          Rabatt: null,
          MotorleistungVon: 136,
          MotorleistungBis: 326,
          Kraftstoffart: ["Strom", "Benzin", "Diesel"],
          "Konfig-link":
            "https://configure.bmw.at/de_AT/configure/U11/11EE/FBLAT,P0668,S01CB,S01DF,S01LS,S0230,S02PA,S02TF,S02VB,S02VC,S03MC,S0428,S0478,S04GN,S05AV,S05DM,S0654,S06AE,S06AF,S06AK,S06C4,S06WC,S0851,S0879,S08KA,S08R9,S08TF,S08WQ?expanded=true",
          imgLink: "https://placehold.co/600x400/000000/FFFFFF/png",
          default: true,
        },
      ],
      "BMW X2": [
        {
          autoHersteller: "BMW",
          name: "Bmw X2",
          Ausstattungsvariante:
            "Drive25e, sDrive18i, Drive20i, sDrive20i, M35i, sDrive16d, Drive18d, sDrive18d, xDrive20d, Drive20d, Drive25d",
          abPreis: 38.6,
          Rabatt: null,
          MotorleistungVon: 116,
          MotorleistungBis: 306,
          Kraftstoffart: ["Strom", "Benzin", "Diesel"],
          "Konfig-link":
            "https://configure.bmw.at/de_AT/configure/F39/YK11/FEGAT,P0668,S01CB,S0230,S023E,S0249,S0255,S02PA,S02VB,S02VC,S0423,S0428,S0450,S0473,S0493,S04FS,S0502,S05A4,S05AV,S05DA,S0654,S06AC,S06AE,S06AK,S06AP,S0851,S0879,S08KB,S08R9,S08TF?expanded=true",
          imgLink: "https://placehold.co/600x400/000000/FFFFFF/png",
          default: true,
        },
      ],
      "BMW X3": [
        {
          autoHersteller: "BMW",
          name: "Bmw X3",
          Ausstattungsvariante:
            "Drive30e, Drive20i, Drive30i, M40i, sDrive18d, Drive20d, Drive30d, M40d",
          abPreis: 57.0,
          Rabatt: null,
          MotorleistungVon: 150,
          MotorleistungBis: 360,
          Kraftstoffart: ["Strom", "Benzin", "Diesel"],
          "Konfig-link":
            "https://configure.bmw.at/de_AT/configure/G01/51BZ/FKHFY,P0668,S01AG,S01CB,S01CE,S0205,S0230,S025T,S02PA,S02VB,S02VC,S0413,S0423,S0428,S0430,S0431,S0481,S04LU,S0534,S05A2,S05AV,S05DA,S05DM,S0654,S06AC,S06AE,S06AK,S06C4,S06U2,S06WB,S0851,S0879,S08KB,S08R9,S08TF,S08WL,S0925,S09QX?expanded=true",
          imgLink: "https://placehold.co/600x400/000000/FFFFFF/png",
          default: true,
        },
      ],
      "BMW X4": [
        {
          autoHersteller: "BMW",
          name: "Bmw X4",
          Ausstattungsvariante:
            "Drive20i, Drive30i, M40i, Drive20d, Drive30d, M40d,",
          abPreis: 66.55,
          Rabatt: null,
          MotorleistungVon: 184,
          MotorleistungBis: 360,
          Kraftstoffart: ["Benzin", "Diesel"],
          "Konfig-link":
            "https://configure.bmw.at/de_AT/configure/G02/11DT/FKHFY,P0668,S01CB,S01CE,S01DF,S0230,S025T,S02PA,S02TE,S02VB,S02VC,S0423,S0428,S0430,S0431,S0481,S04LU,S04NE,S0534,S0552,S05AC,S05AV,S05DA,S05DM,S0654,S06AE,S06AF,S06AK,S06C4,S06U2,S06WB,S0704,S0851,S0879,S08KA,S08R9,S08TF,S08WC,S08WL,S0925?expanded=true",
          imgLink: "https://placehold.co/600x400/000000/FFFFFF/png",
          default: true,
        },
      ],
      "BMW X5": [
        {
          autoHersteller: "BMW",
          name: "Bmw X5",
          Ausstattungsvariante: "Drive50e, Drive40i, M60i Drive, Drive30d",
          abPreis: 93.8,
          Rabatt: null,
          MotorleistungVon: 298,
          MotorleistungBis: 530,
          Kraftstoffart: ["Benzin", "Diesel", "Strom"],
          "Konfig-link":
            "https://configure.bmw.at/de_AT/configure/G05/41EU/FKPHF,P0300,S01CB,S01DF,S01SA,S0230,S0255,S02PA,S02TB,S02VB,S02VC,S02VR,S0302,S0322,S03AT,S03MB,S0413,S0423,S0428,S0459,S0481,S0488,S0494,S04KR,S04T2,S04T3,S04T8,S04U9,S04UR,S04V1,S0548,S05AC,S05AL,S05AV,S05DM,S0654,S0676,S06AE,S06AF,S06AK,S06C4,S06NX,S06PA,S06U2,S0851,S0879,S08KA,S08R9,S08TF,S0925/SE000034?expanded=true",
          imgLink: "https://placehold.co/600x400/000000/FFFFFF/png",
          default: true,
        },
      ],
      "BMW X6": [
        {
          autoHersteller: "BMW",
          name: "Bmw X6",
          Ausstattungsvariante: "Drive40i, M60i Drive, Drive30d",
          abPreis: 103.75,
          Rabatt: null,
          MotorleistungVon: 298,
          MotorleistungBis: 530,
          Kraftstoffart: ["Benzin", "Diesel"],
          "Konfig-link":
            "https://configure.bmw.at/de_AT/configure/G06/11EY/FKPHF,P0300,S01CB,S01CE,S01DF,S01TC,S0230,S0258,S02PA,S02VB,S02VF,S0302,S0322,S0423,S0428,S0459,S0481,S0488,S0494,S04KR,S04T8,S04UR,S0548,S05AC,S05AL,S05AV,S05DM,S0654,S0676,S06AE,S06AF,S06AK,S06C4,S06NX,S06PA,S06U2,S0710,S0715,S0760,S0775,S0851,S0879,S08KA,S08R9,S08TF,S0925?expanded=true",
          imgLink: "https://placehold.co/600x400/000000/FFFFFF/png",
          default: true,
        },
      ],
      "BMW X7": [
        {
          autoHersteller: "BMW",
          name: "Bmw X7",
          Ausstattungsvariante: "Drive40i, M60i Drive, xDrive40d",
          abPreis: 119.75,
          Rabatt: null,
          MotorleistungVon: 381,
          MotorleistungBis: 530,
          Kraftstoffart: ["Benzin", "Diesel"],
          "Konfig-link":
            "https://configure.bmw.at/de_AT/configure/G07/21EM/FVAHF,P0300,S01CB,S01CE,S01DF,S01SG,S0230,S0255,S0258,S02PA,S02TB,S02VB,S0302,S0322,S0323,S03AT,S03MB,S0418,S0423,S0428,S0456,S0494,S04KR,S04UR,S0548,S05AC,S05AL,S05AS,S05AV,S05DM,S0654,S0676,S06AE,S06AF,S06AK,S06C4,S06NX,S06PA,S06U3,S06U8,S07NH,S0851,S0879,S08KA,S08R9,S0925?expanded=true",
          imgLink: "https://placehold.co/600x400/000000/FFFFFF/png",
          default: true,
        },
      ],
      "BMW X6 M": [
        {
          autoHersteller: "BMW",
          name: "Bmw X6 M",
          Ausstattungsvariante: "X6 M",
          abPreis: 209.8,
          Rabatt: null,
          MotorleistungVon: 625,
          MotorleistungBis: 625,
          Kraftstoffart: ["Benzin"],
          "Konfig-link":
            "https://configure.bmw.at/de_AT/configure/F96/21ET/FLKDA,P0300,S01CE,S01DF,S01MA,S01TF,S0230,S02PA,S02VB,S02VC,S0302,S0322,S0423,S0428,S0459,S04GQ,S04LM,S04MA,S0548,S0552,S05AC,S05AL,S05AS,S05AV,S05DM,S0654,S0688,S06AE,S06AF,S06AK,S06C4,S06NX,S06PA,S06U3,S07M9,S0851,S0879,S08KA,S08R9,S08TF,S0925?expanded=true",
          imgLink: "https://placehold.co/600x400/000000/FFFFFF/png",
          default: true,
        },
      ],
      "BMW X5 M": [
        {
          autoHersteller: "BMW",
          name: "Bmw X5 M",
          Ausstattungsvariante: "X5 M",
          abPreis: 207.8,
          Rabatt: null,
          MotorleistungVon: 625,
          MotorleistungBis: 625,
          Kraftstoffart: ["Benzin"],
          "Konfig-link":
            "https://configure.bmw.at/de_AT/configure/F95/11ET/FLKDA,P0300,S01CE,S01DF,S01MA,S01TF,S0230,S02PA,S02VB,S02VC,S0302,S0322,S03MC,S0413,S0423,S0428,S0459,S04GQ,S04LM,S04MA,S0548,S0552,S05AC,S05AL,S05AS,S05AV,S05DM,S0654,S0688,S06AE,S06AF,S06AK,S06C4,S06NX,S06PA,S06U3,S07M9,S0851,S0879,S08KA,S08R9,S08TF,S0925?expanded=true",
          imgLink: "https://placehold.co/600x400/000000/FFFFFF/png",
          default: true,
        },
      ],
      "BMW X4 M": [
        {
          autoHersteller: "BMW",
          name: "Bmw X4 M",
          Ausstattungsvariante: "X4 M",
          abPreis: 131.05,
          Rabatt: null,
          MotorleistungVon: 480,
          MotorleistungBis: 480,
          Kraftstoffart: ["Benzin"],
          "Konfig-link":
            "https://configure.bmw.at/de_AT/configure/F98/21EC/FMAOI,P0300,S01DF,S01MA,S01RF,S0230,S02PA,S02VB,S02VC,S0302,S0423,S0428,S0493,S04KN,S04NE,S0548,S0552,S05AV,S05DA,S05DM,S0610,S0654,S0688,S06AE,S06AF,S06AK,S06C4,S06NW,S06U3,S06WD,S0851,S0879,S08KA,S08R9,S08TF,S08WL,S0925?expanded=true",
          imgLink: "https://placehold.co/600x400/000000/FFFFFF/png",
          default: true,
        },
      ],
      "BMW X3 M": [
        {
          autoHersteller: "BMW",
          name: "Bmw X3 M",
          Ausstattungsvariante: "X3 M",
          abPreis: 129.3,
          Rabatt: null,
          MotorleistungVon: 480,
          MotorleistungBis: 480,
          Kraftstoffart: ["Benzin"],
          "Konfig-link":
            "https://configure.bmw.at/de_AT/configure/F97/11EC/FMAOI,P0300,S01DF,S01MA,S01RF,S0230,S02PA,S02VB,S02VC,S0302,S03MC,S0413,S0423,S0428,S0493,S04KN,S04NE,S0548,S0552,S05AV,S05DA,S05DM,S0610,S0654,S0688,S06AE,S06AF,S06AK,S06C4,S06NW,S06U3,S06WD,S0851,S0879,S08KA,S08R9,S08TF,S08WL,S0925?expanded=true",
          imgLink: "https://placehold.co/600x400/000000/FFFFFF/png",
          default: true,
        },
      ],
      "BMW M8 Cabrio": [
        {
          autoHersteller: "BMW",
          name: "Bmw M8 Cabrio",
          Ausstattungsvariante: "M8 Cabrio",
          abPreis: 228.4,
          Rabatt: null,
          MotorleistungVon: 600,
          MotorleistungBis: 600,
          Kraftstoffart: ["Benzin"],
          "Konfig-link":
            "https://configure.bmw.at/de_AT/configure/F91/DZ01/FHDJI,P0300,S01DF,S01YZ,S0230,S02PA,S02T4,S02VB,S02VC,S0302,S0316,S0322,S0323,S03DS,S03MF,S0428,S0488,S0494,S04MC,S0548,S05AC,S05AS,S05AV,S05AZ,S05DM,S0654,S06AE,S06AF,S06AK,S06C4,S06NW,S06U3,S06WD,S0712,S0760,S07NH,S0851,S0879,S08KA,S08R9,S08TF,S08WL?expanded=true",
          imgLink: "https://placehold.co/600x400/000000/FFFFFF/png",
          default: true,
        },
      ],
      "BMW M8 Gran Coupé F93": [
        {
          autoHersteller: "BMW",
          name: "Bmw M8 Gran Coupé F93",
          Ausstattungsvariante: "M8 Gran Coupé F93",
          abPreis: 212.4,
          Rabatt: null,
          MotorleistungVon: 600,
          MotorleistungBis: 600,
          Kraftstoffart: ["Benzin"],
          "Konfig-link":
            "https://configure.bmw.at/de_AT/configure/F93/GV01/FLKSW,P0300,S01DF,S01TG,S0230,S02PA,S02T4,S02VB,S02VC,S0302,S0322,S0323,S03DS,S03MF,S0428,S0488,S0494,S04MC,S04NB,S0548,S05AC,S05AS,S05AV,S05AZ,S05DM,S0654,S06AE,S06AF,S06AK,S06C4,S06NW,S06U3,S06WD,S0712,S0760,S0776,S07NH,S0851,S0879,S08KA,S08R9,S08TF,S08WL?expanded=true",
          imgLink: "https://placehold.co/600x400/000000/FFFFFF/png",
          default: true,
        },
      ],
      "BMW M8 Coupé": [
        {
          autoHersteller: "BMW",
          name: "Bmw M8 Coupé",
          Ausstattungsvariante: "M8 Coupé",
          abPreis: 216.4,
          Rabatt: null,
          MotorleistungVon: 600,
          MotorleistungBis: 600,
          Kraftstoffart: ["Benzin"],
          "Konfig-link":
            "https://configure.bmw.at/de_AT/configure/F92/AE01/FHDJI,P0300,S01DF,S01YZ,S0230,S02PA,S02T4,S02VB,S02VC,S0302,S0322,S0323,S03DS,S03MF,S0428,S0488,S0494,S04MC,S0548,S05AC,S05AS,S05AV,S05AZ,S05DM,S0654,S06AE,S06AF,S06AK,S06C4,S06NW,S06U3,S06WD,S0712,S0760,S0776,S07NH,S0851,S0879,S08KA,S08R9,S08TF,S08WL?expanded=true",
          imgLink: "https://placehold.co/600x400/000000/FFFFFF/png",
          default: true,
        },
      ],
      "BMW M5 Limousine": [
        {
          autoHersteller: "BMW",
          name: "Bmw M5 Limousine",
          Ausstattungsvariante: "M5 Limousine",
          abPreis: 172.1,
          Rabatt: null,
          MotorleistungVon: 600,
          MotorleistungBis: 600,
          Kraftstoffart: ["Benzin"],
          "Konfig-link":
            "https://configure.bmw.at/de_AT/configure/F90/81CH/FLKSW,P0300,S01DF,S022A,S0230,S02PA,S02VB,S02VC,S0302,S0316,S0322,S0428,S0465,S04MA,S04NB,S04WN,S0548,S0552,S0575,S05AC,S05AS,S05AV,S05DM,S0654,S06AC,S06AE,S06AK,S06C4,S06NS,S06U3,S06WD,S0851,S0879,S08KA,S08R9,S08TF,S08WL?expanded=true",
          imgLink: "https://placehold.co/600x400/000000/FFFFFF/png",
          default: true,
        },
      ],
      "BMW M3 Touring": [
        {
          autoHersteller: "BMW",
          name: "M3 Competition xDrive Touring",
          Ausstattungsvariante: "M3 Competition xDrive Touring",
          abPreis: 122.7,
          Rabatt: null,
          MotorleistungVon: 510,
          MotorleistungBis: 510,
          Kraftstoffart: ["Benzin"],
          "Konfig-link":
            "https://configure.bmw.at/de_AT/configure/G81/11GB/FLKSW,P0300,S01CB,S01DF,S01MB,S01U0,S0230,S02PA,S02T4,S02VB,S02VC,S02VF,S0302,S0383,S03MC,S0428,S0430,S0431,S0459,S0488,S0493,S0494,S04AT,S04NE,S04U0,S0508,S0534,S0544,S0548,S05AV,S05DA,S05DC,S0654,S06AE,S06AF,S06AK,S06C4,S06NX,S06U2,S06VB,S06WC,S0712,S0760,S0775,S07M9,S0851,S0879,S08EK,S08KA,S08R9,S08TF,S08WM,S08WQ?expanded=true",
          imgLink: "https://placehold.co/600x400/000000/FFFFFF/png",
          default: true,
        },
      ],
      "BMW M3 Limousine": [
        {
          autoHersteller: "BMW",
          name: "BMW M3 ",
          Ausstattungsvariante:
            "M3 Limousine, M3 Competition M Drive, M3 Competition Limousine",
          abPreis: 109.25,
          Rabatt: null,
          MotorleistungVon: 480,
          MotorleistungBis: 510,
          Kraftstoffart: ["Benzin"],
          "Konfig-link":
            "https://configure.bmw.at/de_AT/configure/G80/51AY/FLKSW,P0300,S01CB,S01DF,S01T5,S0230,S02PA,S02T4,S02VB,S02VC,S02VF,S0302,S0428,S0430,S0431,S0459,S0488,S0493,S0494,S04AT,S04NE,S0508,S0534,S0544,S0548,S05AV,S05DA,S05DC,S0654,S06AE,S06AF,S06AK,S06C4,S06NX,S06U2,S06VB,S06WC,S0712,S0760,S0775,S0851,S0879,S08EK,S08KA,S08R9,S08TF,S08WM,S08WQ?expanded=true",
          imgLink: "https://placehold.co/600x400/000000/FFFFFF/png",
          default: true,
        },
      ],
      "BMW M2 Coupé": [
        {
          autoHersteller: "BMW",
          name: "BMW M2 Coupé ",
          Ausstattungsvariante: "M2 Coupé",
          abPreis: 88.0,
          Rabatt: null,
          MotorleistungVon: 460,
          MotorleistungBis: 460,
          Kraftstoffart: ["Benzin"],
          "Konfig-link":
            "https://configure.bmw.at/de_AT/configure/G87/11DM/FKGNL,P0300,S01DF,S01E6,S01MB,S0230,S02PA,S02T4,S02TB,S02VB,S02VC,S02VF,S0302,S0428,S0430,S0431,S043A,S0490,S0493,S0494,S04AT,S04NE,S04UR,S0508,S0534,S0544,S0548,S05AV,S05DA,S05DC,S0654,S0676,S06AE,S06AF,S06AK,S06C4,S06NX,S06U2,S06VB,S06WC,S0760,S0775,S0851,S0879,S08KA,S08R3,S08R9,S08TF,S08WD,S08WQ,S0925,S09QX?expanded=true",
          imgLink: "https://placehold.co/600x400/000000/FFFFFF/png",
          default: true,
        },
      ],
      "BMW 8er Coupé": [
        {
          autoHersteller: "BMW",
          name: "BMW 8er Coupé ",
          Ausstattungsvariante:
            "840i Drive Coupé, 840i Coupé, M850i xDrive Coupé, 840d Drive Coupé",
          abPreis: 119.0,
          Rabatt: null,
          MotorleistungVon: 333,
          MotorleistungBis: 530,
          Kraftstoffart: ["Benzin"],
          "Konfig-link":
            "https://configure.bmw.at/de_AT/configure/G15/AE21/FLKMI,P0300,S01CB,S01DF,S01PZ,S0230,S0258,S02NH,S02PA,S02T4,S02VB,S0302,S0322,S0323,S03DS,S0428,S0494,S04FM,S04L8,S04NE,S0548,S0552,S05AC,S05AS,S05AV,S05DM,S0654,S06AE,S06AF,S06AK,S06C4,S06NW,S06U3,S06WD,S0710,S0715,S0760,S0775,S07NH,S0851,S0879,S08KA,S08R9,S08TF,S08TL,S08WL?expanded=true",
          imgLink: "https://placehold.co/600x400/000000/FFFFFF/png",
          default: true,
        },
      ],
      "BMW 8er Cabrio": [
        {
          autoHersteller: "BMW",
          name: "BMW 8er Cabrio ",
          Ausstattungsvariante:
            "840i xDrive Cabrio, 840i Cabrio, M850i xDrive Cabrio, 840d xDrive Cabrio",
          abPreis: 129.0,
          Rabatt: null,
          MotorleistungVon: 333,
          MotorleistungBis: 530,
          Kraftstoffart: ["Benzin"],
          "Konfig-link":
            "https://configure.bmw.at/de_AT/configure/G14/DZ21/FLKMI,P0300,S01CB,S01DF,S01PZ,S0230,S0258,S02NH,S02PA,S02T4,S02VB,S0302,S0316,S0322,S0323,S03DS,S0428,S0494,S04FM,S04L8,S04NE,S0548,S0552,S05AC,S05AS,S05AV,S05DM,S0654,S06AE,S06AF,S06AK,S06C4,S06NW,S06U3,S06WD,S0710,S0715,S0760,S07NH,S0851,S0879,S08KA,S08R9,S08TF,S08TL,S08WL?expanded=true",
          imgLink: "https://placehold.co/600x400/000000/FFFFFF/png",
          default: true,
        },
      ],
      "BMW 8er Gran Coupé": [
        {
          autoHersteller: "BMW",
          name: "BMW 8er Gran Coupé ",
          Ausstattungsvariante:
            "840i xDrive Gran Coupé, 840i Gran Coupé, M850i xDrive Gran Coupé, 840d xDrive Gran Coupé",
          abPreis: 129.0,
          Rabatt: null,
          MotorleistungVon: 333,
          MotorleistungBis: 530,
          Kraftstoffart: ["Benzin"],
          "Konfig-link":
            "https://configure.bmw.at/de_AT/configure/G16/GV21/FLKMI,P0300,S01CB,S01DF,S01PZ,S0230,S0258,S02NH,S02PA,S02T4,S02VB,S0302,S0322,S0323,S03DS,S0428,S0494,S04FM,S04L8,S04NB,S04NE,S0548,S0552,S05AC,S05AS,S05AV,S05DM,S0654,S06AE,S06AF,S06AK,S06C4,S06NW,S06U3,S06WD,S0710,S0715,S0760,S0775,S07NH,S0851,S0879,S08KA,S08R9,S08TF,S08TL,S08WL?expanded=true",
          imgLink: "https://placehold.co/600x400/000000/FFFFFF/png",
          default: true,
        },
      ],
      "BMW 7er Limousine": [
        {
          autoHersteller: "BMW",
          name: "BMW 7er Limousine ",
          Ausstattungsvariante:
            "740d Drive Limousine, 750e Drive Limousine, M760e Drive Limousine",
          abPreis: 121.2,
          Rabatt: null,
          MotorleistungVon: 489,
          MotorleistungBis: 571,
          Kraftstoffart: ["Benzin"],
          "Konfig-link":
            "https://configure.bmw.at/de_AT/configure/G70/41EH/FKVRI,P0300,S01CB,S01DF,S01F2,S0230,S02PA,S02TB,S02VB,S02VC,S02VH,S0302,S03DN,S0416,S0428,S0465,S04D7,S04HA,S04T2,S04T3,S04U9,S04V1,S0548,S05AS,S05AW,S05DN,S0654,S06AE,S06AF,S06AK,S06C4,S06NX,S06PA,S06U3,S06U7,S07NH,S0851,S0879,S08KA,S08R9,S08TF,S09QV/SE000034?expanded=true",
          imgLink: "https://placehold.co/600x400/000000/FFFFFF/png",
          default: true,
        },
      ],
      "BMW 6er": [
        {
          autoHersteller: "BMW",
          name: "BMW 6er",
          Ausstattungsvariante:
            "630i Gran Turismo, 640i xDrive Gran Turismo, 640i Gran Turismo, 620d xDrive Gran Turismo, 620d Gran Turismo, 630d xDrive Gran Turismo, 630d Gran Turismo, 630d Gran Turismo",
          abPreis: 71.65,
          Rabatt: null,
          MotorleistungVon: 190,
          MotorleistungBis: 340,
          Kraftstoffart: ["Benzin", "Diesel"],
          "Konfig-link":
            "https://configure.bmw.at/de_AT/configure/G32/JY81/FLCRO,P0300,S01CB,S01CE,S0230,S02PA,S02VB,S02VC,S02WT,S0302,S0423,S0428,S0481,S0494,S04KG,S04T8,S04UR,S0534,S0548,S0552,S05AC,S05AV,S05DM,S0654,S06AC,S06AE,S06AK,S06C4,S06NS,S06U3,S0851,S0879,S08KB,S08R9,S08TF,S08WL?expanded=true",
          imgLink: "https://placehold.co/600x400/000000/FFFFFF/png",
          default: true,
        },
      ],
      "BMW 5er": [
        {
          autoHersteller: "BMW",
          name: "BMW 5er",
          Ausstattungsvariante:
            "530e xDrive Limousine, 530e Limousine, 545e xDrive Limousine, 520i Limousine, 530i xDrive Limousine, 530i Limousine, 540i xDrive Limousine, 540i Limousine, M550i xDrive Limousine, M550i xDrive Limousine, 520d xDrive Limousine, 520d Limousine, 530d xDrive Limousine, 530d Limousine, 540d xDrive Limousine",
          abPreis: 71.65,
          Rabatt: null,
          MotorleistungVon: 150,
          MotorleistungBis: 530,
          Kraftstoffart: ["Benzin", "Diesel", "Strom und Benzin"],
          "Konfig-link":
            "https://configure.bmw.at/de_AT/configure/G32/JY81/FLCRO,P0300,S01CB,S01CE,S0230,S02PA,S02VB,S02VC,S02WT,S0302,S0423,S0428,S0481,S0494,S04KG,S04T8,S04UR,S0534,S0548,S0552,S05AC,S05AV,S05DM,S0654,S06AC,S06AE,S06AK,S06C4,S06NS,S06U3,S0851,S0879,S08KB,S08R9,S08TF,S08WL?expanded=true",
          imgLink: "https://placehold.co/600x400/000000/FFFFFF/png",
          default: true,
        },
      ],
      "BMW 5er Limousine": [
        {
          autoHersteller: "BMW",
          name: "BMW 5er Limousine",
          Ausstattungsvariante:
            "530e xDrive Limousine, 530e Limousine, 545e xDrive Limousine, 520i Limousine, 530i xDrive Limousine, 530i Limousine, 540i xDrive Limousine, 540i Limousine, M550i xDrive Limousine, M550i xDrive Limousine, 520d xDrive Limousine, 520d Limousine, 530d xDrive Limousine, 530d Limousine, 540d xDrive Limousine",
          abPreis: 71.65,
          Rabatt: null,
          MotorleistungVon: 150,
          MotorleistungBis: 530,
          Kraftstoffart: ["Benzin", "Diesel", "Strom und Benzin"],
          "Konfig-link":
            "https://configure.bmw.at/de_AT/configure/G32/JY81/FLCRO,P0300,S01CB,S01CE,S0230,S02PA,S02VB,S02VC,S02WT,S0302,S0423,S0428,S0481,S0494,S04KG,S04T8,S04UR,S0534,S0548,S0552,S05AC,S05AV,S05DM,S0654,S06AC,S06AE,S06AK,S06C4,S06NS,S06U3,S0851,S0879,S08KB,S08R9,S08TF,S08WL?expanded=true",
          imgLink: "https://placehold.co/600x400/000000/FFFFFF/png",
          default: true,
        },
      ],
      "BMW 5er Touring": [
        {
          autoHersteller: "BMW",
          name: "BMW 5er Touring",
          Ausstattungsvariante:
            "530e xDrive Touring, 530e Touring, 520i Touring, 530i xDrive Touring, 530i Touring, 540i xDrive Touring, 540i Touring, 520d xDrive Touring, 520d Touring, 530d xDrive Touring, 530d Touring, 540d xDrive Touring, 518d Touring",
          abPreis: 59.65,
          Rabatt: null,
          MotorleistungVon: 150,
          MotorleistungBis: 340,
          Kraftstoffart: ["Benzin", "Diesel", "Strom und Benzin"],
          "Konfig-link":
            "https://configure.bmw.at/de_AT/configure/G32/JY81/FLCRO,P0300,S01CB,S01CE,S0230,S02PA,S02VB,S02VC,S02WT,S0302,S0423,S0428,S0481,S0494,S04KG,S04T8,S04UR,S0534,S0548,S0552,S05AC,S05AV,S05DM,S0654,S06AC,S06AE,S06AK,S06C4,S06NS,S06U3,S0851,S0879,S08KB,S08R9,S08TF,S08WL?expanded=true",
          imgLink: "https://placehold.co/600x400/000000/FFFFFF/png",
          default: true,
        },
      ],
      "BMW M4 Cabrio": [
        {
          autoHersteller: "BMW",
          name: "Bmw M4 Competition M xDrive",
          Ausstattungsvariante: "M4 Competition M xDrive",
          abPreis: 128.35,
          Rabatt: null,
          MotorleistungVon: 510,
          MotorleistungBis: 510,
          Kraftstoffart: ["Benzin"],
          "Konfig-link":
            "https://configure.bmw.at/de_AT/configure/G83/31BA/FLKSW,P0300,S01CB,S01DF,S01MB,S01U0,S0230,S02PA,S02T4,S02VB,S02VC,S02VF,S0302,S0428,S0430,S0431,S0459,S0488,S0493,S0494,S04AT,S04NE,S0508,S0534,S0544,S0548,S05AV,S05DA,S0654,S06AE,S06AF,S06AK,S06C4,S06NX,S06PA,S06U2,S06VB,S06WC,S0712,S0760,S0775,S07M9,S0851,S0879,S08KA,S08R9,S08TF,S08WQ?expanded=true",
          imgLink: "https://placehold.co/600x400/000000/FFFFFF/png",
          default: true,
        },
      ],
      "BMW M4 Coupé": [
        {
          autoHersteller: "BMW",
          name: "Bmw M4 Coupé ",
          Ausstattungsvariante:
            "M4 Coupé, M4 Competition M Drive, M4 Competition Coupé",
          abPreis: 111.4,
          Rabatt: null,
          MotorleistungVon: 480,
          MotorleistungBis: 510,
          Kraftstoffart: ["Benzin"],
          "Konfig-link":
            "https://configure.bmw.at/de_AT/configure/G82/51AZ/FLKSW,P0300,S01CB,S01DF,S01T5,S0230,S02PA,S02T4,S02VB,S02VC,S02VF,S0302,S0428,S0430,S0431,S0459,S0488,S0493,S0494,S04AT,S04NE,S0534,S0544,S0548,S05AV,S05DA,S05DM,S0654,S06AE,S06AF,S06AK,S06C4,S06NX,S06U2,S06VB,S06WC,S0712,S0760,S0775,S0851,S0879,S08EK,S08KA,S08R9,S08TF,S08WQ?expanded=true",
          imgLink: "https://placehold.co/600x400/000000/FFFFFF/png",
          default: true,
        },
      ],
      "BMW 4er Coupe": [
        {
          autoHersteller: "BMW",
          name: "BMW 4er Coupe",
          Ausstattungsvariante:
            "420i xDrive Coupé, 420i Coupé, 430i xDrive Coupé, 430i Coupé, M440i xDrive Coupé, M440i Coupe, 420d xDrive Coupé, 420d Coupé, 430d xDrive Coupé, M440d xDrive Coupé",
          abPreis: 59.65,
          Rabatt: null,
          MotorleistungVon: 184,
          MotorleistungBis: 340,
          Kraftstoffart: ["Benzin", "Diesel"],
          "Konfig-link":
            "https://configure.bmw.at/de_AT/configure/G22/11AP/FKFSW,P0668,S01CB,S01DF,S01S3,S0230,S0255,S02PA,S02TE,S02VB,S02VC,S0302,S0428,S0430,S0431,S0493,S04AT,S04NE,S0534,S0544,S0548,S05AQ,S05DA,S05DM,S0654,S06AE,S06AF,S06AK,S06C4,S06U2,S06VB,S06WC,S0760,S0851,S0879,S08KA,S08R9,S08TF,S08WQ,S09QX?expanded=true",
          imgLink: "https://placehold.co/600x400/000000/FFFFFF/png",
          default: true,
        },
      ],
      "BMW 4er Gran Coupe": [
        {
          autoHersteller: "BMW",
          name: "BMW 4er Gran Coupe",
          Ausstattungsvariante:
            "420i Gran Coupe, 430i xDrive Gran Coupe, 430i Gran Coupe, M440i xDrive Gran Coupe, M440i Gran Coupe, 420d xDrive Gran Coupe, 420d Gran Coupe, 430d xDrive Gran Coupe",
          abPreis: 55.3,
          Rabatt: null,
          MotorleistungVon: 184,
          MotorleistungBis: 374,
          Kraftstoffart: ["Benzin", "Diesel"],
          "Konfig-link":
            "https://configure.bmw.at/de_AT/configure/G26/11AV/FKFSW,P0668,S01CB,S01DF,S0230,S0255,S02PA,S02TE,S02VB,S02VC,S0302,S03F0,S0428,S0430,S0431,S0493,S04AT,S04NE,S0534,S0544,S0548,S05AQ,S05DA,S05DM,S0654,S06AE,S06AF,S06AK,S06C4,S06U2,S06VB,S06WC,S0760,S0851,S0879,S08KA,S08R9,S08TF,S08WM,S08WQ,S09QX?expanded=true",
          imgLink: "https://placehold.co/600x400/000000/FFFFFF/png",
          default: true,
        },
      ],
      "BMW 3er Limousine": [
        {
          autoHersteller: "BMW",
          name: "BMW 3er Limousine",
          Ausstattungsvariante:
            "320e Limousine, 330e Drive Limousine, 330e Limousine, 330e Limousine, M340i Drive Limousine, 330i Drive Limousine, 330i Limousine, 320i xDrive Limousine, 320i Limousine, 316d Limousine, 318d Limousine, 320d Drive Limousine, 320d Limousine, M340d Drive Limousine, 330d Drive Limousine, 330d Limousine",
          abPreis: 48.6,
          Rabatt: null,
          MotorleistungVon: 122,
          MotorleistungBis: 374,
          Kraftstoffart: ["Benzin", "Diesel"],
          "Konfig-link":
            "https://configure.bmw.at/de_AT/configure/G23/11AT/FKFSW,P0668,S01CB,S01DF,S01S3,S0230,S0255,S02PA,S02TE,S02VB,S02VC,S0302,S0428,S0430,S0431,S0493,S04AT,S04NE,S0534,S0544,S0548,S05AQ,S05DA,S05DM,S0654,S06AE,S06AF,S06AK,S06C4,S06U2,S06VB,S06WC,S0760,S0851,S0879,S08KA,S08R9,S08TF,S08WQ,S09QX?expanded=true",
          imgLink: "https://placehold.co/600x400/000000/FFFFFF/png",
          default: true,
        },
      ],
      "BMW 3er Touring": [
        {
          autoHersteller: "BMW",
          name: "BMW 3er Touring",
          Ausstattungsvariante:
            "320e Touring, 330e Drive Touring, 330e Touring, 330e Touring, M340i Drive Touring, 330i Drive Touring, 330i Touring, 320i xDrive Touring, 320i Touring, 316d Touring, 318d Touring, 320d Drive Touring, 320d Touring, M340d Drive Touring, 330d Drive Touring, 330d Touring",
          abPreis: 48.6,
          Rabatt: null,
          MotorleistungVon: 122,
          MotorleistungBis: 374,
          Kraftstoffart: ["Benzin", "Diesel"],
          "Konfig-link":
            "https://configure.bmw.at/de_AT/configure/G23/11AT/FKFSW,P0668,S01CB,S01DF,S01S3,S0230,S0255,S02PA,S02TE,S02VB,S02VC,S0302,S0428,S0430,S0431,S0493,S04AT,S04NE,S0534,S0544,S0548,S05AQ,S05DA,S05DM,S0654,S06AE,S06AF,S06AK,S06C4,S06U2,S06VB,S06WC,S0760,S0851,S0879,S08KA,S08R9,S08TF,S08WQ,S09QX?expanded=true",
          imgLink: "https://placehold.co/600x400/000000/FFFFFF/png",
          default: true,
        },
      ],
      "BMW 2er Coupe": [
        {
          autoHersteller: "BMW",
          name: "BMW 2er Coupe",
          Ausstattungsvariante:
            "218i Coupé, 220i Coupé, 230i Coupé, M240i Drive Coupé, M240i Coupé, 220d Coupé",
          abPreis: 42.5,
          Rabatt: null,
          MotorleistungVon: 156,
          MotorleistungBis: 374,
          Kraftstoffart: ["Benzin", "Diesel"],
          "Konfig-link":
            "https://configure.bmw.at/de_AT/configure/G42/61CM/FKFSW,P0668,S01CB,S01DF,S01S3,S0230,S0255,S02PA,S02TE,S02VB,S02VC,S0428,S0431,S0493,S04NE,S04P6,S0508,S0534,S0544,S0548,S05AQ,S05DA,S05DC,S0654,S06AE,S06AF,S06AK,S06C4,S06U2,S06VB,S06WC,S0760,S0851,S0879,S08KA,S08R9,S08TF,S08WQ,S0925,S09QX?expanded=true",
          imgLink: "https://placehold.co/600x400/000000/FFFFFF/png",
          default: true,
        },
      ],
      "BMW 2er Gran Coupe": [
        {
          autoHersteller: "BMW",
          name: "BMW 2er Gran Coupe",
          Ausstattungsvariante:
            "218i Gran Coupé, 220i Drive Gran Coupé, 220i Gran Coupé, M235i Drive Gran Coupé, 216d Gran Coupé, 218d Gran Coupé, 220d Drive Gran Coupé, 220d Gran Coupé",
          abPreis: 42.5,
          Rabatt: null,
          MotorleistungVon: 156,
          MotorleistungBis: 374,
          Kraftstoffart: ["Benzin", "Diesel"],
          "Konfig-link":
            "https://configure.bmw.at/de_AT/configure/G42/61CM/FKFSW,P0668,S01CB,S01DF,S01S3,S0230,S0255,S02PA,S02TE,S02VB,S02VC,S0428,S0431,S0493,S04NE,S04P6,S0508,S0534,S0544,S0548,S05AQ,S05DA,S05DC,S0654,S06AE,S06AF,S06AK,S06C4,S06U2,S06VB,S06WC,S0760,S0851,S0879,S08KA,S08R9,S08TF,S08WQ,S0925,S09QX?expanded=true",
          imgLink: "https://placehold.co/600x400/000000/FFFFFF/png",
          default: true,
        },
      ],
      "BMW 1er": [
        {
          autoHersteller: "BMW",
          name: "BMW 1er",
          Ausstattungsvariante:
            "116i, 118i, 120i, 128ti, M135i Drive, 116d, 118d, 120d Drive",
          abPreis: 31.238,
          Rabatt: null,
          MotorleistungVon: 109,
          MotorleistungBis: 306,
          Kraftstoffart: ["Benzin", "Diesel"],
          "Konfig-link":
            "https://configure.bmw.at/de_AT/configure/F40/7K11/FEGAT,P0668,S01CB,S01DF,S01DZ,S0230,S0240,S0249,S025R,S02PA,S02VB,S02VC,S0423,S0428,S04GN,S04NE,S0548,S05AQ,S05DA,S0654,S06AE,S06AF,S06AK,S06C4,S06U2,S06WB,S0851,S0879,S08KA,S08R9,S08TF,S08WL,S09QX?expanded=true",
          imgLink: "https://placehold.co/600x400/000000/FFFFFF/png",
          default: true,
        },
      ],
      "BMW Z4": [
        {
          autoHersteller: "BMW",
          name: "BMW Z4",
          Ausstattungsvariante: "sDrive20i, sDrive30i, M40i",
          abPreis: 31.238,
          Rabatt: null,
          MotorleistungVon: 109,
          MotorleistungBis: 306,
          Kraftstoffart: ["Benzin"],
          "Konfig-link":
            "https://configure.bmw.at/de_AT/configure/G29/HF11/FMASW,P0300,S01CB,S01DF,S01P1,S0230,S02PA,S02VB,S02VC,S0302,S0387,S0428,S0431,S0465,S0478,S0493,S0494,S04GN,S04NE,S0508,S0534,S0544,S0548,S0563,S05AV,S0654,S0676,S06AE,S06AF,S06AK,S06C4,S06U3,S0715,S0851,S0879,S08KA,S08R9,S08TF,S08WL,S09QX?expanded=true",
          imgLink: "https://placehold.co/600x400/000000/FFFFFF/png",
          default: true,
        },
      ],
    },
  });
});
router.get("/m", (req, res) => {
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
