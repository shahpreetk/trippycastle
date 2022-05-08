import { useEffect, useState } from "react";
import {
    IonButton,
    IonContent,
    IonRow,
    IonCard,
    IonCol,
    IonText,
    IonImg,
    IonThumbnail,
} from "@ionic/react";
import Footer from "../components/Footer";
import "./Itinerary.css";
import { FaAngleLeft, FaBus } from "react-icons/fa";
import { BsArrowDown } from "react-icons/bs";
import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import axios from "axios";

const Itinerary = () => {
    // Using react hooks to set the journey details to the page
    const localStorage = window.localStorage;
    const [outboundJourney, setOutboundJourney] = useState();
    const [returnJourney, setReturnJourney] = useState();
    const [travellers, setTravellers] = useState();
    const [date, setDate] = useState();
    const destination = localStorage.getItem("destination");
    const [castleData, setCastleData] = useState([]);

    useEffect(() => {
        axios.get("/").then((response) => {
            const castle = response.data.obj.filter(x => {
                return x.name === destination;
            });
            setCastleData(castle);
        });
        setOutboundJourney(JSON.parse(localStorage.getItem("outboundBus")));
        setReturnJourney(JSON.parse(localStorage.getItem("returnBus")));
        setTravellers(localStorage.getItem("travellers"));
        setDate(localStorage.getItem("date").split("T")[0]);
    }
        , []);

    return (
        <IonContent className="ion-margin-bottom">
            <IonRow className="itinerarybackgroundimage">
                <IonCol className="cardcolumn">
                    <IonRow className="ion-padding-start">
                        <IonCol className="ion-padding-start ion-padding-top" size="12">
                            <Link to={ROUTES.ALNWICKCASTLESEARCHRETURN}>
                                <IonButton className="jollyButton ion-padding">
                                    <FaAngleLeft size={24} />
                                    <IonText className=" mytext ion-padding">Back</IonText>
                                </IonButton>
                            </Link>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol size="12">
                            <IonCard className="ticketboxcarditinerary ion-padding">
                                <IonRow className="ticketboxrow ion-align-items-baseline">
                                    <IonCol size="8" className="ion-text-start">
                                        {/* Displays date of planned journey */}
                                        <IonText className="ticketboxtext ticketboxtext1">Itinerary</IonText>
                                        <IonText className="ticketboxtext">{" ---> "}</IonText>
                                        <IonText className="ticketboxtext2">{date}</IonText>
                                    </IonCol>
                                    <IonCol size="4" className="ion-text-end">
                                        <IonText className="ticketboxtext4">No. </IonText>
                                        <IonText className="ticketboxtext4">0001</IonText>
                                    </IonCol>
                                </IonRow>
                                {outboundJourney && <IonRow className="ticketboxrow">
                                    <IonCol size="12">
                                        <IonRow>
                                            {/* Displays select bus timing for outbound journey */}
                                            <IonCol>
                                                <IonText color="brand" className="journeytype">
                                                    Outbound Journey:
                                                </IonText>
                                            </IonCol>
                                        </IonRow>
                                        <IonRow>
                                            <IonCol size="6">
                                                <IonText className="ticketboxtext5">{outboundJourney.departureTime}</IonText>
                                            </IonCol>
                                            <IonCol size="6">
                                                <IonText className="ticketboxtext5">{outboundJourney.departureBusStop}</IonText>
                                            </IonCol>
                                        </IonRow>
                                        <IonRow className="ion-align-items-center">
                                            <IonCol size="5" className="ion-text-end">
                                                <FaBus size={24} />
                                                <IonText className="optionimage1 ion-no-margin" color="medium">{"  " + outboundJourney.busId}</IonText>
                                            </IonCol>
                                            <IonCol size="1" className="ion-text-center">
                                                <BsArrowDown size={24} style={{ color: "black" }} />
                                            </IonCol>
                                            <IonCol size="6" className="ion-text-start">
                                                <IonText className="ticketboxtext6">{outboundJourney.description}</IonText>
                                            </IonCol>
                                        </IonRow>
                                        <IonRow>
                                            <IonCol size="6">
                                                <IonText className="ticketboxtext5">{outboundJourney.arrivalTime}</IonText>
                                            </IonCol>
                                            <IonCol size="6">
                                                <IonText className="ticketboxtext5">{outboundJourney.arrivalBusStop}</IonText>
                                            </IonCol>
                                        </IonRow>
                                        <IonRow>
                                            <IonCol className="ion-text-center">
                                                {outboundJourney.walkingTime && <IonText>Walk {outboundJourney.walkingTime} from {outboundJourney.arrivalBusStop} to reach {destination}</IonText>}
                                            </IonCol>
                                        </IonRow>
                                    </IonCol>
                                </IonRow>}

                                {returnJourney && <IonRow className="ticketboxrow">
                                    <IonCol size="12">
                                        <IonRow>
                                            <IonCol>
                                                {/* Displays bus timing for return journey */}
                                                <IonText color="brand" className="journeytype">
                                                    Return Journey:
                                                </IonText>
                                            </IonCol>
                                        </IonRow>
                                        <IonRow>
                                            <IonCol className="ion-text-center">
                                                {returnJourney.walkingTime && <IonText>Walk {returnJourney.walkingTime} from {destination} to reach {returnJourney.departureBusStop}</IonText>}
                                            </IonCol>
                                        </IonRow>
                                        <IonRow>
                                            <IonCol size="6">
                                                <IonText className="ticketboxtext5">{returnJourney.departureTime}</IonText>
                                            </IonCol>
                                            <IonCol size="6">
                                                <IonText className="ticketboxtext5">{returnJourney.departureBusStop}</IonText>
                                            </IonCol>
                                        </IonRow>
                                        <IonRow className="ion-align-items-center">
                                            <IonCol size="5" className="ion-text-end">
                                                <FaBus size={24} />
                                                <IonText className="optionimage1 ion-no-margin" color="medium">{" " + returnJourney.busId}</IonText>
                                            </IonCol>
                                            <IonCol size="1" className="ion-text-center">
                                                <BsArrowDown size={24} />

                                            </IonCol>

                                            <IonCol size="6" className="ion-text-start">
                                                <IonText className="ticketboxtext8">{returnJourney.description}</IonText>
                                            </IonCol>
                                        </IonRow>
                                        <IonRow>
                                            <IonCol size="6">
                                                <IonText className="ticketboxtext5">{returnJourney.arrivalTime}</IonText>
                                            </IonCol>
                                            <IonCol size="6">
                                                <IonText className="ticketboxtext5">{returnJourney.arrivalBusStop}</IonText>
                                            </IonCol>
                                        </IonRow>

                                    </IonCol>

                                </IonRow>}


                                {/* Displays castle opening times */}
                                {castleData.length > 0 ? (
                                    <><IonRow className="ticketboxrow ion-padding ">
                                        <IonText className="ticketboxtext7">{destination} Opening Times: {castleData[0].openingTime} - {castleData[0].closeTime}</IonText>
                                    </IonRow>

                                        <IonRow className="ion-margin-top">
                                            {/* Displays bus and castle prices */}
                                            <IonCol size="12" className="ion-text-left">
                                                <IonText className="ticketboxtext7">Bus Ticket Price: £{outboundJourney.ticketFee} + £{returnJourney.ticketFee}</IonText>
                                                <br />
                                                <IonText className="ticketboxtext7">Castle Ticket Price: £{castleData[0].ticketFee}</IonText>
                                            </IonCol>
                                            <IonCol size="12">
                                                <IonRow className="ion-align-items-center">
                                                    <IonCol className="ion-justify-content-start">
                                                        <IonThumbnail >
                                                            <IonImg className="optionimage6"></IonImg>
                                                        </IonThumbnail>
                                                    </IonCol>
                                                    <IonCol className="ion-text-right ion-justify-content-end">
                                                        {/* Displays total price including all travellers */}
                                                        <IonText className="ticketboxtext7">Total Price: £{((castleData[0].ticketFee + parseInt(outboundJourney.ticketFee) + parseInt(returnJourney.ticketFee)) * travellers).toFixed(2)}</IonText>
                                                    </IonCol>
                                                </IonRow>
                                            </IonCol>
                                        </IonRow></>) : <p>An error occured! Please try again</p>}
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonCol>
            </IonRow>
            <Footer />
        </IonContent>

    );
};

export default Itinerary;