import { useState } from "react";
import * as ROUTES from "../constants/routes";
import { useHistory } from "react-router-dom";
import {
    IonContent,
    IonRow,
    IonCard,
    IonCol,
    IonDatetime,
    IonItem,
    IonLabel,
    IonText,
    IonSelect,
    IonSelectOption,
    IonButton,
} from "@ionic/react";
import Footer from "../components/Footer";
import "./PlanJourney.css";

const PlanJourney = () => {
    const history = useHistory();
    // Using react hooks to set the journey details
    const [source, setSource] = useState("");
    const [destination, setDestination] = useState("");
    const [travellers, setTravellers] = useState("1");
    const [selectedDate, setSelectedDate] = useState("");
    const [time, setTime] = useState("");

    // Setting a minimum and maximum date for the date picker
    const minDate = new Date();
    let maxDate = new Date(minDate);
    maxDate.setMonth(maxDate.getMonth() + 2);


    // functions to check if date is monday or tuesday
    function isMonday(date = new Date()) {
        return date.getDay() === 1;
    }
    function isTuesday(date = new Date()) {
        return date.getDay() === 2;
    }

    const sendDetails = e => {
        e.preventDefault();

        // Saves the journey details to local storage onClick of "GET TICKETS" button
        if (destination === "Alnwick Castle") {
            if (source !== "Newcastle Haymarket Bus Station") {
                alert("We suggest choosing Haymarket Bus Station as no buses run to Alnwick Castle from this stop");
            } else {
                const localStorage = window.localStorage;
                localStorage.setItem("source", source.split(" ")[1].toLowerCase());
                localStorage.setItem("destination", destination);
                localStorage.setItem("date", selectedDate);
                localStorage.setItem("time", time);
                localStorage.setItem("travellers", travellers);
                setTime("");
                // Routing to next page
                history.push(ROUTES.ALNWICKCASTLESEARCH);
            }
        }
        else if (destination === "Auckland Castle") {
            // Not allowing user to pick dates when castle is closed
            if ((destination === "Auckland Castle" && isMonday(new Date(selectedDate))) || (destination === "Auckland Castle" && isTuesday(new Date(selectedDate)))) {
                alert("Auckland Castle is closed on Mondays and Tuesdays");
            } else {
                if (source !== "Newcastle Eldon Square Bus Station") {
                    alert("We suggest choosing Eldon Square Bus Station as no buses run to Auckland Castle from this stop");
                } else {
                    const localStorage = window.localStorage;
                    localStorage.setItem("source", source.split(" ")[1].toLowerCase());
                    localStorage.setItem("destination", destination);
                    localStorage.setItem("date", selectedDate);
                    localStorage.setItem("time", time);

                    localStorage.setItem("travellers", travellers);
                    history.push(ROUTES.AUCKLANDCASTLESEARCH);
                }
            }


        } else if (destination === "Barnard Castle") {
            if (source !== "Newcastle Eldon Square Bus Station") {
                alert("We suggest choosing Eldon Square Bus Station as no buses run to Barnard Castle from this stop");
            } else {
                const localStorage = window.localStorage;
                localStorage.setItem("source", source.split(" ")[1].toLowerCase());
                localStorage.setItem("destination", destination);
                localStorage.setItem("date", selectedDate);
                localStorage.setItem("time", time);

                localStorage.setItem("travellers", travellers);
                history.push(ROUTES.BARNARDCASTLESEARCH);
            }
        } else if (destination === "Bamburgh Castle") {
            if (source !== "Newcastle Haymarket Bus Station") {
                alert("We suggest choosing Haymarket Bus Station as no buses run to Bamburgh Castle from this stop");
            } else {
                const localStorage = window.localStorage;
                localStorage.setItem("source", source.split(" ")[1].toLowerCase());
                localStorage.setItem("destination", destination);
                localStorage.setItem("date", selectedDate);
                localStorage.setItem("time", time);
                localStorage.setItem("travellers", travellers);
                history.push(ROUTES.BAMBURGHCASTLESEARCH);
            }
        }

    };

    return (
        <IonContent className="ion-margin-bottom">
            <IonRow className="plannerbackgroundimage">
                <IonCol className="cardcolumnplanjourney">
                    <IonCard className="ticketboxcard">
                        <IonRow className="ion-justify-content-center ion-padding">
                            {/* Dropdown to select source of journey */}
                            <IonCol className="ticketboxcol1">
                                <IonItem className="ticketboxitem">
                                    <IonLabel>Travel From</IonLabel>
                                    <IonSelect
                                        value={source}
                                        placeholder="Select One"
                                        onIonChange={e => setSource(e.detail.value)}
                                    >
                                        <IonSelectOption value="Newcastle Haymarket Bus Station">Newcastle Haymarket Bus Station</IonSelectOption>
                                        <IonSelectOption value="Newcastle Eldon Square Bus Station">Newcastle Eldon Square Bus Station</IonSelectOption>
                                    </IonSelect>
                                </IonItem>
                            </IonCol>
                            {/* Dropdown to select destination/castle of journey */}
                            <IonCol className="ticketboxcol2">
                                <IonItem className="ticketboxitem">
                                    <IonLabel>Travel To</IonLabel>
                                    <IonSelect
                                        value={destination}
                                        placeholder="Select One"
                                        onIonChange={e => setDestination(e.detail.value)} >
                                        <IonSelectOption value="Alnwick Castle">Alnwick Castle</IonSelectOption>
                                        <IonSelectOption value="Auckland Castle">Auckland Castle</IonSelectOption>
                                        <IonSelectOption value="Bamburgh Castle">Bamburgh Castle</IonSelectOption>
                                        <IonSelectOption value="Barnard Castle">Barnard Castle</IonSelectOption>
                                    </IonSelect>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        {/* Dropdown to select number of travellers */}
                        <IonRow className="ion-justify-content-center ion-padding-horizontal">
                            <IonItem className="ticketboxitem">
                                <IonLabel>Number of Travellers</IonLabel>
                                <IonSelect
                                    value={travellers}
                                    placeholder="1"
                                    onIonChange={e => setTravellers(e.detail.value)}
                                >
                                    <IonSelectOption value="1">1</IonSelectOption>
                                    <IonSelectOption value="2">2</IonSelectOption>
                                    <IonSelectOption value="3">3</IonSelectOption>
                                    <IonSelectOption value="4">4</IonSelectOption>
                                    <IonSelectOption value="5">5</IonSelectOption>
                                </IonSelect>
                            </IonItem>
                        </IonRow>

                        {/* Datepicker to select date and time of journey */}
                        <IonRow className="ion-justify-content-center ion-padding">
                            <IonDatetime locale="en-GB" value={selectedDate} size="fixed" hourCycle="h24" min={minDate.toISOString().substring(0, 10)} max={maxDate.toISOString().substring(0, 10)} onIonChange={e => {
                                setSelectedDate(e.detail.value);
                                let d = e.detail.value.split('T')[1];

                                let m = d.split(':')[0];

                                let n = d.split(':')[1];

                                var tm = m + n;
                                setTime(tm);

                            }
                            }></IonDatetime>
                        </IonRow>

                        {/* Button to get bus timings */}
                        <IonRow className="ion-justify-content-center ion-padding">
                            <IonButton className="ticketboxbutton linkStyles" size="large" color="brand" expand="full" onClick={sendDetails}>
                                <IonText className="ion-padding">
                                    Get Details
                                </IonText>
                            </IonButton>
                        </IonRow>
                    </IonCard>
                </IonCol>
            </IonRow>
            <Footer />
        </IonContent >

    );
};

export default PlanJourney;