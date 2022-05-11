import {
  IonButton,
  IonCol,
  IonHeader,
  IonImg,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import "./Navbar.css";

const LargeNavbar = () => {
  return (
    <IonHeader className="noShowLarge ion-margin-bottom">
      <IonToolbar>
        <IonRow className="ion-align-items-center">
          {/* Navbar logo */}
          <IonCol size="auto" className="ion-margin-start">
            <IonImg
              className="ion-margin-start logoImageNavbar"
              src="/assets/logo.png"
              alt="trippy castles logo"
            />
          </IonCol>
          {/* Company name */}
          <IonCol size="auto">
            <IonTitle
              className="ion-text-center ion-text-uppercase ion-padding-start ion-padding-end"
              color="brand"
            >
              <span className="bigTitle">Trippy Castle</span>
            </IonTitle>
          </IonCol>
          {/* Pages options */}
          <IonCol className="ion-justify-content-end ion-text-end ion-padding-vertical ion-align-items-end">
            {/* Links to pages */}
            <Link to={ROUTES.HOME} className="linkStyles">
              <IonText color="brand" className="ion-padding">
                Home
              </IonText>
            </Link>
            <Link to={ROUTES.CONTACT} className="linkStyles">
              <IonText color="brand" className="ion-padding">
                Contact
              </IonText>
            </Link>
            <Link to={ROUTES.ABOUT_US} className="linkStyles">
              <IonText color="brand" className="ion-padding">
                About
              </IonText>
            </Link>
          </IonCol>
          {/* Plan Journey Button */}
          <IonCol className="ion-margin-end ion-text-end">
            <Link to={ROUTES.PLANJOURNEY} className="linkStyles">
              <IonButton className="jollyButton">
                <IonText className="ion-padding mytext">Plan Journey</IonText>
              </IonButton>
            </Link>

          </IonCol>
        </IonRow>
      </IonToolbar>
    </IonHeader>
  );
};

export default LargeNavbar;
