import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { IonContent, IonPage } from "@ionic/react";
import axios from "axios";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

/* Navbar imports */
import SmallNavbar from "./components/SmallNavbar";
import LargeNavbar from "./components/LargeNavbar";

/* Page imports */
import * as ROUTES from "./constants/routes";
const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const PlanJourney = lazy(() => import("./pages/PlanJourney"));

const AlnwickCastleSearch = lazy(() => import("./pages/AlnwickCastleSearch"));
const AlnwickCastleSearchReturn = lazy(() => import("./pages/AlnwickCastleSearchReturn"));


const AucklandCastleSearch = lazy(() => import("./pages/AucklandCastleSearch"));
const AucklandCastleSearchReturn = lazy(() => import("./pages/AucklandCastleSearchReturn"));

const BamburghCastleSearch = lazy(() => import("./pages/BamburghCastleSearch"));
const BamburghCastleSearchReturn = lazy(() => import("./pages/BamburghCastleSearchReturn"));

const BarnardCastleSearch = lazy(() => import("./pages/BarnardCastleSearch"));
const BarnardCastleSearchReturn = lazy(() => import("./pages/BarnardCastleSearchReturn"));

const NotFound = lazy(() => import("./pages/NotFound"));

const Itinerary = lazy(() => import("./pages/Itinerary"));

setupIonicReact();

axios.defaults.baseURL = "http://localhost:8080/ttc/castle";

const App = () => (
  <IonApp>
    <IonReactRouter>
      {/* Loading GIF for when page is loading */}
      <Suspense
        fallback={
          <section>
            <div
              className="container m-auto flex justify-content-center"
              style={{ height: "100vh" }}
            >
              <div
                className="m-auto flex max-w-screen-lg flex-col text-center"
                style={{ textAlign: "center" }}
              >
                <img
                  width="128px"
                  height="128px"
                  style={{ marginTop: "20%" }}
                  src="/assets/loader.gif"
                  alt="loader"
                />
              </div>
            </div>
          </section>
        }
      >
        <IonPage>
          {/* Displays small navbar when on phone */}
          <SmallNavbar />
          <IonContent fullscreen>
            {/* Displays large navbar on desktop */}
            <LargeNavbar />
            <IonRouterOutlet>
              {/* Page routes defined in routes.js in the constants folder */}
              <Route path={ROUTES.ABOUT_US} component={AboutUs} exact />
              <Route path={ROUTES.CONTACT} component={Contact} exact />
              <Route path={ROUTES.PLANJOURNEY} component={PlanJourney} exact />
              <Route path={ROUTES.HOME} component={Home} exact />

              <Route path={ROUTES.ALNWICKCASTLESEARCH} component={AlnwickCastleSearch} exact />
              <Route path={ROUTES.ALNWICKCASTLESEARCHRETURN} component={AlnwickCastleSearchReturn} exact />

              <Route path={ROUTES.AUCKLANDCASTLESEARCH} component={AucklandCastleSearch} exact />
              <Route path={ROUTES.AUCKLANDCASTLESEARCHRETURN} component={AucklandCastleSearchReturn} exact />

              <Route path={ROUTES.BAMBURGHCASTLESEARCH} component={BamburghCastleSearch} exact />
              <Route path={ROUTES.BAMBURGHCASTLESEARCHRETURN} component={BamburghCastleSearchReturn} exact />

              <Route path={ROUTES.BARNARDCASTLESEARCH} component={BarnardCastleSearch} exact />
              <Route path={ROUTES.BARNARDCASTLESEARCHRETURN} component={BarnardCastleSearchReturn} exact />


              <Route path={ROUTES.ITINERARY} component={Itinerary} exact />

              <Route component={NotFound} />
            </IonRouterOutlet>
          </IonContent>
        </IonPage>
      </Suspense>
    </IonReactRouter>
  </IonApp>
);

export default App;
