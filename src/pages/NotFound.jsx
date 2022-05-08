import {
  IonContent, IonImg,
} from "@ionic/react";
import Footer from "../components/Footer";
import "./NotFound.css";

const NotFound = () => {
  return (
    <IonContent>
      <h1 className="wrapper">Sorry, Page Not Found </h1>
      <IonImg className="notFound" src="/assets/404.jpeg">
      </IonImg>
      {/* Displays footer after page content */}
      <Footer />
    </IonContent>
  );
};

export default NotFound;
