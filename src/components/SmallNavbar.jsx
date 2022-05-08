import {
  IonButton,
  IonButtons,
  IonCol,
  IonHeader,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPopover,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import "./Navbar.css";

const Navbar = () => {
  return (
    <IonHeader className="ion-border-bottom noShowSmall">
      <IonToolbar>
        <IonRow className="ion-align-items-center ion-margin-top">
          {/* Navbar logo */}
          <IonCol size="auto" className="ion-margin-start">
            <IonImg
              src="/assets/logo.png"
              className="logoImageNavbar"
            />
          </IonCol>
          {/* Company name */}
          <IonCol className="ion-margin-start ion-text-center ion-justify-content-center">
            <IonTitle
              className="smallTitle ion-text-center ion-justify-content-center"
              color="brand"
            >
              Trippy Castle
            </IonTitle>
          </IonCol>
          {/* Pages options */}
          <IonCol size="auto">
            <IonButtons className="ion-justify-content-end">
              {/* On click of the IonMenuButton, the popover with options to different pages opens */}
              <IonButton id="side-button">
                <IonMenuButton color="brand" autoHide="false" />
              </IonButton>
              {/* Popover with List of all pages */}
              <IonPopover trigger="side-button" side="top">
                <IonList>
                  {/* Links to pages */}
                  <Link to={ROUTES.HOME} className="linkStyles">
                    <IonItem button>
                      <IonLabel color="brand" className="ion-padding">
                        Home
                      </IonLabel>
                    </IonItem>
                  </Link>
                  <Link to={ROUTES.PLANJOURNEY} className="linkStyles">
                    <IonItem button>
                      <IonLabel color="brand" className="ion-padding">
                        Plan Journey
                      </IonLabel>
                    </IonItem>
                  </Link>
                  <Link to={ROUTES.CONTACT} className="linkStyles">
                    <IonItem button>
                      <IonLabel color="brand" className="ion-padding">
                        Contact
                      </IonLabel>
                    </IonItem>
                  </Link>
                  <Link to={ROUTES.ABOUT_US} className="linkStyles">
                    <IonItem button>
                      <IonLabel color="brand" className="ion-padding">
                        About Us
                      </IonLabel>
                    </IonItem>
                  </Link>
                </IonList>
              </IonPopover>
            </IonButtons>
          </IonCol>
        </IonRow>
      </IonToolbar>
    </IonHeader>
  );
};

export default Navbar;
