import {
  IonCard,
  IonCardContent,
  IonContent,
  IonCol,
  IonRow,
  IonText,
} from "@ionic/react";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <IonContent className="ion-no-padding ion-no-margin">
      <IonRow className="ion-padding-top mainrow ion-justify-content-center" style={{ backgroundColor: "#02448e" }}>
        <IonCol className="ion-padding ion-margin-horizontal ion-margin-top" sizeMd="5" sizeSm="12">
          <br />
          <IonText color="light">
            <h1>About Us</h1>
          </IonText>
          <IonText color="light">
            <h3>
              Trippy Castle was founded by the members of Team 4 in Newcastle University's Computer Science MSc course <b>Software Engineering and Team Project</b> module. The goal of the project is to create a functional website and/or app to access and book bus journeys and castle tickets.
            </h3>
          </IonText>
          <IonText color="light">
            <h2>Meet Team 4!</h2>
          </IonText>
          <IonText color="light">
            <h3><b>Hao Xue</b></h3>
            MSc Computer Science at Newcastle University
          </IonText>
          <IonText color="light">
            <h3><b>Oliver Miller</b></h3>
            MSc Computer Science at Newcastle University
          </IonText>
          <IonText color="light">
            <h3><b>Preet Shah</b></h3>
            MSc Computer Science at Newcastle University
          </IonText>
          <IonText color="light">
            <h3><b>Sibo Cheng</b></h3>
            MSc Computer Science at Newcastle University
          </IonText>
          <IonText color="light">
            <h3><b>Suna Fawal</b></h3>
            MSc Computer Science at Newcastle University
          </IonText>
          <IonText color="light">
            <h3><b>Thomas DeLillo</b></h3>
            MSc Computer Science at Newcastle University
          </IonText>
        </IonCol>

        <IonCol className="ion-padding-bottom ion-margin-horizontal ion-margin-top" sizeMd="5" sizeSm="12" style={{ backgroundColor: "#02448e", width: "95%" }} >
          <br />
          <br />
          <IonCard className="ion-margin-top" style={{ marginLeft: "0px", backgroundColor: "#ffffff" }} >
            <IonCardContent>
              <img alt="newcastle university building" src="/assets/newcastlebuilding.jpg" />
              <IonRow>
                <IonRow>
                  <img alt="newcastle university logo" src="/assets/newcastlelogo.jpg" />
                </IonRow>
                <IonRow>
                  <h3>Founded in 1963, Newcastle University is a member of the Russell Group and is involved in world renowned research, especially concerning science and medicine.</h3>
                </IonRow>
                <IonRow>
                  <h3>Newcastle University's Computer Science MSc comprises of students from all around the world with academic backgrounds including Biology, Journalism, History and more.</h3>
                </IonRow>
                <IonRow>
                  <h3>Because of these students' multidisciplinary backgrounds, they cultivate a unique perspective in computing whcih will excel them in their future careers and beyond.</h3>
                </IonRow>
              </IonRow>
            </IonCardContent>
          </IonCard>
        </IonCol>
      </IonRow>
      {/* Displays footer after page content */}
      <Footer />
    </IonContent>
  );
};

export default AboutUs;