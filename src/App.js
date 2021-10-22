import './App.css';
import Home from "./pages/Home";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import React from 'react';
import {CssBaseline} from "@material-ui/core";
import {Route, Switch} from 'react-router-dom'

function App() {
    return (
        <React.Fragment>
            <CssBaseline/>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route exact path={'/info'} component={Info}/>
                <Route path={'*'} component={NotFound}/>
            </Switch>
        </React.Fragment>
    );
}

export default App;
