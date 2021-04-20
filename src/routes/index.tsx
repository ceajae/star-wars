import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Login = React.lazy(() => import("../common/header"));

const PublicRoutes = () => {

    return(
        <Router>
            <React.Suspense fallback={<div>load</div>}>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/films" component={Login} />
                    <Route exact path="/people" component={Login} />
                    <Route exact path="/planets" component={Login} />
                    <Route exact path="/species" component={Login} />
                    <Route exact path="/vehicles" component={Login} />
                    <Route exact path="/starships" component={Login} />
                </Switch>
            </React.Suspense>
        </Router>
    );
}

export default PublicRoutes;