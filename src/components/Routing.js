import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Counter from "../containers/Counter";
import Home from "../containers/Home";
import Users from "../containers/Users";
import Test1 from "./Test1";

function Routing() {
    return (
        <Switch>
            <Route path={"/home"}>
                <Redirect to={"/"} />
            </Route>
            <Route path={"/test"} component={Test1} />
            <Route path={"/users"} component={Users} />
            <Route path={"/counter"} component={Counter} />
            <Route path={"/card"} render={() => <h1>Cards</h1>} />
            <Route path={"/"} component={Home} exact />
            <Route path={"*"} render={() => <h1>404 Error</h1>} />
        </Switch>
    )
}
export default Routing