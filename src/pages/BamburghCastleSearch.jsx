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
import { FaAngleLeft, FaBus, FaWalking } from "react-icons/fa";
import "./BamburghCastleSearch.css";
import axios from "axios";

const BamburghCastleSearch = () => {
    const localStorage = window.localStorage;
    // Using react hooks to set the journey details to the page
    const [destination, setDestination] = useState("");
    const time = localStorage.getItem("time");

    const [busData, setBusData] = useState([]);

    // On page load, useEffect is called which will set the destination to display and bus data will be called from backend via axios
    useEffect(() => {
        setDestination(localStorage.getItem("destination"));
        axios.get("/bb0ecd3fc18b41c69b6e52e281fa21c3").then((response) => {
            const departureBus = response.data.obj.filter(x => {
                const d = x.departureTime.split(" ")[0];
                const h = d.split(":")[0];
                const m = d.split(":")[1];
                const t = h + m;
                return x.returnTrip === "0" && t >= time;
            });
            setBusData(departureBus);
        });
    }, []);

    return (
        <IonContent className="ion-margin-bottom">
            <IonRow className="bamburghbackgroundimage">
                <IonCol className="cardcolumn">
                    <IonRow className="ion-padding-start">
                        <IonCol className="ion-padding-start ion-padding-top" size="12">
                            <Link to={ROUTES.PLANJOURNEY}>
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
                                    <IonText color="light" className="journeytext">Travelling to: {destination}</IonText>
                                </IonRow>
                                <IonRow className="optionsrow">
                                    <IonLabel className="ticketboxlabel">Outbound Journey Options:</IonLabel>
                                </IonRow>
                                {/* Displays buses and their timings */}
                                {busData.length > 0 ? busData.map((eachBus) => (
                                    <IonRow key={eachBus.id} className="ticketoption1 ion-margin ion-justify-content-center">
                                        <IonCol tabIndex={eachBus.id} className="busDetailsCol">
                                            <Link onClick={() => {
                                                localStorage.setItem("outboundBus", JSON.stringify(eachBus));
                                                let d = eachBus.arrivalTime.split(" ")[0];

                                                let m = d.split(':')[0];

                                                let n = d.split(':')[1];

                                                var tm = m + n;
                                                localStorage.setItem("arrivalTime", tm);
                                            }} to={ROUTES.BAMBURGHCASTLESEARCHRETURN}>
                                                <button className="busDetailsLink" >
                                                    <IonRow key={eachBus.id}>
                                                        <IonCol size="6" className="ion-justify-content-start">
                                                            <IonText className="option1text1">£{eachBus.ticketFee} per person</IonText>
                                                        </IonCol>
                                                        <IonCol size="6" className="ion-justify-content-end">
                                                            <IonText className="option1text2">{eachBus.departureTime}-{eachBus.arrivalTime}</IonText>
                                                        </IonCol>
                                                    </IonRow>
                                                    <IonRow className="ion-justify-content-center ion-align-items-center">
                                                        <IonCol size="12" className="ion-text-center">
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

export default BamburghCastleSearch;