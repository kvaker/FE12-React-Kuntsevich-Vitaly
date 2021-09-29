import React from "react";
import { Switch, Route, Redirect, useHistory} from "react-router-dom";
import CardHolder from "../Components/CardHolder/CardHolder";
import CardDetails from "../Components/CardHolder/CardDetails";

const RoutRouter = () => {
    const isUserLoggedIn = false;

    return (
        <React.Fragment>
            <Switch>
            <Route path={"/cards/:taskID"}>
                <CardDetails/>
            </Route>
            <Route path={"/cards"}>
            <CardHolder/>
            </Route>
            <Route exact path={"/"}>
               <div>
                   Привет!
               </div>
            </Route>
              </Switch>
            <Route exact path={"/"}>
                <div>
                    Привет!
                </div>
        </Route>
        </React.Fragment>
    )
}

export default RoutRouter