import { useEffect, useState } from "react";
import * as ROUTES from "../constants/routes";
import { Link } from "react-router-dom";
import axios from "axios";
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
import "./AlnwickCastleSearch.css";

const AlnwickCastleSearch = () => {
    const localStorage = window.localStorage;
    // Using react hooks to set the journey details to the page
    const [destination, setDestination] = useState("");
    const time = localStorage.getItem("time");
    const source = localStorage.getItem("source");
    const [busData, setBusData] = useState([]);

    // On page load, useEffect is called which will set the destination to display and bus data will be called from backend via axios
    useEffect(() => {
        setDestination(localStorage.getItem("destination"));
        axios.get("/bbc1ef6066024a3aa4913e8cfe5b2ecd").then((response) => {
            const departureBus = response.data.obj.filter(x => {
                const d = x.departureTime.split(" ")[0];
                const h = d.split(":")[0];
                const m = d.split(":")[1];
                const t = h + m;
                const src = x.departureBusStop.split(" ")[0].toLowerCase();
                return x.returnTrip === "0" && t >= time && src === source;
            });
            departureBus.sort((a, b) => {
                const aTime = a.departureTime.split(" ")[0];
                const bTime = b.departureTime.split(" ")[0];
                const aHour = aTime.split(":")[0];
                const aMin = aTime.split(":")[1];
                const aTimeNum = parseInt(aHour + aMin);
                const bHour = bTime.split(":")[0];
                const bMin = bTime.split(":")[1];
                const bTimeNum = parseInt(bHour + bMin);
                return aTimeNum - bTimeNum;
            });
            setBusData(departureBus);
        });
    }, [localStorage,time,source]);

    return (
        <IonContent className="ion-margin-bottom">
            <IonRow className="alnwickbackgroundimage">
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
                                    <IonRow key={eachBus.id} className="ticketoption1 ion-justify-content-center">
                                        <IonCol tabIndex={eachBus.id} className="busDetailsCol">
                                            <Link onClick={() => {
                                                localStorage.setItem("outboundBus", JSON.stringify(eachBus));
                                                let d = eachBus.arrivalTime.split(" ")[0];

                                                let m = d.split(':')[0];

                                                let n = d.split(':')[1];

                                                var tm = m + n;
                                                localStorage.setItem("arrivalTime", tm);
                                            }} to={ROUTES.ALNWICKCASTLESEARCHRETURN}>
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
                                                            <IonText className="optiontext1" color="medium">{">"}</IonText>
                                                            <FaBus size={24} style={{ color: "#475569" }} />
                                                            <IonText className="optiontext1" color="medium">{eachBus.busId}</IonText>
                                                            <IonText className="optiontext1" color="medium">{">"}</IonText>
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

export default AlnwickCastleSearch;