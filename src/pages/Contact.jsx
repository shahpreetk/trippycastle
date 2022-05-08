import {
  IonCard,
  IonCardContent,
  IonContent,
  IonCol,
  IonLabel,
  IonRow,
  IonText,
  IonThumbnail,
  IonItem
} from "@ionic/react";
import Footer from "../components/Footer";
import { references } from "../data/references";
import { teamEmails } from "../data/teamEmails";
import "./Contact.css";

const Contact = () => {
  return (
    <IonContent className="ion-no-padding ion-no-margin">
      <IonRow className="ion-padding-top mainrow ion-justify-content-center">
        <IonCol className="ion-padding ion-margin-horizontal ion-margin-top" sizeMd="5" sizeSm="12" style={{ backgroundColor: "#02448e" }}>
          <br />
          <IonText color="light">
            <h1>Contact Us</h1>
          </IonText>
          <IonText color="light">
            <h3>
              We are happy to answer any queries you may have.
              <br />
              Please email your queries to any of the emails below.
              <br />
              <br />
            </h3>
          </IonText>
          <IonCard className="ion-margin-top" style={{ marginLeft: "0px", backgroundColor: "#ffffff" }} >
            <IonCardContent>
              <IonRow>
                <IonCol sizeSm="12" sizeMd="6">
                  {/* Displays team email addresses */}
                  {
                    teamEmails.map((email) => (
                      <IonRow key={email.id}>
                        <IonCol>
                          <a className="emails" href={`mailto:${email.email}`}>{email.email}</a>
                        </IonCol>
                      </IonRow>
                    ))}
                </IonCol>
                <IonCol sizeSm="12" sizeMd="6">
                  <IonRow className="ion-justify-content-center">
                    <IonCol className="ion-padding-start">
                      <IonItem style={{ borderBottom: "5px solid #02448e", }}>
                        <IonThumbnail>
                          <img src="/assets/logo.png" alt="company logo" />
                        </IonThumbnail>
                        <IonLabel className="ion-margin-start labeltext" color="brand">Trippy Castle</IonLabel>
                      </IonItem>
                    </IonCol>
                  </IonRow>
                  <IonRow className="ion-text-center ion-margin-top">
                    <IonCol>
                      <IonText color="brand">
                        Urban Sciences Building, <br />
                        1 Science Square, <br />
                        Newcastle Upon Tyne, <br />
                        NE4 5TG
                      </IonText>
                    </IonCol>
                  </IonRow>
                </IonCol>
              </IonRow>
            </IonCardContent>
          </IonCard>

        </IonCol>
        <IonCol className="ion-padding-bottom ion-margin-horizontal ion-margin-top" sizeMd="5" sizeSm="12" style={{ backgroundColor: "#02448e", width: "95%" }}>
          <br />
          <br />
          <IonText color="light">
            <h3>References</h3>
          </IonText>
          {/* Displays references */}
          {references.map(reference => (
            <IonRow key={reference.id}>
              <IonCol>
                <IonText color="light">
                  <h5>{reference.name}</h5>
                </IonText>
                <a className="referencelinks" target="_blank" rel="noreferrer" href={reference.photo}><span className="fromwhere">Photo reference from:</span> {reference.photo}</a>
                <br />
                <br />
                <IonText className="fromwhere" color="light">Information from: </IonText>
                {
                  reference.info.map(eachinfo => (
                    <IonRow key={eachinfo.link} className="ion-no-margin">
                      <IonCol className="ion-no-padding">
                        <a className="referencelinks" target="_blank" rel="noreferrer" href={eachinfo.link}>{eachinfo.link}</a>
                        <br />
                        <br />
                      </IonCol>
                    </IonRow>
                  ))}
              </IonCol>
            </IonRow>
          ))}
        </IonCol>
      </IonRow>
      {/* Displays footer after page content */}
      <Footer />
    </IonContent>
  );
};

export default Contact;
