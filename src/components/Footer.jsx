import { IonCol, IonFooter, IonRow } from "@ionic/react";
import './Footer.css';

const Footer = () => {
  return (
    <IonFooter>
      <IonRow className="sm:ion-wrapper">
        <IonCol className="ion-margin-start ion-text-center colSize">
          <h6 className="creators">Created with ❤️ by Team 4</h6>
        </IonCol>
        <IonCol className="ion-margin-end ion-justify-content-end ion-text-center colSize">
          <p className="creators">Copyright © 2022</p>
        </IonCol>
      </IonRow>
    </IonFooter>
  );
}

export default Footer