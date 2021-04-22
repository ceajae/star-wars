import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Loader from "../common/loader";

const Starships = React.lazy(() => import("../components/starships"));
const Vehicles = React.lazy(() => import("../components/vehicles"));
const Species = React.lazy(() => import("../components/species"));
const Planets = React.lazy(() => import("../components/planets"));
const People = React.lazy(() => import("../components/people"));
const Films = React.lazy(() => import("../components/films"));
const Home = React.lazy(() => import("../components/home"));

const PublicRoutes = () => {

    return(
        <Router>
            <React.Suspense fallback={<Loader />}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/films" component={Films} />
                    <Route exact path="/people" component={People} />
                    <Route exact path="/planets" component={Planets} />
                    <Route exact path="/species" component={Species} />
                    <Route exact path="/vehicles" component={Vehicles} />
                    <Route exact path="/starships" component={Starships} />
                </Switch>
            </React.Suspense>
        </Router>
    );
}

export default PublicRoutes;