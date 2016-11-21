/**
 * Created by BenYin on 11/21/2016.
 */
import React from "react";
import ReactDOM from "react-dom";
import {Provider, connect} from "react-redux";
import {createStore} from "redux";
import reducers from "./reducers";


let store = createStore(reducers);


var App = React.createClass({
    render: function () {
        return (
            <div className="container-fluid">
                <div id="element" className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12">
                        <div className="row">
                            <div id="littleicon" className="col-xs-1"></div>
                            <div className="col-xs-11">
                                <div className="row">
                                    <div className="col-xs-4">bjstdmngbgr02.thoughtworks.com</div>
                                    <div className="col-xs-1">idle</div>
                                    <div className="col-xs-3">192.168.1.2</div>
                                    <div className="col-xs-4">/var/lib/cruise-agent</div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-2"> + Specify Resources</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});


var AppWrapper = connect(state => state)(App);


ReactDOM.render(
    <Provider store={store}>
        <AppWrapper />
    </Provider>,
    document.getElementById("sample")
);
