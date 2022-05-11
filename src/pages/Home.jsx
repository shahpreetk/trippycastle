/**
 * Hyphenated classNames are default to ionic
 * Example: ion-margin
 * Ionic docs: https://ionicframework.com/docs/layout/css-utilities#element-margin
 *
 * CamelCase classNames are custom overriden css classes
 * Example: backgroundImage
 * For every .js/.jsx file, there is a corresponding .css file where custom css classes were overriden
 */
/* OM: import links and routes */
import { useEffect, useState } from "react";
import axios from "axios";

import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonImg,
  IonRow,
  IonText,
  IonTitle,
} from "@ionic/react";
import Footer from "../components/Footer";
import "./Home.css";


const Home = () => {
  const [castleData, setCastleData] = useState([]);
  useEffect(() => {
    axios.get("/").then((response) => {
      setCastleData(response.data.obj);
    }).catch((error) => {
      console.log(error.message);
    });
  }, []);

  return (
    <IonContent className="ion-margin-bottom">
      {/* Hero sections */}
      <IonRow className="backgroundImage">
        <IonCol>
          <IonRow className="wrapper ion-justify-content-center">
            <IonCol className="ion-justify-content-center">
              <IonImg
                src="/assets/logo.png"
                className="logo"
              />
            </IonCol>
          </IonRow>
          <IonRow className="ion-margin">
            <IonCol>
              <IonTitle
                className="ion-text-center ion-margin-top ion-margin-top"
                color="light"
                size="large"
              >
                <h1>Where To?</h1>
              </IonTitle>
            </IonCol>
          </IonRow>
        </IonCol>
      </IonRow>
      {/* Castles display section */}
      <IonRow className="ion-margin-vertical">
        {/* castleData currently comes from data folder */}
        {castleData.length > 0 ? castleData.map((eachCastle) => (
          <IonCol key={eachCastle.id}>
            <IonCard className="card">
              <IonImg
                className="imageSize"
                src={eachCastle.imgSrcPath}
                alt={eachCastle.name}
              />
              <IonCardHeader>
                <IonCardTitle>{eachCastle.name}</IonCardTitle>
                <IonCardSubtitle>£{eachCastle.ticketFee} per person</IonCardSubtitle>
                <IonCardSubtitle>Accessibility options - {eachCastle.accessibility}</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>{eachCastle.description}</IonCardContent>
            </IonCard>
          </IonCol>
        )) : (
          <IonCol size="12" className="ion-text-center">
          <IonText color="danger">
            <h2>The Server is Sleeping Zzzz...</h2>
            <h2>Please come back later 😁</h2>
          </IonText>
        </IonCol>)
        }
      </IonRow>
      <Footer />
    </IonContent>
  );
};

export default Home;
