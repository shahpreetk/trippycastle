import { useEffect, useState } from "react";
import * as ROUTES from "../constants/routes";
import { Link } from "react-router-dom";
import {
    IonButton,
    IonContent,
    IonRow,
    IonCard,
    IonLabel,
    IonText,
    IonCol,
} from "@ionic/react";
import Footer from "../components/Footer";
import { FaAngleLeft,FaBus, FaWalking } from "react-icons/fa";
import "./BarnardCastleSearchReturn.css";
import axios from "axios";

const BarnardCastleSearchReturn = () => {
    const localStorage = window.localStorage;
    // Using react hooks to set the journey details to the page
    const source = localStorage.getItem("source");
    const [busData, setBusData] = useState([]);
    let time = localStorage.getItem("arrivalTime");

    // On page load, useEffect is called which will set the destination to display in the dropdown
    useEffect(() => {
        axios.get("/c8fa379a934a4097b23706ce105accce").then((response) => {

            const returnBus = response.data.obj.filter(x => {
                const d = x.departureTime.split(" ")[0];
                const h = d.split(":")[0];
                const m = d.split(":")[1];
                const t = h + m;
                const leavingTime = parseInt(time) + parseInt('0200');
                const src = x.arrivalBusStop.split(" ")[0].toLowerCase();
                return x.returnTrip === "1" && parseInt(t)
                    >= leavingTime && src === source;
            });
            setBusData(returnBus);
        });

    }, [source, time]);
    return (

        <IonContent className="ion-margin-bottom">
            <IonRow className="barnardreturnbackgroundimage">
                <IonCol className="cardcolumn">
                    <IonRow className="ion-padding-start">
                        <IonCol className="ion-padding-start ion-padding-top" size="12">
                            <Link to={ROUTES.BARNARDCASTLESEARCH}>
                                <IonButton className="jollyButton ion-padding">
                                    <FaAngleLeft size={24} />
                                    <IonText className=" mytext ion-padding">Back</IonText>
                                </IonButton>
                            </Link>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size="12">
                            <IonCard className="ticketboxcard">
                                <IonRow className="ion-padding ion-justify-content-center">
                                    {/* Displays destination to where the buses will travel */}
                                    <IonText color="light" className="journeytext">Travelling to: {source}</IonText>
                                </IonRow>

                                <IonRow className="optionsrow">
                                    <IonLabel className="ticketboxlabel">Return Journey Options:</IonLabel>
                                </IonRow>
                                {/* Displays buses and their timings */}
                                {busData.length > 0 ? busData.map((eachBus) => (
                                    <IonRow key={eachBus.id} className="ticketoption1 ion-margin ion-justify-content-center">
                                        <IonCol tabIndex={eachBus.id} className="busDetailsCol">
                                            <Link onClick={() => {
                                                localStorage.setItem("returnBus", JSON.stringify(eachBus));
                                            }} to={ROUTES.ITINERARY}>
                                                <button className="busDetailsLink" >
                                                    <IonRow>
                                                        <IonCol className="ion-justify-content-start">
                                                            <IonText className="option1text1">£{eachBus.ticketFee} per person</IonText>
                                                        </IonCol>
                                                        <IonCol className="ion-justify-content-end">
                                                            <IonText className="option1text2">{eachBus.departureTime}-{eachBus.arrivalTime}</IonText>
                                                        </IonCol>
                                                    </IonRow>
                                                    <IonRow className="ion-justify-content-center ion-align-items-center">
                                                        <IonCol className="ion-text-center">
                                                            <FaWalking size={28} style={{ color: "#475569" }} />
                                                            <IonText className="optiontext1 ion-margin-horizontal" color="medium">{">"}</IonText>
                                                            <FaBus size={24} style={{ color: "#475569" }} />

                                                            <IonText className="optiontext2 ion-margin-start" color="medium">{eachBus.busId}</IonText>
                                                            <IonText className="optiontext2 ion-margin-horizontal" color="medium">{">"}</IonText>
                                                            <FaWalking size={28} style={{ color: "#475569" }} />

                                                        </IonCol>
                                                    </IonRow>
                                                </button>
                                            </Link>
                                        </IonCol>
                                    </IonRow>
                                )) : <IonRow>
                                    <IonText className="ion-margin" color="light"><h2>No buses found</h2></IonText>
                                </IonRow>}
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonCol>
            </IonRow >
            <Footer />
        </IonContent >
    );
};

export default BarnardCastleSearchReturn;